import { createSlice } from "@reduxjs/toolkit";

const words = ['react', 'tranquil', 'mechanization', 'christmas']

const wordSlice = createSlice({
    name: 'word',
    initialState: {
        selectedWord: words[Math.floor(Math.random() * words.length)],
        correctLetters: [],
        wrongLetters: []
    },
    reducers: {
        appendCorrectLetters: (state, action) => {
            state.correctLetters = [...state.correctLetters, action.payload]
        },
        appendWrongLetters: (state, action) => {
            state.wrongLetters = [...state.wrongLetters, action.payload]
        }, 
        resetWrongLetters: state => void(state.wrongLetters = []),
        resetCorrectLetters: state => void(state.correctLetters = []),
        resetSelectedWord: state => void(state.selectedWord = words[Math.floor(Math.random() * words.length)]),
    }
})

export const { appendCorrectLetters, appendWrongLetters, resetCorrectLetters, resetWrongLetters, resetSelectedWord } = wordSlice.actions
export default wordSlice.reducer