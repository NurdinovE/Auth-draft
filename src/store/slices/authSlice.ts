import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export interface LoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const hostname = 'http://85.209.9.201/'

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData: IRegisterData) => {
        try {
            const response = await axios.post(hostname + '/api/v1/auth/register/', userData);
            localStorage.setItem('user', JSON.stringify(response.data.data))
            return response.data;
        } catch (error: any) {
            throw error.response.data.error;
        }
    });

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials: LoginData) => {
        try {
            const response = await axios.post(hostname + '/api/v1/auth/register/', credentials);
            localStorage.setItem('user', JSON.stringify(response.data.data))
            return response.data;
        } catch (error: any) {
            throw error.response.data.error;
        }
    });

interface IState {
    loading: boolean,
    user: string,
    error: any
}


const initialState: IState = {
    loading: false,
    user: '',
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.user = '';
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.user = '';
                console.log(action.error.message)
                if (action.error.message === "Request failed with status code 401") {
                    state.error = 'Access Denied! Invalid Credentials'
                } else {
                    state.error = action.error.message
                }

            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = '';
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = '';
                console.log(action.error.message)
                if (action.error.message === "Request failed with status code 401") {
                    state.error = 'Access Denied! Invalid Credentials'
                } else {
                    state.error = action.error.message
                }
            })
    },
});


export default authSlice.reducer;
