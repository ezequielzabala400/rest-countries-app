
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { CountriesReducer } from '../slices/Countries'
import { DarkModeReducer } from '../slices/DarkMode'
import { CountryReducer } from '../slices/Country'


export const reducers = combineReducers({
    countries: CountriesReducer,
    darkMode: DarkModeReducer,
    country: CountryReducer
})

export const store = configureStore({
    reducer: reducers
})

