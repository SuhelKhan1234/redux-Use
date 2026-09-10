import { CartSlice } from './Slices/CartSlices'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
})

