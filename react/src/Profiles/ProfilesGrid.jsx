import React from 'react'
import { useContext,useState,useEffect, } from "react";
import { UserContext } from "../userContext";
import { useParams } from 'react-router-dom';
import ProfileGrid from './ProfileGrid';
import { useNavigate } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';

// POSTS SLICES
import { useSelector, useDispatch } from 'react-redux';
import { getProfiles } from '../slices/profiles/thunks';

const ProfilesGrid = () => {
  let { authToken, setAuthToken, usuari, setUsuari } = useContext(UserContext);
  //let [error, setError] = useState("");
  // let [posts, setPosts] = useState([]);
  let dispatch = useDispatch();
  // const [refresh, setRefresh] = useState(false)
  const { profiles=[], isLoading=true} = useSelector((state) => state.profiles)

  // const { data, /*error, */reRender, loading, setUrl } = useFetch("https://backend.insjoaquimmir.cat/api/posts/", {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     'Authorization': 'Bearer ' + authToken,
  //   },
  //   method: "GET",
  // });

  useEffect(() => {
    dispatch(getProfiles(authToken))
  }, []);

  useEffect(() => {
    console.log(page)
    dispatch(getProfiles(authToken))
  }, []);

  // const deletePost = async (id) => {
  //   try {
  //     const data = await fetch(("https://backend.insjoaquimmir.cat/api/posts/" + id), {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Authorization': 'Bearer ' + authToken
  //       },
  //       method: "DELETE",
  //     });
  //     const resposta = await data.json();
  //     if (resposta.success === true) {
  //       console.log("post eliminado")
  //       setRefresh(!refresh)
  //     }
  //     else {
  //       console.log(resposta.message)
  //       setError(resposta.message);
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //     alert("Catch");
  //   };
  // }
  return (
    <div>
      <h1>Profiles Grid</h1>
        {isLoading ?
          "Cargando perfils.." :
          profiles.map((profile) => (
          <tr key={profile.id}>
              <ProfileGrid profile={profile} />
          </tr>
        ))}
    </div>
  )
}

export default ProfilesGrid
