import { createSlice } from "@reduxjs/toolkit";
import { searchCountries, searchRegion } from "../../data/countriesData";


const initialState = {
    countries: await searchCountries()
}

const CountriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        getDefaultCountries: (state) => {
            return {...state}
        },
        // searchForRegion: (state,action) => {
        //     let findedCountries = searchRegion(action.payload)
        //     console.log(findedCountries);
        //     return {...state, countries: searchRegion(action.payload)}
        // }

    },
    extraReducers(builder) {
        builder.addCase(searchRegion.fulfilled, (state, action) => {
            state.countries = action.payload
        })
    },
})


export const {
    getDefaultCountries,
    // searchForRegion
} = CountriesSlice.actions

export const CountriesReducer = CountriesSlice.reducer