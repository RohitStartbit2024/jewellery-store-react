import { Link } from "react-router-dom";
import FeatureProduct from "../../../Components/FeatureProduct/FeatureProduct";
import { blogs } from "../../../static-data/blogs";
import { comments } from "../../../static-data/comments";
import { useEffect, useState } from "react";
import MultipleTags from '../../../Components/MultipleTags/MultipleTags'

export default function(){
    const [food, setFood] = useState(0)
    const [lifestyle, setLifestyle] = useState(0)
    const [travel, setTravel] = useState(0)
    const [adventure, setAdventure] = useState(0)
    const [business, setBusiness] = useState(0)

    const sortedKeys = Object.entries(comments)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 4)
    .map(entry => entry[0]);

    var foodCount = 0
    var lifeCount = 0
    var travelCount = 0
    var adventureCount = 0
    var businessCount = 0

    useEffect(()=>{
        blogs?.map((items)=>{
            if(items.category=="food"){
                foodCount++
            }
            if(items.category=="lifestyle"){
                lifeCount++
            }
            if(items.category=="travel"){
                travelCount++
            }
            if(items.category=="adventure"){
                adventureCount++
            }
            if(items.category=="business"){
                businessCount++
            }
        })
    },[blogs])
    
    useEffect(()=>{
        setAdventure(adventureCount)
        setBusiness(businessCount)
        setFood(foodCount)
        setTravel(travelCount)
        setLifestyle(lifeCount)
    },[foodCount,lifeCount, travelCount,adventureCount,businessCount])

    return(
        <div className="md:w-1/3 hidden md:block h-full md:px-8">
            <div className="w-full flex justify-between items-center px-5 py-3 mb-12 border-2 rounded-full">
                <input type="text" className="" placeholder="Search here..."/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h1 className="font-serif text-3xl py-3 border-b-4 border-teal-400">Popular Posts</h1>

            <div className="mb-12">
            {sortedKeys?.map(key => {
                    const blogItem = blogs?.find(item => item.id === key);
                            return blogItem ? (
                                    <FeatureProduct key={blogItem.id}
                                                    id={blogItem.id}
                                                    image={blogItem.blogImage}
                                                    name={blogItem.blogName}
                                                    price={blogItem.date}
                                                    nav="blog"/>
                                                ) : null;
                            })}               
            </div>
            
            <h1 className="font-serif text-3xl py-3 border-b-4 border-teal-400">Categories</h1>
            <Link className="pt-3 mb-8">
                  <p className="py-3 text-xl flex justify-between items-center">
                    <p>Food</p>
                    <p className="text-gray-400">({food})</p>
                  </p>
                  <p className="py-3 text-xl border-t-2 flex justify-between items-center">
                    <p>Lifestyle</p>
                    <p className="text-gray-400">({lifestyle})</p>
                  </p>
                  <p className="py-3 text-xl border-t-2 flex justify-between items-center">
                    <p>Travel</p>
                    <p className="text-gray-400">({travel})</p>
                  </p>
                  <p className="py-3 text-xl border-t-2 flex justify-between items-center">
                    <p>Adventure</p>
                    <p className="text-gray-400">({adventure})</p>
                  </p>
                  <p className="py-3 text-xl border-t-2 flex justify-between items-center">
                    <p>Business</p>
                    <p className="text-gray-400">({business})</p>
                  </p>
            </Link>
            <h1 className="font-serif text-3xl py-3 border-b-4 border-teal-400">Tags</h1>
            {/* <div className="flex flex-wrap gap-y-2 justify-between pt-3"> */}
                  {/* <div className="w-[32%] bg-gray-200 p-2 text-center">Food</div>
                  <div className="w-[32%] bg-gray-200 p-2 text-center">Lifestyle</div>
                  <div className="w-[32%] bg-gray-200 p-2 text-center">Travel</div>
                  <div className="w-[32%] bg-gray-200 p-2 text-center">Adventure</div>
                  <div className="w-[32%] bg-gray-200 p-2 text-center">Business</div>
                  <div className="w-[32%] bg-gray-200 p-2 text-center">Tour</div>
                  <div className="w-[32%] bg-gray-200 p-2 text-center">Jewellery</div> */}
                  
            {/* </div>   */}
            <div className="mt-6"></div>
            <MultipleTags/>   
        </div>
    )
}