import React from 'react'
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../userContext";
import { useParams } from 'react-router-dom';
import ProfileGrid from './ProfileGrid';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import { useSelector, useDispatch } from 'react-redux';
import { getProfiles } from '../slices/profiles/thunks';

const ProfilesGrid = () => {
  let { authToken, setAuthToken, usuari, setUsuari } = useContext(UserContext);
  let dispatch = useDispatch();
  const { profiles = [], isLoading = true } = useSelector((state) => state.profiles)

  useEffect(() => {
    dispatch(getProfiles(authToken));
  }, [authToken, dispatch]);

  const handleBackClick = () => {
    navigate('/');
  };
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profiles Grid</h1>
      {isLoading ?
        "Loading profiles.." :
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(profiles) && profiles.length > 0 ? (
              profiles.map((profile) => (
                <tr key={profile.id}>
                  <ProfileGrid profile={profile} />
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="1">No hay perfiles disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      }
      <button className="btn btn-primary" type="submit" onClick={handleBackClick} >Go Back</button>
    </div>
  );
}

export default ProfilesGrid;
