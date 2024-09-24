import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [{sku:"AX-0000153",quantity: 1},
        {sku:"AX-0000156",quantity: 1},
        {sku:"AX-0000160",quantity: 1}
    ]
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state, action) => {
            const product ={
                sku:action.payload.sku,
                quantity:action.payload.quantity
            }
            if(product.quantity >= 1){
                var itemExists =false
                state.cart.map(item =>{
                    if(item.sku == product.sku){
                        item.quantity = item.quantity+ product.quantity
                        itemExists = true
                    }})
            
                if(itemExists == false){
                    state.cart.push(product)}
            }
            
        },
        deleteItem: (state, action) => {
            const number = action.payload
            const newList = state.cart.filter(item=> item.sku != number)
            state.cart = newList
        },
        addQuantity: (state, action) => {
            const number = action.payload
            state.cart.map(item=> {if(item.sku == number){
                item.quantity = item.quantity+1
            }})
        },
        subQuantity: (state, action) => {
            const number = action.payload
            state.cart.map(item=> {if(item.sku == number && item.quantity>1){
                item.quantity = item.quantity-1
            }})
        },
        emptyCart: (state,action) => {
                state.cart = []
                console.log(state.cart);   
        }
    }
})

export const {addItem , deleteItem, subQuantity, addQuantity, emptyCart} = cartSlice.actions

export default cartSlice.reducer