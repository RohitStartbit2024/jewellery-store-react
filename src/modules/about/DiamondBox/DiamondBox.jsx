export default function(props){
    return(
        <div className="px-6 md:px-0 mb-4 md:mb-0 flex md:block">
        <div className='h-10 w-10 md:mx-auto md:h-32 md:w-32 bg-teal-100 rotate-45'>
                    <div className='h-10 w-10 md:h-32 md:w-32 flex items-center justify-center bg-teal-400 -rotate-45'>
                        <i className={`fa-solid ${props.className} text-white text-xl md:text-5xl`}></i>
                    </div>
        </div>
        <div className="md:mt-8 ml-3 md:ml-0 md:w-64 text-center">
            <h1 className="font-serif text-[10px] md:text-2xl">{props.title}</h1>
            <p className="md:mt-3 text-[6px] md:text-base">{props.detail}</p>
        </div>  
        </div>
    )
}