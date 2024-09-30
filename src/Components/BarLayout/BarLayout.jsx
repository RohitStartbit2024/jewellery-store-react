import { Link } from "react-router-dom";

export default function(props){
    return(
        <div className='text-center hover:shadow-gray-500 hover:shadow-md ml-[2.5%] md:ml-0 flex gap-[2%] justify-between pr-3 items-center mb-3'>
            <div className="w-[10%] aspect-square">
                <img src={props.image} alt="ProductImage" className="w-full h-full object-cover"/>
            </div>
            
            <h1 className='text-xs md:w-[40%] md:text-lg md:px-5'>{props.name}</h1>
            <p className='text-xs w-[15%] md:text-sm text-gray-500 uppercase'>{props.category}</p>
            <p className=' w-[15%] text-sm text-teal-400 font-semibold md:text-lg'>${props.price}</p>
            <Link to={`/category/${props.id}`}>
            <button className='md:mt-3 md:mx-auto mt-1 p-1 md:px-5 md:py-3 text-[6px] md:text-xs bg-black text-white rounded-full mb-1'>SHOP NOW</button>
            </Link>
        </div>
        
        
    )
}