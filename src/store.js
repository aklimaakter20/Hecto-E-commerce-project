import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './Components/slice/cartSlice'

export default configureStore({
  reducer: {
    cartItemSlice: cartSlice.reducer
  }
})