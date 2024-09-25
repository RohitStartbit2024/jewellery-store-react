import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from "../../store/features/cartSlice"
import { useNavigate } from "react-router-dom"
import { FacebookShareButton, InstapaperShareButton, PinterestShareButton, TwitterShareButton } from "react-share"

export default function(props){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = useSelector((s)=>s.customerDetails.LoggedIn)
    const customer = useSelector((s)=>s.customerDetails.currentCus)
    const image1 = props.image1
    const image2 = props.image2
    const image3 = props.image3
    const image4 = props.image4
    const rating = props.rating
    const[quantity , setQuantity] = useState(1)
    const[displayImage , setDisplayImage] = useState(image1)
    function handleImage1(){
        setDisplayImage(image1)
    }
    function handleImage2(){
        setDisplayImage(image2)
    }
    function handleImage3(){
        setDisplayImage(image3)
    }
    function handleImage4(){
        setDisplayImage(image4)
    }
    function handleMinus(){
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    function handlePlus(){
        if(quantity<props.unit){
            setQuantity(quantity+1)
        }
    }
    function handleAddToCart(){
        if(login){
            dispatch(addItem({sku:props.sku, quantity: quantity}));
        alert("added to cart!")
        setQuantity(1)
        }
        else{
            alert("You need to login first!")
            navigate('/login')
        }
    }

    const url = window.location.href
    
    return(
        <>
            <div className="md:flex">
                <div className="w-full md:w-1/2 md:px-20">
                    <div className="w-full">
                        <img src={displayImage} alt="display image" className="w-full"/>
                    </div>
                    <div className="w-full flex justify-between mt-2 md:mt-5">
                        <div className="w-[23%] aspect-square">
                            <img src={image1} alt="image1" onClick={handleImage1} className="h-full"/>
                        </div>
                        <div className="w-[23%] aspect-square">
                            <img src={image2} alt="image2" onClick={handleImage2} className="h-full"/>
                        </div>
                        <div className="w-[23%] aspect-square">
                            <img src={image3} alt="image3" onClick={handleImage3} className="h-full"/>
                        </div>
                        <div className="w-[23%] aspect-square">
                            <img src={image4} alt="image4" onClick={handleImage4} className="h-full"/>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-2 md:mt-0 md:px-2">
                    <h1 className="font-serif mb-1 md:mb-2 md:text-3xl text-2xl">{props.name}</h1>
                    <div className="md:font-semibold mb-2 md:mb-4 text-sm">
                        {Array.from({ length: rating }, (_, i) => (
                            <i key={i} className="fa-solid fa-star text-teal-400"></i>
                        ))}
                        {Array.from({ length: 5-rating }, (_, i) => (
                            <i key={i} className="fa-solid fa-star text-gray-400"></i>
                        ))}&nbsp; &nbsp; &nbsp; &nbsp;
                        {props.reviews} Review(s)
                    </div>
                    <div className="flex gap-2 items-end my-3 md:my-6">
                        <p className="text-sm md:text-2xl font-semibold">${props.discountPrice}</p>
                        <p className="text-xs md:text-lg line-through text-gray-600 font-semibold">${props.price}</p>
                    </div>
                    <p className="font-semibold mb-2 text-sm md:mb-6">Available: {props.unit == 0 ? <span className="text-red-500">OUT OF STOCK</span> : <span className="text-teal-400">IN STOCK</span>}</p>
                    <div className="flex justify-between w-[80%] md:w-[60%] text-xs md:text-base mb-2 md:mb-4">
                        <p><span className="md:font-semibold">SKU: </span>{props.sku}</p>
                        <p>
                            <i className="fa-solid fa-heart text-red-500"></i>
                            ADD TO WISHLIST
                        </p>
                    </div>
                    <p className="mb-3 md:mb-6 text-xs md:text-base ">{props.brief}</p>
                    <div className="flex justify-between w-[70%] md:w-[60%] mb-2 md:mb-4">
                        <div className="flex justify-between text-sm md:text-base w-[40%] md:w-[40%] border-2 border-gray-400">
                            <p className="hover:bg-gray-200 p-1 md:p-3" onClick={handleMinus}><i className="fa-solid fa-minus"></i></p>
                            <p className="md:px-5 p-1 md:p-2 md:text-lg">{quantity}</p>
                            <p className="hover:bg-gray-200 p-1 md:p-3" onClick={handlePlus}><i className="fa-solid fa-plus"></i></p>
                        </div>
                        <button type="button" className="text-sm md:text-base p-1 md:w-[40%] md:p-3 bg-teal-400 text-white" onClick={handleAddToCart}>ADD TO CART</button>
                    </div>
                    <div className="flex items-center justify-between text-xs md:text-base w-[55%] md:w-[35%] text-gray-400 md:p-3">
                            <p>SHARE:</p>
                            <FacebookShareButton url={url}>
                            <i className="fa-brands fa-facebook-f hover:text-black"></i>
                            </FacebookShareButton>
                            <TwitterShareButton url={url}>
                            <i className="fa-brands fa-twitter hover:text-black"></i>
                            </TwitterShareButton>
                            
                            <i className="fa-brands fa-google-plus-g hover:text-black"></i>
                            <PinterestShareButton url={url}>
                            <i className="fa-brands fa-pinterest-p hover:text-black"></i>
                            </PinterestShareButton>
                            <InstapaperShareButton url={url}>
                            <i className="fa-brands fa-instagram hover:text-black"></i>
                            </InstapaperShareButton>
                    </div>
                </div>

            </div>
        </>
    )
}