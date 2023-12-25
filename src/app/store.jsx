import { configureStore } from "@reduxjs/toolkit";
import wordReducer from '../redux/wordSlice'
import gameplayReducer from '../redux/gameplaySlice'

const store = configureStore({
    reducer: {
        word: wordReducer,
        gameplay: gameplayReducer
    }
})

export default store