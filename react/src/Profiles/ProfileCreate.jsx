import React from 'react'
import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { addPost, addProfile } from '../slices/profiles/thunks';

const ProfileCreate = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let [formulari, setFormulari] = useState({});

    const { id } = useParams();

    const { isSaving = true, error = "" } = useSelector((state) => state.profile);

    let { authToken, setAuthToken } = useContext(UserContext);

    let { name } = formulari;
    const formData = new FormData;
    formData.append("name", name);

    const handleChange = (e) => {
        if (e.target.type && e.target.type === "file") {
            setFormulari({
                ...formulari,
                [e.target.name]: e.target.files[0]
            })
        } else {
            setFormulari({
                ...formulari,
                [e.target.name]: e.target.value
            })
        }
    };

    const handleReset = (e) => {
        e.preventDefault()
        setFormulari({
            ...formulari,
            name: ""
        })
    };
    //  const handleCreate = async (e) => {
    //    e.preventDefault();
    //    let { name, upload, latitude, longitude, visibility = 1 } = formulari;
    //    const formData = new FormData();
    //    formData.append("name", name);
    //    formData.append("upload", upload);
    //    formData.append("latitude", latitude);
    //    formData.append("longitude", longitude);
    //    formData.append("visibility", visibility);
    //    try {
    //      const data = await fetch("https:backend.insjoaquimmir.cat/api/posts", {
    //        headers: {
    //          'Accept': 'application/json',
    //          'Authorization': 'Bearer ' + authToken
    //        },
    //        method: "POST",
    //        name: formData
    //      });
    //      const resposta = await data.json();
    //      if (resposta.success === true) {
    //        console.log("post creado")
    //        navigate("/posts/" + resposta.data.id)
    //      } else {
    //        console.log(resposta.message)
    //        setError(resposta.message);
    //      }
    //    } catch {
    //      console.log("Error");
    //      alert("catch");
    //    };
    //  }

    return (
        <div>
            <div className="card ">
                <div className="card-header ">

                    <h1 className="text-center h2 fw-bold">Crear Profile</h1>

                </div >
                <form method="post" className="separar " action="{{ route('posts.store') }}" enctype="multipart/form-data">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" value={formulari.name} onChange={handleChange} name="name" className="form-control" />
                    </div>
                    {isSaving ?
                        <>

                        </> :
                        <>
                            <button className="btn btn-primary" onClick={(e) => {
                                e.preventDefault(),
                                    dispatch(addProfile(authToken, formData, navigate, dispatch));
                            }}>Crear Perfil</button>
                        </>
                    }
                    <button className="btn btn-secondary" onClick={() => {
                        handleReset(e);
                    }}>Reset</button>
                    {error ? (<div>{error}</div>) : (<></>)}        </form>
            </div>
        </div>
    )

}

export default ProfileCreate
