import { useEffect, useState } from "react"
import { blogs } from "../../../static-data/blogs"
import { comments } from "../../../static-data/comments"
import CommentsCard from "./Comments/CommentsCard"
import { Link } from "react-router-dom"
import { FacebookShareButton, InstapaperShareButton, TwitterShareButton } from "react-share"
export default function(props){
    const [blog,setBlog] = useState({})
    const [comment, setComment] = useState(comments[props.id])
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(()=>{
        blogs?.map((item,index)=>
        {if(item.id == props.id){
                setBlog(item)
                setCurrentIndex(index)
            }}
        )
    },[props.id])
    
    useEffect(()=>{
        setBlog(blogs[currentIndex])
    },[currentIndex])

    useEffect(()=>{
        setComment(comments[blog.id])
    },[blog])

    function handleNext(){
        if(currentIndex<blogs.length-1){
            setCurrentIndex(currentIndex+1)
        }   
    }

    function handlePrev(){
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1)
        }  
    }
    const url = window.location.href
    return(
       <>
            <div className="md:w-2/3">
                <div className="w-full aspect-video mb-3 md:mb-6">
                    <img src={blog.blogImage} alt="Blog Image" className="object-cover w-full h-full"/>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500 text-[10px] md:text-base">{blog.category} | &nbsp;{blog.date} | &nbsp;{blog.author}</p>
                    <p className="text-sm md:text-lg md:font-semibold">
                        Share &nbsp;
                        <FacebookShareButton url={url}>
                        <i className="fa-brands fa-facebook-f text-blue-700"></i> &nbsp;
                        </FacebookShareButton>
                        <TwitterShareButton url={url}>
                        <i className="fa-brands fa-twitter text-sky-500"></i> &nbsp;
                        </TwitterShareButton>
                        <InstapaperShareButton url={url}>
                        <i className="fa-brands fa-instagram text-red-500"></i> &nbsp;
                        </InstapaperShareButton>
                    </p>
                </div>

                <h1 className="font-semibold font-serif md:text-3xl text-xl my-3 md:my-6">{blog.blogName}</h1>

                <p className="my-3 md:my-6 text-xs md:text-sm text-gray-500">{blog.description}</p>
                <p className="my-3 md:my-6 text-xs md:text-sm text-gray-500">{blog.description}</p>
                <p className="my-3 md:my-6 text-xs md:text-sm text-gray-500">{blog.description}</p>

                <div className="flex justify-between">
                    <div className="w-[47%] my-3 md:my-6 aspect-video">
                        <img src={blog.blogImage1} alt="" className="w-full h-full"/>
                    </div>
                    <div className="w-[47%] my-3 md:my-6 aspect-video">
                        <img src={blog.blogImage2} alt="" className="w-full h-full"/>
                    </div>
                </div>

                <p className="my-3 md:my-6 text-xs md:text-sm text-gray-500">{blog.brief}</p>

                <div className="flex justify-between mt-4 md:mt-12">
                    <Link onClick={handlePrev} className="md:p-3 p-2 px-3 md:px-5 md:text-lg font-semibold bg-gray-100 hover:bg-teal-400 hover:text-white"><i className="fa-solid fa-angle-left"></i> Prev Post</Link>
                    <Link onClick={handleNext} className="md:p-3 p-2 px-3 md:px-5 md:text-lg font-semibold bg-gray-100 hover:bg-teal-400 hover:text-white">Next Post <i className="fa-solid fa-angle-right"></i></Link>
                </div>

                <h1 className="text-sm md:text-xl font-bold mt-4 md:mt-10">{blog.comments} Comments</h1>

                <div className="py-2 md:py-6 mb-2 md:mb-4">
                    {
                        comment?.map(item =>
                            <CommentsCard   key={item.commentId}
                                            image={item.userImage}
                                            name={item.name}
                                            date={item.date}
                                            comment={item.comment}/>
                         )
                    }
                </div>
                <h1 className="font-serif text-sm md:text-2xl mb-4 md:mb-10">Leave Your Comment</h1>
            
                <div>
                    <div className="flex mb-3 text-xs md:text-base md:mb-6 justify-between">
                        <div className=" p-1 md:p-3 px-4 md:px-6 border-2 w-[48%]"><input type="text" placeholder="Your Name"/></div>
                        <div className=" p-1 md:p-3 px-4 md:px-6 border-2 w-[48%]"><input type="text" placeholder="Your Email"/></div>
                    </div>
                    <div className="flex mb-3 text-xs md:text-base md:mb-6 justify-between">
                        <div className=" p-1 md:p-3 px-4 md:px-6 border-2 w-[48%]"><input type="text" placeholder="Phone No"/></div>
                        <div className=" p-1 md:p-3 px-4 md:px-6 border-2 w-[48%]"><input type="text" placeholder="Subject"/></div>
                    </div>
                    <div className="w-full h-24 md:h-44 p-1 md:p-3 px-4 md:px-6 border-2 mb-3 text-xs md:text-base md:mb-6">
                        <input type="text" placeholder="Comment"/>
                    </div>
                    <button type="button" className=" bg-teal-400 text-white text-xs font-semibold md:text-lg p-1 md:p-3 text-center w-[30%]">SUBMIT</button>
                </div>

            </div>

            
            
       </>
    )
}

