import { setisSaving, setisLoading, setError, setProfile, setProfiles } from "./profileSlice"

export const addProfile = (data2, authToken, navigate) => {
    return async (dispatch, getState) => {

        let { name } = data2;
        const formData = new FormData;
        formData.append("name", name);

        const headers = {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
            body: formData
        };

        const url = "http://127.0.0.1:8000/api/profile"

        const data = await fetch(url, headers);

        const resposta = await data.json();

        if (resposta.success == true) {
            console.log("profile creado: " + resposta.data)
            dispatch(setisSaving(false))

            navigate("/profiles/" + resposta.data.id)

        }

        else {
            console.log(resposta)
            dispatch(setError(resposta.message));

        }
    };

}
export const getProfile = (authToken, id) => {
    return async (dispatch, getState) => {
        dispatch(setisLoading(true));
        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://127.0.0.1:8000/api/profile/" + id;
        const data = await fetch(url, headers);
        const resposta = await data.json();
        if (resposta.success == true) {
            dispatch(setisLoading(false));
            dispatch(setProfile(resposta.data));
            console.log(resposta.data)
        }
        else {
            dispatch(setError(resposta.message));
        }
    };
}
export const delProfile = (authToken, navigate, id) => {
    return async (dispatch, getState) => {
        const data = await fetch(
            "http://127.0.0.1:8000/api/profile" + id,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken,
                },
                method: "DELETE",
            }
        );
        const resposta = await data.json();
        if (resposta.success == true) {
            console.log("profile eliminado");
            navigate("/profiles/list")
        } else {
            dispatch(setError(resposta.message));
        }

    };
};

export const handleUpdate = (authToken, id, formulari, navigate) => {
    return async (dispatch, getState) => {
        console.log(formulari.name)
        let { name } = formulari;

        console.log(upload)
        const formData = new FormData();
        formData.append("name", name);
        console.log(formData)
        const data = await fetch(
            "http://127.0.0.1:8000/api/profile" + id,
            {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + authToken,
                },
                method: "POST",
                body: formData
            }
        );
        const resposta = await data.json();
        if (resposta.success == true) {
            console.log("profile actualizado")
            navigate("/profile/" + resposta.data.id)
        } else {
            console.log(resposta.message)
            dispatch(setError(resposta.message));
        }

    };
};
export const getProfiles = (authToken) => {
    return async (dispatch, getState) => {
        dispatch(setisLoading(true));
        const url = "http://127.0.0.1:8000/api/profile";
        const headers = {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        try {
            const response = await fetch(url, headers);
            const data = await response.json();
            if (data.success) {
                dispatch(setProfiles({ data: data.data }));
                console.log("AAAAAAAAAAAAAAAAAA");
                console.log(data);
            } else {
                dispatch(setError(data.message));
            }
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setisLoading(false));
        }
    };
};



/*

export const getProfiles = (authToken, page = 0) => {

    return async (dispatch, getState) => {
        let url = "";
        const filter = getState().places.filter;
        console.log("entra: " + filter.description, filter.author)

        dispatch(setisLoading(true));
        if (filter.description == "" && filter.author == "") {
            url =
                page > 0

                    ? "https://backend.insjoaquimmir.cat/api/places?paginate=1&page=" + page

                    : "https://backend.insjoaquimmir.cat/api/places";
        } else if (!filter.author == "" && filter.description == "") {
            url =

                page > 0

                    ? "https://backend.insjoaquimmir.cat/api/places?paginate=1&page=" + page + "&author=" + filter.author

                    : "https://backend.insjoaquimmir.cat/api/places?author=" + filter.author;
        } else if (!filter.author == "" && !filter.description == "") {
            console.log("entra al bueno")
            url =

                page > 0

                    ? "https://backend.insjoaquimmir.cat/api/places?paginate=1&page=" + page + "&description=" + filter.description + "&author=" + filter.author

                    : "https://backend.insjoaquimmir.cat/api/places?description=" + filter.description + "&author=" + filter.author;;
        }
        else if (filter.author == "" && !filter.description == "") {
            url =

                page > 0

                    ? "https://backend.insjoaquimmir.cat/api/places?paginate=1&page=" + page + "&description=" + filter.description

                    : "https://backend.insjoaquimmir.cat/api/places?description=" + filter.description;
        }

        const headers = {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        // const url = "https://backend.insjoaquimmir.cat/api/places"
        const data = await fetch(url, headers);
        const resposta = await data.json();
        if (resposta.success == true) {
            if (page > 0) {
                dispatch(setPlaces(resposta.data.collection));

                dispatch(setPages(resposta.data.links));

                console.log(resposta.data.links);

            } else {

                dispatch(setPlaces(resposta.data));

            }
            dispatch(setisLoading(false));
            // dispatch(setPlaces(resposta.data));
            console.log(resposta.data)
        }
        else {
            dispatch(setError(resposta.message));
        }
    };
}
*/