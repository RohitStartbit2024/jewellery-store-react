import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import AllBlogs from "../../modules/blog/AllBlogs/AllBlogs";
import SideBar from "../../modules/blog/BlogSide/SideBar";
import Banner from "../../Components/Banner/Banner";

export default function(){
    return(
        <>
            <Header page={"blog"}/>

            <div className="min-h-screen container-fluid">
            <Banner bgImage={"bg-[url('/images/colorful-665704_1920.jpg')]"}>
                    <h1 className="font-serif md:text-6xl">Blog</h1>
            </Banner>
            
                <div className="px-2 md:px-0 md:w-4/5 md:mx-auto md:container mt-6 md:mt-24 ">
                        <h1 className="font-serif mb-3 md:mb-6 md:text-4xl">Latest Post</h1>
                            
                        <div className="md:flex">
                            <AllBlogs/>
                            <SideBar/>
                        </div>
                </div>

            </div>
            <NewsLetter/>
            <Footer/>
        </>
    )
}