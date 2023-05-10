import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const searchCountries = async () => {
    const {data} = await axios('https://restcountries.com/v3.1/alpha?codes=esp,arg,jpn,deu,bra,qat,egy,jam');

    return data;
}


export const searchRegion = createAsyncThunk('countries/region', async (region) => {
    const {data} = await axios(`https://restcountries.com/v3.1/region/${region}`);
    return data;
})
export const searchCountry = createAsyncThunk('countries/country', async (name) => {
    const {data} = await axios(`https://restcountries.com/v3.1/name/${name}`);
    return data;
})



