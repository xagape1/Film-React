import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './slices/profiles/profileSlice'

export const store = configureStore({
    reducer: {
        profiles:profileSlice
    }
})
