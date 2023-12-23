import { configureStore } from "@reduxjs/toolkit";
import wordReducer from '../redux/wordSlice'

const store = configureStore({
    reducer: {
        word: wordReducer
    }
})

export default store