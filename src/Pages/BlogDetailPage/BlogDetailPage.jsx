import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import SideBar from "../../modules/blog/BlogSide/SideBar";
import BlogDetails from "../../modules/blog/blogDetails/BlogDetails";
import Banner from "../../Components/Banner/Banner";
import { Link, useParams } from "react-router-dom";

export default function(){
    const params = useParams()
    const id = params.id
    
    return(
        <>
            <Header page={"blog"}/>

            <div className="min-h-screen container-fluid">
            <Banner bgImage={"bg-[url('/images/colorful-665704_1920.jpg')]"}>
                    <h1 className="font-serif md:text-6xl">Blog</h1>
            </Banner>
            
                <div className="px-2 md:px-0 md:w-4/5 md:mx-auto md:container mt-6 md:mt-24 ">
                    <Link to={'/blogs'} className="font-serif md:text-xl hover:text-teal-400"><i className="fa-solid fa-angle-left"></i> Back</Link>

                    <div className="md:flex mt-3 md:mt-">
                        <BlogDetails id={id}/>
                        <SideBar />
                    </div>
                </div>

            </div>
            <NewsLetter/>
            <Footer/>
        </>
    )
}