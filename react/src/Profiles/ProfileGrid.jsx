import React from 'react'
import { useContext } from "react";
import { UserContext } from "../userContext";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const ProfileGrid = ({ profile, deleteProfile }) => {
  let { authToken, setAuthToken } = useContext(UserContext);
  let { usuari, setUsuari } = useContext(UserContext);
  let navigate = useNavigate();

  return (
    <>
      <div className="element">

        <div className="texto">
          <div className="Cos de text">{profile.name}</div>
          <div className="veureeditaresborrar"><button onClick={(e) => { navigate("/profiles/" + profile.id) }}>veure</button>
            {usuari == profile.author.email ?
              <>
                <button onClick={(e) => { navigate("/profiles/edit/" + profile.id) }}>editar</button>
                <button onClick={(e) => { deleteProfile(profile.id) }} >Borrar</button>
              </>
              : <></>}
          </div>
        </div>
      </div>
    </>

  )
}

export default ProfileGrid
