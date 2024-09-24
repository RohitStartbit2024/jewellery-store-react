import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Cart from "../../modules/cart/CartComp/Cart";
import CheckComp from "../../modules/cart/CheckComp/CheckComp";
import { useDispatch, useSelector } from "react-redux"
import { ProductList } from "../../static-data/ProductList";
import DoneComp from "../../modules/cart/DoneComp/DoneComp";
import { emptyCart } from "../../store/features/cartSlice";



export default function(){
    const dispatch = useDispatch()
    const cartList = useSelector((state)=>state.cartItems.cart)
    // console.log(isLoggedIn);
    
    const[cartListDetails, setCartListDetails] = useState([])
    //resulting product list
    useEffect(()=>{setCartListDetails(cartList.map(cartItem => {
        const product = ProductList.find(p => p.sku === cartItem.sku);
        if (product) {
            return {
                ...product,
                quantity: cartItem.quantity
            };
        }
        return null;
    }).filter(item => item !== null))},[cartList]) 
    // 
    const[step, setStep] = useState(1)
    function stepTwo(){
        setStep(2)
    }
    function stepThree(){
        setStep(3)
        dispatch(emptyCart())
    }
    // console.log(cartList);
    return(
        <>
            <Header/>
            <div className="px-2 md:container md:mx-auto min-h-screen my-4 md:my-24">
                <div className="mb-4 md:mb-16 flex justify-center text-xs md:text-sm">

                    <div className={`w-[33%] md:w-[10%] py-2 border-2 border-r-0 md:font-semibold box-border md:p-3 text-center ${step == 1 ?"bg-teal-400 text-white" : "bg-white text-black"}`} onClick={()=>{setStep(1)}}>Shopping Cart</div>

                    <div className={`w-[33%] md:w-[10%] py-2 border-2 border-r-0 md:font-semibold  box-border md:p-3 text-center ${step == 2 ?"bg-teal-400 text-white" : "bg-white text-black"}`} onClick={()=>{if(step>2){setStep(2)}}}>Check Out</div>

                    <div className={`w-[33%] md:w-[10%] py-2 border-2 box-border md:font-semibold  md:p-3 text-center ${step == 3 ?"bg-teal-400 text-white" : "bg-white text-black"}`}>Done</div>

                </div>

                <div className={`${step == 1 ? "" : "hidden"}`}>
                    <Cart next={stepTwo}
                            cartListDetails={cartListDetails}/>
                </div>

                <div className={`${step == 2 ? "" : "hidden"}`}>
                    <CheckComp next={stepThree}
                                cartListDetails={cartListDetails}/>
                </div>

                <div className={`${step == 3 ? "" : "hidden"}`}>
                    <DoneComp />
                </div>

            </div>
            <NewsLetter/>
            <Footer/>
        </>
    )
}