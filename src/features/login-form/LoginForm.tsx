// components/LoginForm.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from "../../store/slices/authSlice.ts";
import {Button, Fieldset, PasswordInput, TextInput} from '@mantine/core';



const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const error = useSelector((state: any) => state.auth.error);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        // @ts-ignore
        dispatch(loginUser(formData));
    };

    return (
        <div>
            <h2>Вход</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <Fieldset legend="Personal information" variant="filled" radius="md">
                    <TextInput label="Username" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        name="password" value={formData.password} onChange={handleChange}
                    />
                </Fieldset>
                <Button variant="filled" color="yellow" type="submit">Войти</Button>
            </form>
        </div>
    );
};

export default LoginForm;
