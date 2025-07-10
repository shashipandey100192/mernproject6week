import { configureStore } from '@reduxjs/toolkit'
import myactionlist from './Myactionlist';



export const Mystore = configureStore({
  reducer: {
    counter:myactionlist
  },
})