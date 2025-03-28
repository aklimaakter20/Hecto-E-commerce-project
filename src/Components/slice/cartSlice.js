import { createSlice } from '@reduxjs/toolkit'
import { action } from 'react';

export const cartSlice = createSlice({
  name: 'cartItemSlice',
  initialState: {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  },
  reducers: {
    addToCart: (state, action) => {
      
       let findProducts = state.cartItems.findIndex((item) => item.id === action.payload.id)
       console.log(findProducts);
       

      if (findProducts === -1) {
        state.cartItems.push(action.payload)
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      } else {
        state.cartItems[findProducts].qty += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      }
    },
    increment: (state, action) => {
      state.cartItems[action.payload].qty += 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
      
    },
    decrement: (state, action) =>{
      state.cartItems[action.payload].qty -= 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItems))

    },
    deleteProduct: (state,action) => {
      state.cartItems.splice(action.payload,1)
      localStorage.setItem("cart", JSON.stringify(state.cartItems))

    },
    clearCart:(state, action) => {
      state.cartItems = []
      localStorage.setItem("cart", JSON.stringify(state.cartItems))

    }
   
    } 
})

// Action creators are generated for each case reducer function
export const {addToCart, increment,decrement,deleteProduct,clearCart} = cartSlice.actions

export default cartSlice.reducer