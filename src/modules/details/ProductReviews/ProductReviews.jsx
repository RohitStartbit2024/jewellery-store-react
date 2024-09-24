export default function(props){
    return(
        <div className="mb-3 md:mb-6 border-b-2 px-2 md:px-6">
            <p className="font-semibold md:text-lg">{props.name}</p>
            <div className="md:font-semibold text-xs md:text-sm mb-1 md:mb-2">
                {Array.from({ length: props.rating }, (_, i) => (
                    <i key={i} className="fa-solid fa-star text-teal-400"></i>
                ))}
                {Array.from({ length: 5-props.rating }, (_, i) => (
                    <i key={i} className="fa-solid fa-star text-gray-400"></i>
                ))}
            </div>

            <p className="text-xs md:text-base mb-2">{props.review}</p>
        </div>
    )
}