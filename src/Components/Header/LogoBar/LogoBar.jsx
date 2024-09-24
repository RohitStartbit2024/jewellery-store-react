import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {shopDetails} from '../../../static-data/shopDetails'
import { useState } from 'react'
export default function(){
    const login = useSelector((s)=> s.customerDetails.LoggedIn)
    const cartItems = useSelector((s)=>s.cartItems.cart)
    const [search, setSearch] = useState("")
    const number = cartItems.length
    function handleSearch(){
        if(search){
            navigate(`/search/${search}`)
        }
    }
    const navigate = useNavigate()
    function handleCart(){
        if(login){
            navigate('/cart')
        }
        else{
            alert("Login First!")
            navigate('/login')
        }
    }
    return(
        <>
            {/* Mobile */}
            <div className="flex md:hidden px-2 justify-between items-center border-b-2">
                <div className="flex gap-2">
                    <div className="h-full">
                        <p className="text-[10px] text-gray-600">OUR SHOP:</p>
                        <div className="flex">
                            <i className=" fa-solid mr-1 fa-location-dot text-teal-400"></i>
                            <div className="">
                                <p className="font-semibold text-[8px]">{shopDetails.addLine1},</p>
                                <p className="text-[6px] text-gray-600">{shopDetails.addLine2}</p>
                            </div>
                        </div>    
                    </div>
                    <div className="h-full">
                        <p className="text-[10px] text-gray-600">SUPPORT HOTLINE:</p>
                        <div className="flex">
                            <i className=" fa-solid mr-1 fa-mobile text-teal-400"></i>
                            <div className="">
                                <p className="font-semibold text-[8px] mt-0.5">{shopDetails.number}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <img className='max-w-12' src={shopDetails.logo} alt="Logo" />
                </Link>
            </div>
            {/* Desktop */}
            <div className='hidden md:block container-fluid border-b-2'>
            <div className="p-6 flex justify-between container mx-auto">
                <div className='flex gap-5'>
                <div className="h-full">
                        <p className="mb-2 text-gray-600">OUR SHOP:</p>
                        <div className="flex">
                            <i className=" fa-solid mt-4 mr-1 fa-location-dot fa-xl text-teal-400"></i>
                            <div className="">
                                <p className="font-semibold">{shopDetails.addLine1},</p>
                                <p className="text-sm text-gray-600">{shopDetails.addLine2}</p>
                            </div>
                        </div>    
                    </div>
                    <div className="h-full">
                        <p className="mb-2 text-gray-600">SUPPORT HOTLINE:</p>
                        <div className="flex">
                            <i className=" fa-solid mt-4 mr-2 fa-mobile fa-xl text-teal-400"></i>
                            <div className="">
                                <p className="font-semibold mt-0.5">{shopDetails.number}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <img src={shopDetails.logo} alt="logo" />
                </Link>
                <div className='flex items-center gap-5'>
                    <div className='flex p-2 px-4 border-2 rounded-full items-center'>
                        <input className='border-hidden bg-transparent text-sm' type="text" placeholder='Search Products...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                        <i className="fa-solid fa-magnifying-glass fa-lg" onClick={handleSearch}></i>
                    </div>
                    <Link>
                        <i className="fa-regular fa-heart fa-lg"></i>
                    </Link> 
                    <a href="#">
                        <div className={`absolute text-center text-white ml-3 text-xs w-[16px] h-[16px] bg-red-500 rounded-full 
                            ${!login ? 'hidden' : "" } ${number<1 ? "hidden" : ""}`}>{number}</div>
                        <i className="fa-solid fa-bag-shopping fa-lg" onClick={handleCart}></i>
                    </a>
                </div>
            </div>
            </div>
        </>
    )
}