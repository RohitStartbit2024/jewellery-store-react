export default function(props){
    return(
        <div className="p-1 md:p-2 px-2 md:px-4 mb-4 md:mb-8 flex">
            <div className="w-[13%] md:w-[10%] aspect-square">
                <img src={props.image} alt="" className="object-contain w-full h-full"/>
            </div>
            <div className="ml-2 md:ml-4">
                <p className=" text-xs md:text-sm font-semibold">{props.name}</p>
                <p className="mb-1 md:mb-2 text-xs md:text-sm text-gray-500">{props.date}</p>
                <p className="text-xs md:text-sm text-gray-500">{props.comment}</p>
                <div className="flex items-center gap-1 text-xs md:text-sm">
                    <p className="font-semibold">Reply</p>
                    <i class="fa-solid fa-reply text-teal-400"></i>
                </div> 
            </div>
        </div>
    )
}