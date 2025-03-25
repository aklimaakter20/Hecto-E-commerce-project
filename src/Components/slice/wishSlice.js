import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wishItemSlice",
  initialState: {
    wishItem: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [],
  },
  reducers: {
    addWishList: (state, action) => {

       console.log(action.payload);
       
        
      let findItem = state.wishItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findItem === -1) {
        state.wishItem.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishItem));
      } 
    },

   
 
 

}

});

// Action creators are generated for each case reducer function
export const { addWishList } = wishSlice.actions

export default wishSlice.reducer;