import { useEffect, useState } from 'react'
import { ProductList } from '../../static-data/ProductList'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Header from '../../Components/Header/Header'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
export default function(props){
    const params = useParams()
    const value = params?.result.toLowerCase()
    const type = props.type
    const [visibleArray, setVisibleArray] = useState([])
    useEffect(()=>{
        if(type == "category"){
            setVisibleArray(ProductList?.filter(item=> item.category == value))
        }
        if(type == "search"){
            setVisibleArray(ProductList?.filter(item => item.category.includes(value) || item.name.toLowerCase().includes(value) || item.color.includes(value) || item.metal.includes(value) || item.sku.includes(value) || item.price.includes(value) || item.stone.includes(value)))
        } 
    },[type,value])
    return(
        <>
            <Header page={type == "category" ? value : ""}/>

            <div className='min-h-screen px-2 md:container md:mx-auto'>
                    {visibleArray?.length == 0 ? <p className='text-center min-h-screen text-red-700  text-xl pt-10'>No Results Found : (</p> :
                    <div className='flex flex-wrap justify-start mt-4 md:mt-16 gap-[3%] md:px-32'>
                    {visibleArray?.map((product)=>
                        <ProductCard    key={product.sku}
                                        id={product.sku} 
                                        image={product.image}
                                        name={product.name}
                                        category={product.category}
                                        price={product.price}/>
                    )}
                    </div>}
            </div>

            <NewsLetter/>
            <Footer/>

        </>
    )
}