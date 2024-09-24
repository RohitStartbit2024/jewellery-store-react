import { Link } from "react-router-dom";

export default function(props){
    
    return(
        
            <div className="w-[49%] mb-4 md:mb-8 h-[150px] md:h-[330px] border-2 hover:shadow-md">
                <Link to={`/blogs/${props.id}`}>
                <img src={props.image} alt="blogImage" className="w-full h-[70%] object-cover"/>
                <div className="h-[30%]">
                    <div className="h-[50%] flex justify-between items-center p-1 md:p-3 ">
                        <div className="h-full flex items-center">
                            <img src={props.authorImage} alt="" className="h-full rounded-full"/>
                            <p className="ml-1 md:ml-2 text-[9px] md:text-lg  md:py-1 font-semibold">{props.author}</p>
                        </div>
                        <div className="text-[7px] md:text-sm md:py-1 text-gray-500">
                            <i className="fa-regular fa-calendar"></i>&nbsp;
                            {props.date}&nbsp;&nbsp;
                            <i className="fa-regular fa-message"></i>&nbsp;
                            {props.comments}
                        </div>
                    </div>
                    <div className="h-[50%] text-sm md:text-xl font-semibold px-1 md:px-2">{props.name}</div>
                </div>
                </Link>
            </div>
        
    )
}