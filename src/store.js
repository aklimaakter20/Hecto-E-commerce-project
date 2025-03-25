import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './Components/slice/cartSlice'
import { wishSlice } from './Components/slice/wishSlice'

export default configureStore({
  reducer: {
    cartItemSlice: cartSlice.reducer,
    wishItemSlice: wishSlice.reducer,
  }
})