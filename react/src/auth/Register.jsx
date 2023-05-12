import React from 'react'
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../userContext";
//import { useForm } from '../hooks/useForm';
import './Register.css';

import { useForm } from "react-hook-form";

const Register = ({ setLogin }) => {
  let [error, setError] = useState("");
  let { authToken, setAuthToken } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => handleRegister(data)

  const handleRegister = async (formState) => {
    let { name, password, password2, email } = formState;
    try {
      if (password2 !== password) {
        setError("Els passwords han de coincidir")
        return false;
      }
      const data = await fetch("http://127.0.0.1:8000/api/register", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ name, email, password })
      });
      const resposta = await data.json();
      if (resposta.success === true) {
        setAuthToken(resposta.authToken);
      }
      else {
        console.log(resposta.message)
        setError(resposta.message);
      }
    } catch {
      console.log("Error");
      alert("Catchch");
    };
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className="logo" src="/images/filmcompany.png" alt="Logo" />
        <label className="labelLogin" for="form2Example1">Register</label>
        
        <div className="form-outline mb-4">
          <label className="label" for="form3Example3cg">Your Name</label>
          <br></br>
          <input  {...register("name", {
            required: "Aquest camp és obligatori",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]/,
              message:
                "Introdueix un nom"
            }
          })}
            className="form-control form-control-lg"
          />
          {errors.name && <p>{errors.name.message}</p>}

        </div>

        <div className="form-outline mb-4">
          <label className="label" for="form3Example3cg">Your Email</label>
          <br></br>
          <input  {...register("email", {
            required: "Aquest camp és obligatori",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@/,
              message:
                "El correu ha de ser de la organització insjoaquimmir.cat"
            }
          })}
            className="form-control form-control-lg"
          />
          {errors.email && <p>{errors.email.message}</p>}

        </div>
        <label className="form" for="form2Example2">Password</label>
        <div className="not">
          <input  {...register("password", {
            required: "Aquest camp és obligatori",
            minLength: {
              value: 8,
              message: "La contrasenya ha de tenir al menys 8 caràcters"
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
              message:
                "La contrasenya ha de contenir al menys una minúscula, una majúscula, un número i un caracter especial"
            }
          })}
            type="password" id="form3Example4cg"
            className="form-control form-control-lg"
          />

          {errors.password && <p>{errors.password.message}</p>}

        </div>
        <label className="form-label" for="form3Example4cdg">Repeat your password</label>

        <div className="form-outline mb-4">
          <input {...register("password2")}
            type="password" id="form3Example4cdg"
            className="form-control form-control-lg"
          />
        </div>
        <div>
        <button type="button" className="sign"
                    onClick={handleSubmit(onSubmit)}
                >Sign in</button>        </div>
        {error ? (<div>{error}</div>) : (<></>)}

        <p className="not">Have already an account? <a href="#!"
          onClick={() => {
            setLogin(true)
          }}
        >Login here</a></p>

      </form>

    </div>

  )
}

export default Register
