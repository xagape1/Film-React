import React, { useState } from 'react';
import { useContext } from "react";
import { UserContext } from "../userContext";
import { useForm } from "react-hook-form";
import { useLogin } from '../hooks/useLogin';
import './Login.css';

const Login = ({ setLogin }) => {
    const { doLogin, error, setError } = useLogin()
    const onSubmit = data => doLogin(data)

    let { authToken, setAuthToken } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="login-container">
            <form class="formi">
                <img className="logo" src="/images/filmcompany.png" alt="Logo" />
                <label className="labelLogin" for="form2Example1">Sign in</label>
                <label className="label" >Email address</label>
                <div className="form-outline mb-4">
                    <input {...register("email", {
                        required: "Aquest camp és obligatori",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@/,
                            message:
                                "El correu ha de ser de la organització insjoaquimmir.cat"
                        }
                    })}
                        type="email" id="form2Example1" className="form-control"
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                </div>
                <label className="form-label" for="form2Example2">Password</label>

                <div className="form-outline mb-4">

                    <input {...register("password")}
                        type="password" id="form2Example2" className="form-control"
                    />

                </div>

                <button type="button" className="sign"
                    onClick={handleSubmit(onSubmit)}
                >Sign in</button>
                <div className="not">
                    <p>Not a member? <a href="#!"
                        onClick={() => {
                            setLogin(false)
                        }}
                    >Register</a></p>
                </div>
            </form>
        </div>
    )
};

export default Login;
