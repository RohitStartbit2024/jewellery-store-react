import { useEffect, useState } from "react"
import { signIn } from "../../../store/features/customerSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Banner from "../../../Components/Banner/Banner"

export default function(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()
    const login = useSelector((s)=> s.customerDetails.LoggedIn)
    const navigate = useNavigate()
    const[cred, setCred] =  useState(JSON.parse(localStorage.getItem("user"))||{})

    useEffect(()=>{
        if(login){
            navigate('/')
        }
    },[login])

    function handleLogIn(){
        dispatch(signIn({email:email,pass:password,check:checked}))
    }
    function handlePassFill(){
        if(email==cred?.email){
            setPassword(cred?.pass)
        }
    }
    return(
        <>
        <Banner bgImage="bg-[url('/images/wedding-3369645_1920.jpg')]">
                <h1 className="font-serif md:text-6xl">Sign In</h1>
        </Banner>

        <div className="md:container px-2 md:px-0 md:w-4/5 md:mx-auto mt-4 md:mt-24 md:flex border-2">
            <div className="md:w-1/2">
                <img src={props.image} alt="Side Image" className="w-full h-full object-cover"/>
            </div>
            <div className="md:w-1/2 p-4 md:p-8">
                <h1 className="font-serif mb-1 md:mb-2 text-xl md:text-4xl">Sign In</h1>

                <p className="text-[10px] mb-2 md:mb-5 md:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, veritatis repellat adipisicing elit. Ratione, veritatis repellat</p>

                <div className="flex p-1 md:p-3 px-4 md:px-6 border-2 border-gray-400 text-xs md:text-base mb-2 md:mb-4 gap-2">
                    <p>Email</p>
                    <input type="text"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className="flex p-1 md:p-3 px-4 md:px-6 border-2 border-gray-400 text-xs md:text-base mb-4 md:mb-4 gap-2">
                    <p>Password</p>
                    <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} onFocus={handlePassFill}/>
                </div>

                <div className="text-xs md:text-sm flex justify-between mb-5 md:mb-12">
                    <label className="flex item-center gap-2  text-gray-500">
                        <input type="checkbox" value={checked} onChange={()=>setChecked(!checked)}/>
                        <p>keep me logged in</p>
                    </label>
                    <p className="font-semibold">Forgot Your Password?</p>
                </div>
                
                <div className="flex justify-between items-center">
                    <button className=" bg-teal-400 text-white text-xs font-semibold md:text-lg p-1 md:p-3 text-center w-[33%]"onClick={handleLogIn}>LOGIN</button>
                    <p className="text-xs md:text-sm font-semibold">Don't have account? <Link className="text-teal-400" onClick={props.change}>SIGNUP</Link></p>
                </div>

            </div>
        </div>
        </>
    )
}