import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    darkMode: false
}

const DarkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            return {...state, darkMode: !state.darkMode}
        }
    }
})

export const {toggleDarkMode} = DarkModeSlice.actions

export const DarkModeReducer = DarkModeSlice.reducer