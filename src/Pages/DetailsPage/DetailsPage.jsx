import { useEffect, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NewsLetter from "../../Components/NewsLetter/NewsLetter"
import DetailCard from "../../modules/details/DetailCard"
import { details } from "../../static-data/productDetails"
import ReviewsComp from "../../modules/details/ProductReviews/ReviewsComp"
import { ProductList } from "../../static-data/ProductList"
import Title from "../../Components/Title/Title"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { useParams } from 'react-router-dom';
import { productReview } from "../../static-data/productReview"
export default function(){
    const param = useParams()
    const paramId = param.sku
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState("")
    const [openReview , setOpenReview] = useState(false)
    const reviews = productReview[paramId];
    const [numberRating, setNumberRating] = useState(0)
    const [totalRating, setTotalRating] = useState(0)
    useEffect(()=>{
        var rate = 0
        var num= 0
        reviews?.map((i)=>{
            num= num +1 
            rate = rate + parseInt(i.star)
        })
        setNumberRating(num)
        setTotalRating(rate)
    },[paramId])
    
    console.log(totalRating/numberRating);    

    useEffect(()=>{
        const array =details?.filter(item=> item.sku == paramId)
        setProduct(array[0])
    },[param])
    
    useEffect(()=>{
        const array = ProductList?.filter(item=>item.sku == paramId)
        setCategory(array[0].category)
    },[product])

    function handleDes(){
        setOpenReview(false)
      }
    function handleReview(){
        setOpenReview(true)
      }
      

    return(
        <>
            <Header page={category}/>
            <div className="min-h-screen px-2 md:container md:mx-auto my-4 md:my-24">
                <DetailCard key={product.sku}
                            sku={product.sku}
                            name={product.name}
                            discountPrice={product.sellingPrice}
                            price={product.costPrice}
                            image1 = {product.image1}
                            image2 = {product.image2}
                            image3 = {product.image3}
                            image4 = {product.image4}
                            brief = {product.brief}
                            rating = {Math.floor(totalRating/numberRating)}
                            reviews = {numberRating}
                            unit = {product.unit}/>

                <div className="border-b-2 border-gray-400 flex mt-8 md:mt-24">
                    <div className={`w-[50%] md:w-[10%] py-2 text-sm md:text-base border-2 border-b-0 border-r-0 border-gray-400 box-border md:p-3 text-center ${openReview ?"bg-white text-black" : "bg-teal-400 text-white"}`} onClick={handleDes}>Description</div>

                    <div className={`w-[50%] md:w-[10%] py-2 text-sm md:text-base border-2 border-b-0 box-border border-gray-400 md:p-3 text-center ${openReview ?"bg-teal-400 text-white" : "bg-white text-black"}`} onClick={handleReview}>Reviews ({numberRating})</div>
                </div>
                <div className="mt-5 md:mt-10">
                {openReview ? <ReviewsComp sku={product.sku}/> : 
                        <div  className="px-2 md:px-0 mb-4 md:mb-0 text-xs md:text-base">
                        <p> 
                            {product.details}
                        </p>
                        <p className="mt-5 md:mt-10">
                            {product.details}
                        </p>
                        </div>}
                </div>

                <Title title="RELATED PRODUCTS"/>

                <div className="px-6 flex flex-wrap md:flex-nowrap md:gap-4 justify-between">
                {(() => {
                    let count = 0;
                    return ProductList?.map((product) => {
                        if (product.category === category && count < 4) {
                            count++;
                        return (
                                <ProductCard key={product.sku}
                                             id={product.sku}
                                             image={product.image}
                                             name={product.name}
                                             category={product.category}
                                             price={product.price}/>
                                );}
                        return null;});
                        })()}
                </div>

            </div>
            <NewsLetter/>
            <Footer/>
            
        </>
    )
}