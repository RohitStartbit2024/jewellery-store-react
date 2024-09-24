export default function(){
    return(
        <>
        <div className="md:container-fluid bg-teal-400 mt-4 md:mt-24">
            <div className=" p-2 md:py-6 md:w-4/5 md:mx-auto md:container block md:flex justify-between gap-3">
                <div className="text-white  font-sans">
                    <h1 className="text-xl md:text-3xl font-semibold">JOIN OUR NEWSLETTER</h1>
                    <p className="text-xs mb-1 md:mb-0">Lorem Ipsum is simply dummy text</p>
                </div>
                <input type="text" className="w-2/3 md:w-3/6 text-xs md:text-lg rounded-full p-2 px-5 mr-1 md:mr-0" placeholder="Enter your email address"/>
                <button type="button" className="bg-white w-1/4 text-xs md:text-lg md:w-1/6 py-2 md:px-10 rounded-full text-teal-400">
                    Subscribe
                </button>
            </div>
        </div>
        </>
    )
}