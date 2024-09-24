import { Link } from "react-router-dom"

export default function(props){
    return(
        <Link to={props.nav== "jewellery" ? `/category/${props.id}` : `/blogs/${props.id}`} className="flex md:my-6 hover:bg-gray-100">
            <div className="w-[30%] ">
                <img src={props.image} alt="image" className="object-cover"/>
            </div>
            
            <div className="px-2">
                <p className="md:text-base font-semibold">{props.name}</p>
                <p className="md:text-sm text-gray-500">{props.price}</p>
            </div>
        </Link>
    )
}