import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Banner from "../../Components/Banner/Banner";
import { contactInfo } from "../../static-data/contactInfo";
import { useState } from "react";

export default function(){
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    function handleSubmit(){
        if(name && email && subject && message){
            if(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
                alert("Thanks, We will contact you soon!")
                setEmail("")
                setName("")
                setMessage("")
                setSubject("")
              }
            else{
                alert("Invalid Email")
            }
        }
        else{
            alert("Please fill all fields!")
        }
    }
    return(
        <>
            <Header page="contactUs"/>

            <div className="min-h-screen">

            <Banner bgImage={"bg-[url('/images/rings-2007678_1920.jpg')]"}>
                <h1 className="font-serif md:text-6xl">Contact Us</h1>
            </Banner>

            <div className="px-2 md:container md:mx-auto my-2 md:my-24">
                <div className="mb-2 md:mb-24 w-full md:flex justify-between">

                    <div className="flex justify-center md:justify-start my-2 bg-teal-400 hover:bg-white text-white hover:text-black group md:h-20 md:mt-0 mt-0 md:py-3 md:px-5 md:w-[30%] hover:shadow-md hover:shadow-black p-1">
                        <div className="bg-white group-hover:bg-teal-400 text-teal-400 group-hover:text-white rounded-full flex justify-center items-center w-8 md:w-14 md:text-3xl">
                            <i className="fa-regular fa-comments "></i>
                        </div>
                        <div className="md:ml-6 ml-1">
                            <p className="md:text-xl text-sm font-bold">{contactInfo[0].value}</p>
                            <p className="md:text-lg text-xs font-semibold">{contactInfo[0].brief}</p>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start bg-teal-400 hover:bg-white text-white hover:text-black group md:h-20 md:py-3 md:px-5 md:w-[30%] hover:shadow-md hover:shadow-black p-1">
                        <div className="bg-white group-hover:bg-teal-400 text-teal-400 group-hover:text-white rounded-full flex justify-center items-center w-8 md:w-14 md:text-3xl">
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <div className="md:ml-6 ml-1">
                            <p className="md:text-xl text-sm font-bold">{contactInfo[1].value}</p>
                            <p className="md:text-lg text-xs font-semibold">{contactInfo[1].brief}</p>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start my-2 md:my-0 bg-teal-400 hover:bg-white text-white hover:text-black group md:h-20 md:py-3 md:px-5 md:w-[30%] hover:shadow-md hover:shadow-black p-1">
                        <div className="bg-white group-hover:bg-teal-400 text-teal-400 group-hover:text-white rounded-full flex justify-center items-center w-8 md:w-14 md:text-3xl">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="md:ml-6 ml-1">
                            <p className="md:text-xl text-sm font-bold">{contactInfo[2].value}</p>
                            <p className="md:text-lg text-xs font-semibold">{contactInfo[2].brief}</p>
                        </div>
                    </div>
                </div>

                <div className="md:flex">
                     <div className="md:w-1/2 md:px-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1634368476166!2d75.72968298195757!3d26.89830770053674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4a07e325381%3A0x8605a270cb78b41f!2sStartbit%20IT%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1724500068729!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                    </div>

                    <div className="md:w-1/2 px-1 md:px-12">
                        <p className="text-center md:text-xl">We are here to help</p>
                        <p className="text-center md:text-xl font-semibold">Reach Us Anyway</p>

                        <form>
                        <input type="text" className="border-2 border-black p-2 md:px-5 w-full md:mt-2 mt-1 text-xs md:text-base" value={name} placeholder="Your Name" onChange={(e)=> setName(e.target.value)}/>

                        <input type="text" className="border-2 border-black p-2 md:px-5 w-full md:mt-2 mt-1 text-xs md:text-base" value={email} placeholder="Your Email" onChange={(e)=> setEmail(e.target.value)}/>

                        <input type="text" className="border-2 border-black p-2 md:px-5 w-full md:mt-2 mt-1 text-xs md:text-base" value={subject} placeholder="Subject" onChange={(e)=> setSubject(e.target.value)}/>

                        <textarea name="" id="" className="md:px-5 h-8 md:h-full md:mt-2 p-2 focus:outline-none w-full border-2 mt-1 text-xs md:text-base border-black" value={message} placeholder="Message" onChange={(e)=> setMessage(e.target.value)}></textarea>
                        
                        <button type="button" className="md:mt-2 bg-teal-400 text-white md:p-2 py-1 text-center w-[30%] text-xs md:text-base" onClick={handleSubmit}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <NewsLetter/>
            <Footer/>
        </>
    )
}