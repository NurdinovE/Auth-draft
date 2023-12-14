// components/RegisterForm.tsx
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../store/slices/authSlice.ts";
import {Button, Fieldset, PasswordInput, TextInput} from "@mantine/core";


const RegisterForm: React.FC = (confirm) => {
    const {loading, error} = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        console.log(formData)
        e.preventDefault();
        // @ts-ignore
        dispatch(registerUser(formData));
        confirm
    };

    return (
        <div>

            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <Fieldset legend="Personal information" variant="filled" radius="md">
                    <TextInput label="Username" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
                    <TextInput label="firstName" placeholder="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <TextInput label="lastName" placeholder="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <TextInput label="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        name="password" value={formData.password} onChange={handleChange}
                    />
                </Fieldset>
                <Button variant="filled" color="yellow" type="submit">{loading? 'Загрузка...' : "Зарегистрироваться"}</Button>
                {error && (
                    <>
                        {error}
                    </>
                )}
            </form>
        </div>
    );
};

export default RegisterForm;
