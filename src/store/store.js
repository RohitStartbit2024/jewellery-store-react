import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice'
import customerReducer from './features/customerSlice'

export const store = configureStore({
    reducer:{
        cartItems : cartReducer,
        customerDetails : customerReducer
    }
})
