import { createSlice } from "@reduxjs/toolkit";
import { searchCountry } from "../../data/countriesData";


const initialState = {
    country: null
}

const CountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(searchCountry.fulfilled, (state,action) => {
            state.country = action.payload
        })
    },
})

export const CountryReducer = CountrySlice.reducer