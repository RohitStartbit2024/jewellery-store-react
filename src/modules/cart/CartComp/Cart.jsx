import CartItem from "./CartItem";
import { useEffect, useState } from "react";
export default function(props){
    const[subTotal, setSubTotal] = useState(0)
    const[flatRate, setFlatRate] = useState(0)
    const[total, setTotal] = useState(0)
    
    //
    const cartListDetails = props.cartListDetails
    useEffect(()=>{
        var temp=0
        cartListDetails.map(item=>{temp = temp + (item.price * item.quantity)})
        setSubTotal(temp)
    },[cartListDetails])

    useEffect(()=>{
        setFlatRate(subTotal/10)
        setTotal(subTotal + (subTotal/10))
    },[subTotal])

    return(
        <div className="md:flex md:justify-between">

            <div className="md:w-[68%] text-xs md:text-base">
                <div className="flex border-2 border-b-0 font-semibold p-2 md:p-3">
                    <p className="w-[41%]">Product</p>
                    <p className="w-[15%]">Price</p>
                    <p className="w-[22%]">Quantity</p>
                    <p className="w-[27%]">Subtotal</p>
                </div>
                <div className="w-full border-2 border-gray-300">
                    {cartListDetails.length<=0 ? <div className="text-center md:p-5 md:text-2xl"> No Items in the Cart </div> : 
                                                cartListDetails.map(item => 
                                                                <CartItem  key={item.sku}
                                                                            sku={item.sku}
                                                                            image={item.image}
                                                                            name={item.name}
                                                                            price={item.price}
                                                                            quantity={item.quantity} />
                                                                        )
                    }
                </div>
                <div className="md:flex my-3 md:my-8">
                    <div className="md:w-1/2 flex justify-between">
                        <input type="text" placeholder="Coupon Code" className="md:w-[60%] border-2 p-1 md:p-3"/>
                        <button type="button" className="md:w-[35%] border-2 p-1 md:p-3 bg-teal-400 text-white">APPLY COUPON</button>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0 md:flex md:justify-end">
                        <button type="button" className="border-2 md:border-0 md:hover:border-2 bg-teal-400 md:bg-transparent text-white md:text-black p-1 md:p-3 ">Continue Shopping</button>
                    </div>
                </div>
            </div>
            
            <div className="md:w-[30%]">
                <div className="border-2 border-b-0 font-bold text-sm md:text-base p-2 md:p-3">
                    Cart Totals
                </div>
                <div className="border-2 border-b-0 text-xs md:text-sm md:py-4">
                    <div className="flex p-2 md:p-3 justify-between">
                        <p>Subtotal</p>
                        <p>${subTotal}</p>
                    </div>
                    <div className="flex p-2 md:p-3 justify-between">
                        <p>Shipping</p>
                        <div className="text-right">
                            <p>Flat rate: ${flatRate}</p>
                            <p>Shipping to <span className="font-semibold">India.</span></p>
                            <p className="text-teal-400 underline">change address</p>
                        </div>
                    </div>
                </div>
                <div className="border-2 text-xs font-semibold md:text-sm p-2 md:p-3 flex justify-between">
                    <p>Total</p>
                    <p className="font-bold">${total}</p>
                </div>
                <button type="button" className="md:p-3 text-white bg-teal-400 mt-4 p-2 text-sm md:text-base md:mt-8 md:w-full" onClick={props.next}>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    )
}