import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saldo: 0,
    passSimplesSem: 0,
    passDuplasSem: 0
};

export const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        add_config: (state, action) => {
            state.saldo = action.payload.saldo;
            state.passSimplesSem = action.payload.passSimplesSem;
            state.passDuplasSem = action.payload.passDuplasSem;
            return state;
        }
    }
});

export const { add_config } = configSlice.actions;

export default configSlice.reducer;