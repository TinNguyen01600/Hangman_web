import { createSlice } from "@reduxjs/toolkit";

const gameplaySlice = createSlice({
    name: 'gameplay',
    initialState: {
        enteredLetter: '',
    },
    reducers: {
        setEnteredLetter: (state, action) => {
            state.enteredLetter = action.payload
        }
    }
})

export const { setEnteredLetter } = gameplaySlice.actions
export default gameplaySlice.reducer