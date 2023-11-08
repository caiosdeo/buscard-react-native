import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = {
    saldo: 0,
    passSimples: 0,
    passDuplas: 0
};

const createAlert = (title, msg) =>
Alert.alert(title, msg, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
]);

export const cartaoSlice = createSlice({
    name: "cartao",
    initialState,
    reducers: {
        add_saldo: (state, action) => {
            state.saldo = action.payload;
            state.passSimples = Math.floor(action.payload / 3.75);
            state.passDuplas = Math.floor(action.payload / 5.63);
            return state;
        },

        update_cartao: (state, action) => {
            let temPassSimples = (state.passSimples > 0);
            let temPassDuplas = (state.passDuplas > 0);

            if(state.saldo > 0 && (temPassSimples || temPassDuplas)){

                let novoSaldo = state.saldo;

                novoSaldo = (action.payload === "passSimples") ? novoSaldo -= 3.75 : novoSaldo -= 5.63;
                novoSaldo = Number(novoSaldo.toFixed(2));

                if(novoSaldo >= 0){
                    state.saldo = novoSaldo;
                    state.passSimples = Math.floor(novoSaldo / 3.75);
                    state.passDuplas = Math.floor(novoSaldo / 5.63);

                    return state;
                }
            }
            createAlert('Saldo insuficiente!', 'Não possui saldo para debitar uma passagem.');
            return state;
        }
    }
});

export const { add_saldo, update_cartao } = cartaoSlice.actions;

export default cartaoSlice.reducer;