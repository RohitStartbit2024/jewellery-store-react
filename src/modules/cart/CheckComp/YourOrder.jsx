export default function(props){
    return(
        <div className="flex justify-between text-xs md:text-base">
            <p>{props.name} <span className={`${props.quantity == 1?"hidden":""}`}>x{props.quantity}</span> </p>
            <p className="text-right">${props.quantity * props.price}</p>
        </div>
    )
}