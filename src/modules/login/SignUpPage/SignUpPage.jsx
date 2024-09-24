import { useEffect, useState } from "react"
import { signUp,resetCreated } from "../../../store/features/customerSlice"
import { useDispatch, useSelector } from "react-redux"
import Banner from "../../../Components/Banner/Banner"
import { Link } from "react-router-dom"

export default function(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone , setPhone] = useState("")
    const [name, setName] = useState("")
    const [rePass, setRePass] = useState("")
    const [terms, setTerms] = useState(false)
    const dispatch = useDispatch()

    const bool = useSelector((s)=>s.customerDetails.created)
    useEffect(()=>{
        if(bool){
            setEmail("")
            setName("")
            setPhone("")
            setPassword("")
            setRePass("")
            setTerms(false)
            dispatch(resetCreated())
        }
    },[bool])
    
    function handleSignUp(){
        dispatch(signUp({name:name,phone:phone,email:email,pass:password,repass:rePass,accept:terms}))
    }
    
    return(
        <>
        <Banner bgImage="bg-[url('/images/wedding-3369645_1920.jpg')]">
                <h1 className="font-serif md:text-6xl">Sign Up</h1>
        </Banner>

        <div className="md:container px-2 md:px-0 md:w-4/5 md:mx-auto mt-4 md:mt-24 md:flex border-2">
            <div className="md:w-1/2">
                <img src={props.image} alt="Side Image" className="w-full h-full object-cover"/>
            </div>
            <div className="md:w-1/2 p-4 md:p-8">
                <h1 className="font-serif mb-1 md:mb-2 text-xl md:text-4xl">Sign Up</h1>

                <p className="text-[10px] mb-2 md:mb-5 md:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, veritatis repellat adipisicing elit. Ratione, veritatis repellat</p>

                <div className="flex p-1 md:p-3 px-4 md:px-6 border-2 border-gray-400 text-xs md:text-base mb-2 md:mb-4 gap-2">
                    <p>Name</p>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>

                <div className="flex p-1 md:p-3 px-4 md:px-6 border-2 border-gray-400 text-xs md:text-base mb-2 md:mb-4 gap-2">
                    <p>Email Id</p>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className="flex p-1 md:p-3 px-4 md:px-6 border-2 border-gray-400 text-xs md:text-base mb-2 md:mb-4 gap-2">
                    <p>Phone no.</p>
                    <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                </div>

                <div className="flex p-1 md:p-3 px-4 md:px-6 border-2 border-gray-400 text-xs md:text-base mb-4 md:mb-4 gap-2">
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>

                <div className="flex p-1 md:p-3 px-4 md:px-6 border-2 border-gray-400 text-xs md:text-base mb-4 md:mb-4 gap-2">
                    <p>Re - Password</p>
                    <input type="password" value={rePass} onChange={(e)=> setRePass(e.target.value)}/>
                </div>

                <div className="text-xs md:text-sm mb-5 md:mb-12">
                    <label className="flex item-center gap-2  text-gray-500">
                        <input type="radio" onChange={e => setTerms(true)}/>
                        <p>I Accept terms & conditions & privacy policy</p>
                    </label>
                </div>

                <div className="flex justify-between items-center  mb-5 md:mb-12">
                    <button className=" bg-teal-400 text-white text-xs font-semibold md:text-lg p-1 md:p-3 text-center w-[33%]" onClick={handleSignUp}>SIGNUP</button>
                    <p className="text-xs md:text-sm font-semibold">Have account? 
                        <Link className="text-teal-400" onClick={props.change}>SIGNIN</Link></p>
                </div>

                <p className="text-xs md:text-sm mb-2 md:mb-3">Login with social media</p>
                
                <div className="mb-2 md:mb-3 border-2 flex justify-between items-center w-[40%] md:w-[32%] p-2 px-3 md:p-3">
                    <i className="fa-brands fa-facebook-f text-blue-700"></i>
                    <i className="fa-brands fa-twitter text-sky-500"></i>
                    <i className="fa-brands fa-linkedin-in text-blue-500"></i>
                    <i className="fa-brands fa-google-plus-g text-red-500"></i>
                </div>

            </div>
        </div>
        </>
    )
}