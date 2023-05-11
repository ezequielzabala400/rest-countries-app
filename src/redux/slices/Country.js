import { createSlice } from "@reduxjs/toolkit";
import { searchCountry } from "../../data/countriesData";


const initialState = {
    country: null
}

const CountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        resetData: (state) => {
            return{...state, country: null};
        }
    },
    extraReducers(builder) {
        builder.addCase(searchCountry.fulfilled, (state,action) => {
            state.country = action.payload
        })
    },
})

export const {resetData} = CountrySlice.actions

export const CountryReducer = CountrySlice.reducer