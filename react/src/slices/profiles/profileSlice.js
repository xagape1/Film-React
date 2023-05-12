import { createSlice } from "@reduxjs/toolkit";
const initialState = {

    formulari:[],

    isSaving: false,

    error: "",
    
    isLoading:false,

    profiles:[],

    profiles:{ 
        name: ""
    },
    
}
export const profileSlice = createSlice({

    name: "profile",

    initialState,

    reducers: {

        setisSaving: (state,action) => {
            state.isSaving = action.payload;
        },

        setisLoading: (state, action) => {

            state.isLoading = action.payload;
        },

        setError: (state, action) => {

            state.error = action.payload

        },

        setProfile: (state,action) => {

            state.profile = action.payload

        },
        setProfiles: (state,action) => {

            state.profiles = action.payload

        },
    }

});

export const { setisSaving, setisLoading, setProfile, setError,setProfiles } = profileSlice.actions;

export default profileSlice.reducer
