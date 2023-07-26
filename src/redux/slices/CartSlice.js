import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers: {
        addItemInCart: (state,action) => {
            state.push(action.payload)   
        },
        removeItemFromCart: (state,action) => {
            // return new state
              return state.filter(item => item.id!==action.payload)
            },
    },
});

export const { addItemInCart, removeItemFromCart } = CartSlice.actions;
export default CartSlice.reducer;