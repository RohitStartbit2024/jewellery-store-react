export default function({children, bgImage}){
    return(
        <div className={`px-2 py-16 md:py-64 container-fluid w-full text-center bg-cover bg-center  [box-shadow:inset_0_0_0_2000px_rgba(255,_255,_255,_0.5)] ${bgImage}`}>
            {children}
        </div>
    )
}