// components/UserInfo.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../shared/services/apiService.ts';
import { RootState } from '../../store';

const UserInfo: React.FC = () => {
    const token = useSelector((state: RootState) => state.auth.token); // Assuming you have a token in your Redux state
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                if (token) {
                    const data = await getUserInfo(token);
                    setUserInfo(data);
                }
            } catch (error) {
                setError('Failed to fetch user information');
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, [token]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!userInfo) {
        return <p>User information not available.</p>;
    }

    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>

        </div>
    );
};

export default UserInfo;
