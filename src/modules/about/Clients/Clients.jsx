export default function(props){
    return(
        <div className="py-2 px-2 md:pt-10 flex mb-2 md:mb-0 md:block md:w-[30%] bg-teal-50 text-center">
            <div className="flex px-4 md:px-20 w-[30%] aspect-square md:aspect-auto my-auto md:my-0 md:w-auto md:h-[40%] justify-center">
                <img src={props.image} alt="client" className="rounded-full"/>
            </div>
            <div>
            <p className="mt-2 md:mt-5 text-[10px] md:text-base">{props.review}</p>
            <p className="mt-2 md:mt-5 font-serif text-sm md:text-2xl">{props.name}</p>
            <p className="text-[10px] md:text-base">{props.occupation}</p>
            </div>
        </div>
    )
}