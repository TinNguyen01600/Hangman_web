import { createSlice } from "@reduxjs/toolkit";

const gameplaySlice = createSlice({
    name: 'gameplay',
    initialState: {
        enteredLetter: '',
        playable: true
    },
    reducers: {
        setEnteredLetter: (state, action) => void(state.enteredLetter = action.payload),
        setPlayable: (state, action) => void(state.playable = action.payload)
    }
})

export const { setEnteredLetter, setPlayable } = gameplaySlice.actions
export default gameplaySlice.reducer