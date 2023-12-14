// services/apiService.ts
import axios from 'axios';

const API_BASE_URL = 'http://85.209.9.201/api/v1';

export const getUserInfo = async (token: string): Promise<any> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/auth/user/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};
