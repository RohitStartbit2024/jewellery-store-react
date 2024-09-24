import { useEffect, useState } from "react";
import { blogs } from "../../../static-data/blogs";
import { comments } from "../../../static-data/comments";
import BlogCard from "./BlogCard";

export default function(props){

    const[countBlogs,setCountBlogs] = useState(0)
    const[startIndex, setStartIndex] = useState(0)
    const[currentPage, setCurrentPage] = useState(1)
    const[totalPage, setTotalPage] = useState(1)
    useEffect(()=>{
        var temp = 0
        blogs?.map(item=>
        {temp = temp+1}
        )
        setCountBlogs(temp)
    },[blogs])

    useEffect(()=>{
        var temp = countBlogs/8;
        if(temp%1 != 0){
            temp =Math.trunc(temp)+1
        }
        else{
            temp= Math.trunc(temp)
        }
        setTotalPage(temp)  
    },[countBlogs])

    useEffect(()=>{
        setStartIndex((currentPage-1)*8)
    },[currentPage])
    
    function handlePage(number){
        setCurrentPage(number)
    }
    function handlePrev(){
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }   
    }
    function handleNext(){
        if(currentPage<totalPage){
            setCurrentPage(currentPage+1)
        }
    }
    function openDetail(id){
        props.getId(id)
    }
    return(
        <>
            <div className="md:w-2/3">
                    <div className="flex flex-wrap justify-between">
                        {
                            blogs?.map((item,index)=> {
                                if (index >= startIndex && index <= startIndex + 7) {
                                   const numberC =  comments[item.id]?.length
                                return (
                                <BlogCard key={item.id}
                                        id={item.id}
                                        image={item.blogImage}
                                        authorImage={item.authorImage}
                                        name={item.blogName}
                                        author={item.author}
                                        date={item.date}
                                        comments={numberC}
                                        handleId={openDetail}/>
                                )}})
                        }
                    </div>

                    <div className="flex justify-center md:text-xl md:mt-8">
                        <div className={`border-2 border-r-0 p-1 md:p-3 ${currentPage == 1 ? "text-gray-400": "hover:bg-gray-100"}`} onClick={handlePrev}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>

                        {Array.from({ length: totalPage }, (_, i) => (
                            <div key={i + 1} className={`border-2 border-r-0 p-1 px-2 md:p-3 md:px-4 font-semibold ${i + 1 === currentPage ? "bg-teal-400" : "hover:bg-gray-100"}`} onClick={() => handlePage(i + 1)} >
                                {i + 1}
                            </div>
                        ))}

                        <div className={`border-2 p-1 md:p-3 ${currentPage == totalPage ? "text-gray-400": "hover:bg-gray-100"}`} onClick={handleNext}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
        </>
    )
}
