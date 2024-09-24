import { useState } from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { navItems } from '../../../static-data/navItems';
export default function(props){
    const[showNav, setShowNav] = useState(false)
    function handleMenu(){
        setShowNav(!showNav)        
    }
    const login = useSelector((s)=> s.customerDetails.LoggedIn)
    const cartItems = useSelector((s)=>s.cartItems.cart)
    const number = cartItems.length
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    function handleSearch(){
        if(search){
            navigate(`/search/${search}`)
        }
    }
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
            <div className='block md:hidden mobile'>
            <div className="flex border-b-2 px-2 justify-between">
                <div onClick={handleMenu}><i className="fa-solid fa-bars"></i></div>

                <div className='flex items-center text-[10px] gap-2'>
                    <div className='flex px-2  border-2 rounded-full items-center'>
                        <input className='border-hidden bg-transparent' type="text" value={search} placeholder='Search Products...' onChange={(e)=>setSearch(e.target.value)}/>
                        <i className="fa-solid fa-magnifying-glass mr-1" onClick={handleSearch}></i>
                    </div>
                    <i className="fa-regular fa-heart fa-lg"></i>
                    <div>
                    <div className={`absolute h-[10px] w-[10px] text-center text-white ml-2 bg-red-500 rounded-full text-[6px]  ${!login ? 'hidden' : "" } ${number<1 ? "hidden" : ""}`}>{number}</div>
                    <i className="fa-solid fa-bag-shopping fa-lg" onClick={handleCart}></i>
                    </div>
                </div>
                </div>
                <ul className={`${showNav? "block" : "hidden"} text-center text-[10px]`}>
                    {navItems?.map(item => 
                            <Link   key={item.value}
                                    to={item.link}>
                                <li className={`border-b p-1 ${props.page == item.value? "bg-teal-400 text-white" :""}`} onClick={handleMenu}>{item.name}</li>
                            </Link>
                        )}
                </ul>
            </div>

            {/* Desktop */}
            <div className='border-b-2 container-fluid'>
            <div className="hidden container md:flex md:justify-start mx-auto desktop">
                <ul className="flex decoration-none justify-start md:text-base">
                    {navItems?.map(item => 
                        <Link   key={item.value}
                                to={item.link}>
                            <li className={`${props.page == item.value? "bg-teal-400 text-white" :"hover:bg-gray-200"}`}>{item.name}</li>
                        </Link>
                    )}
                </ul>
            </div>
            </div>
        </>
    )
}