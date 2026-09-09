

import Cart from '../pages/Cart'
import { CartSlice } from './cartSlices'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart: CartSlice
  },
})



