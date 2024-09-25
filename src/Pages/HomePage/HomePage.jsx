import Header from "../../Components/Header/Header";
import ShopNow from "../../Components/ShopNow/ShopNow";
import { homeImage } from "../../static-data/homeImage";
import Title from "../../Components/Title/Title";
import ProductCard from "../../Components/ProductCard/ProductCard";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";
import { ProductList } from "../../static-data/ProductList"; 
import Banner from "../../Components/Banner/Banner";
export default function(){
    return(
        <>
            <Header page="home"/>

            <div className="min-h-screen">

            <Banner bgImage="bg-[url('/images/banner.jpg')]">
                <div className="md:mx-auto text-start md:container"> 
                <h1 className="text-xl md:text-7xl font-serif">SUMMER SALE</h1>
                <p className="text-xs md:text-3xl md:mt-5">JULY 15<sup>TH</sup>-AUGUST 30<sup>TH</sup></p>
                <ShopNow className="bg-black text-white mt-1 py-1 px-2 text-xs "/>
                </div>
            </Banner>

            <div className="px-2 md:container md:mx-auto">
            <div className=" mt-2 md:mt-24 md:flex">
                <div className="md:w-2/3">
                    <img src={homeImage[0]} alt="Image-1" className="w-full"/>
                    <div className="display3 bg-[url('/images/img-3.jpg')] text-white mt-1 px-6 py-2 md:mt-5 md:pl-10 md:pr-24 md:pt-16 md:pb-20 bg-cover bg-center flex justify-between [box-shadow:inset_0_0_0_2000px_rgba(0,0,0,_0.45)]">
                        <div>
                            <h1 className="text-lg md:text-7xl font-mono text-white">Rings</h1>
                            <p className="text-[6px] md:mt-4 md:mb-2 md:text-2xl">COLLECTION ARRIVED</p>
                        </div>
                        <div>
                            <ShopNow className="bg-transparent border-2 p-1 text-[6px] md:border-4 box-border  border-white"/>
                            
                        </div>
                    </div>
                </div>
                <div className="mt-1 md:mt-0 flex md:block md:ml-5 gap-2 md:gap-0 md:w-1/3 md:max-h-80">
                    <div className="w-[49%] md:w-full">
                        <img src={homeImage[1]} alt="Image-2" className="max-w-full object-cover"/>
                    </div>
                    <div className="md:mt-5 md:max-h-full w-[49%] ml-[2%] md:ml-0 md:w-full">
                        <img src={homeImage[2]} alt="Image-2" className="max-w-full object-cover"/>
                    </div> 
                </div>
            </div>

            <Title title='OUR RECOMMENDATIONS'/>

            <div className="px-6 flex flex-wrap md:flex-nowrap md:gap-4 justify-between">
                {
                    ProductList?.map((product,index)=>{
                        if(index>3&&index<8){
                            return(
                                <ProductCard    key={product.sku}
                                                id={product.sku}
                                                image={product.image}
                                                name={product.name}
                                                category={product.category}
                                                price={product.price}/>
                            )
                        }
                    })
                }
            </div>

            <div className="flex mt-2 md:mt-24 md:gap-5">
                <img src={homeImage[3]} alt="" className="w-1/3"/>
                <img src={homeImage[4]} alt="" className="w-2/3"/>
            </div>

            <Title title='BEST SELLERS THIS WEEK'/>

            <div className="px-6 flex flex-wrap md:flex-nowrap md:gap-4 justify-between">
            {
                    ProductList?.map((product,index)=>{
                        if(index>7&&index<12){
                            return(
                                <ProductCard    key={product.sku}
                                                id={product.sku} 
                                                image={product.image}
                                                name={product.name}
                                                category={product.category}
                                                price={product.price}/>
                            )
                        }
                    })
                }
            </div>
            </div>
            </div>

            <NewsLetter/>
            <Footer/>

        </>
    )
}