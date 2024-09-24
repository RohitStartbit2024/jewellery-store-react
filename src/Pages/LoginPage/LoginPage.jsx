import Header from "../../Components/Header/Header";
import SignInPage from "../../modules/login/SignInPage/SignInPage";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";
import SideImage from '/images/woman-518275_1920.jpg'
import SignUpPage from "../../modules/login/SignUpPage/SignUpPage";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function(){
    const[signUp,setSignUp]=useState(false)
    function handleChange() {
        setSignUp(!signUp)
    }
    return(
        <>
           <Header page="login"/>

            <div className="min-h-screen">
                
                {signUp? <SignUpPage  image={SideImage}
                            change={handleChange}/>:
                            <SignInPage  image={SideImage}
                                change={handleChange}/>}   
                            
            </div>

            <NewsLetter/>
            <Footer/>
        
        </>
    )
}