import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import ProductTable from "../../modules/category/ProductTable";
import Banner from '../../Components/Banner/Banner'
export default function(){
    return(
        <>
            <Header  page="allJewellery"/>

            <Banner bgImage={"bg-[url('/images/wedding-2544405_1920.jpg')]"}>
                    <h1 className="font-serif md:text-6xl">All Jewellery</h1>
            </Banner>

            <div className="min-h-screen px-2 md:w-4/5 md:container md:mx-auto py-5 md:py-20">
                <ProductTable/>
            </div>

            <NewsLetter/>
            <Footer/>
        </>
    )
}