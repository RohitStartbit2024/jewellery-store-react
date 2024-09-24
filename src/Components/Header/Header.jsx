import { Link, useNavigate } from "react-router-dom"
import { signOut } from "../../store/features/customerSlice.js"
import LogoBar from "./LogoBar/LogoBar.jsx"
import NavBar from "./NavBar/NavBar.jsx"
import { useDispatch, useSelector } from "react-redux"
export default function(props){
    const login = useSelector((s)=>s.customerDetails.LoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleAction(){
        if(login){
            dispatch(signOut())
            alert("Signed Out")
            navigate('/');
        }
        else{
            alert("LogIn Page")
            navigate('/login')
        }
    }
    return(
        <>
        <div className="bg-teal-400 md:container-fluid">
            <div className=" text-[10px] md:text-sm px-2 md:container md:mx-auto text-white flex justify-between items-center">
                <select id="currency" className=" bg-teal-400">
                    <option value="USD">USD, $</option>
                    <option value="INR">INR, ₹</option>
                    <option value="UAED">UAED</option>
                    <option value="Euro">Euro, €</option>
                </select>

                <div>
                    <button className=" hover:bg-teal-500 py-2 px-1 mr-2 md:mr-4" onClick={handleAction}><i className="fa-solid fa-arrow-right-to-bracket fa-sm"></i>
                    {login ?
                        " SIGN OUT"
                     : " SIGN IN"}</button>
                    <button className="py-2 px-1 hover:bg-teal-500"><i className="fa-regular fa-user fa-sm"></i> MY ACCOUNT</button>
                </div>
            </div>
            </div>

            <LogoBar/>
            <NavBar page={props.page}/>
        </>
    )
}