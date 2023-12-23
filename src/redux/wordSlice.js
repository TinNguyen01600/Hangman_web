import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
    name: 'word',
    initialState: {
        correctLetters: [],
        wrongLetters: []
    },
    reducers: {
        appendCorrectLetters: (state, action) => {

        }
    }
})

export const { appendCorrectLetters } = wordSlice.actions
export default wordSlice.reducer