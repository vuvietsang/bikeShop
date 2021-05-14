import { createSlice } from "@reduxjs/toolkit";


if (JSON.parse(localStorage.getItem('cart')) !== null) {
    var cartInitial = JSON.parse(localStorage.getItem('cart'));
} else {
    cartInitial = [];
}

const quantity = cartInitial.reduce((total, { quantity }) => total + quantity, 0);
const cartSlice = createSlice({
    name: 'numPros',
    initialState: quantity,
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        }
    }
})

const { actions, reducer } = cartSlice;
export const { increase, decrease } = actions;
export default reducer;