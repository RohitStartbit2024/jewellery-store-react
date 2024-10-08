import { Link } from "react-router-dom";

export default function(props){
    return(
        <div className='text-center hover:shadow-gray-500 hover:shadow-md w-[45%] ml-[2.5%] md:ml-0 group md:w-[45%] mb-3 aspect-square md:aspect-auto md:h-96'>
            <img src={props.image} alt="ProductImage"className="w-full object-cover h-[50%]"/>
            <h1 className='text-xs md:text-lg md:px-5'>{props.name}</h1>
            <p className='text-xs md:text-sm text-gray-500 uppercase'>{props.category}</p>
            <p className='md:mt-3 text-sm mt-1 text-teal-400 font-semibold md:text-lg'>${props.price}</p>
            <Link to={`/category/${props.id}`}>
            <button className='md:mt-3 md:hidden md:group-hover:block md:mx-auto mt-1 p-1 md:px-5 md:py-3 text-[6px] md:text-xs bg-black text-white rounded-full mb-1'>SHOP NOW</button>
            </Link>
        </div>
        
        
    )
}