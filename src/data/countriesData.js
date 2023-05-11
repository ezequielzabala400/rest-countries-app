import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const searchCountries = async () => {
    try{
        const {data} = await axios('https://restcountries.com/v3.1/alpha?codes=esp,arg,jpn,deu,bra,qat,egy,jam');
        return data;
    }
    catch(e){
        console.log(e);
    }
}


export const searchRegion = createAsyncThunk('countries/region', async (region) => {
    try{
        const {data} = await axios(`https://restcountries.com/v3.1/region/${region}`);
        return data;
    }
    catch(e){
        console.log(e);
    }
})
export const searchCountry = createAsyncThunk('countries/country', async (name) => {
    try{
        const {data} = await axios(`https://restcountries.com/v3.1/name/${name}`);
        return data;
    }
    catch(e){
        console.log(e);
    }
})



