import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../../services';
import { CustomInput } from '../CustomInput'
import { CustomForm } from '../CustomForm'

export const Login = () => {

    const [user, setUser] = useState({ email: '', password: '' });

    const history = useHistory();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const res = await postLogin(user);
            console.log(res);
            history.push('/')
            setUser({ email: '', password: '' })
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = ev => {
        setUser({
            ...user,
            [ev.target.name]: ev.target.name
        })
    }
    const totalInputs = ['email', 'password'];
    
    return (
        <div className="container container-fluid">
            <CustomForm 
                handleSubmit={handleSubmit}
                inputs={totalInputs}
                state={user}
                setState={setUser}
            />
        </div>
    )
}
