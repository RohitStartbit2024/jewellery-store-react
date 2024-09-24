import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import '../../modules/gallery/GalleryPage.css'
import Banner from "../../Components/Banner/Banner";
export default function(){
    return(
        <>
            <Header  page="gallery"/>

            <Banner bgImage="bg-[url('/images/wedding-2540843_1920.jpg')]">
                <h1 className="font-serif md:text-6xl">Gallery</h1>
            </Banner>

            <div className="md:h-[1800px] px-2 md:container md:mx-auto mt-2 md:mt-24 md:flex md:justify-between">
                {/* first */}
                <div className="md:w-[32%]">
                    <div className="image-GP1 img-shad bg-cover w-full h-48 mb-1 md:mb-7 bg-center md:h-[32%] bg-no-repeat"></div>

                    <div className="flex justify-between w-full h-48 md:block  md:h-[32%] md:mb-7">
                        <div className="image-GP2 img-shad bg-cover w-[49%] md:w-full mb-1 md:mb-7 md:h-[47.5%] bg-center bg-no-repeat"></div>
                        <div className="image-GP3 img-shad bg-cover w-[49%] md:w-full mb-1 md:h-[47.5%] bg-center bg-no-repeat"></div>
                    </div>
                    
                    <div className="image-GP4 img-shad bg-cover w-full h-48 mb-1 md:mb-7 bg-center md:h-[32%] bg-no-repeat"></div>
                </div>
                {/* second */}
                <div className="md:w-[32%]">
                <div className="flex justify-between w-full h-48 md:block  md:h-[32%] md:mb-7">
                        <div className="image-GP5 img-shad bg-cover w-[49%] md:w-full mb-1 md:mb-7 md:h-[47.5%] bg-center bg-no-repeat"></div>
                        <div className="image-GP6 img-shad bg-cover w-[49%] md:w-full mb-1 md:mb-7 md:h-[47.5%] bg-center bg-no-repeat"></div>
                    </div>

                    <div className="image-GP7 img-shad bg-cover w-full h-48 mb-1 md:mb-7 bg-center md:h-[32%] bg-no-repeat"></div>

                    <div className="flex justify-between w-full h-48 md:block  md:h-[32%] md:mb-7">
                        <div className="image-GP8 img-shad bg-cover w-[49%] md:w-full mb-1 md:mb-7 md:h-[47.5%] bg-center bg-no-repeat"></div>
                        <div className="image-GP9 img-shad bg-cover w-[49%] md:w-full mb-1 md:mb-7 md:h-[47.5%] bg-center bg-no-repeat"></div>
                    </div>
                </div>
                {/* third */}
                <div className="md:w-[32%]">
                    <div className="image-GP10 img-shad bg-cover w-full h-48 mb-1 md:mb-7 bg-center md:h-[32%] bg-no-repeat"></div>

                    <div className="flex justify-between w-full h-48 md:block  md:h-[32%] md:mb-7">
                        <div className="image-GP11 img-shad bg-cover w-[49%] md:w-full mb-1 md:mb-7 md:h-[47.5%] bg-center bg-no-repeat"></div>
                        <div className="image-GP12 img-shad bg-cover w-[49%] md:w-full mb-1 md:mb-7 md:h-[47.5%] bg-center bg-no-repeat"></div>
                    </div>

                    <div className="image-GP13 img-shad bg-cover w-full h-48 mb-1 md:mb-7 bg-center md:h-[32%] bg-no-repeat"></div>
                </div>
            </div>
            <NewsLetter/>
            <Footer/>
        </>
    )
}