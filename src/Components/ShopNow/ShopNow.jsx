import { Link } from "react-router-dom"
export default function({ className = '' }){
    return(
        <>
            <Link to={'/category'}>
                <button className={`md:text-base md:mt-10 md:py-4 md:px-14 font-sans rounded-full 
                    ${className}`}>SHOP NOW</button>
            </Link>
        </>
    )
}