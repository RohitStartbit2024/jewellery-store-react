import { socialMedia } from '../../static-data/shopDetails'
import { shopDetails } from '../../static-data/shopDetails'
import { jewellery } from '../../static-data/shopDetails'
import { policy } from '../../static-data/shopDetails'
export default function(){
    return (
        <>
            <div className="container md:w-4/5 mx-auto md:mb-4 md:py-10 md:flex text-center md:text-left">
                <div className="md:w-1/4 mt-3 md:mt-0 px-4">
                    <h1 className="text-xs md:text-2xl text-black font-semibold mb-2">Contact Us</h1>
                    <div className='flex justify-center md:justify-start items-center mb-2'>
                        <i className="fa-solid fa-location-dot fa-2xs md:fa-xs mr-2 text-teal-400"></i>
                        <p className='text-[8px] md:text-sm'>{shopDetails.addLine1} {shopDetails.addLine2}</p>
                    </div>
                    <div className='flex justify-center md:justify-start items-center mb-2'>
                        <i className="fa-regular fa-envelope fa-2xs md:fa-xs mr-2 text-teal-400"></i>
                        <p className='text-[8px] md:text-sm'>{shopDetails.email}</p>
                    </div>
                    <div className='flex justify-center md:justify-start items-center'>
                        <i className="fa-solid fa-phone fa-2xs md:fa-xs mr-2 text-teal-400"></i>
                        <p className='text-[8px] md:text-sm'>{shopDetails.number}</p>
                    </div>
                    
                </div>
                <div className="md:w-1/4 mt-3 md:mt-0 px-4">
                    <h1 className="text-xs md:text-2xl text-black font-semibold mb-2">Jewellery</h1>
                    <ul className='text-[8px] md:text-sm'>
                        {jewellery?.map((item,index)=>
                                <li key={index} className='mb-1'>{item}</li>
                        )}
                    </ul>
                </div>
                <div className="md:w-1/4 mt-3 md:mt-0 px-4">
                    <h1 className="text-xs md:text-2xl text-black font-semibold mb-2">Our Policy</h1>
                    <ul className='text-[8px] md:text-sm'>
                        {policy?.map((item,index)=>
                                <li key={index} className='mb-1'>{item}</li>
                        )}
                    </ul>
                </div>
                <div className="md:w-1/4 mt-3 md:mt-0 px-4 flex justify-center md:justify-start md:block">
                    <img src={shopDetails.logo} alt="logo" className='w-16 md:w-auto mb-2'/>
                    <div className='flex px-3 md:px-0 justify-start items-center gap-4'>
                        {socialMedia?.map((item, index)=>
                            <img key={index} src={item.link} alt={item.name} className=' w-6 h-6 md:w-10 md:h-10 mb-1'/>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-center bg-teal-100 py-1 md:py-2 text-xs md:text-base text-gray-700">&#169; Copyright 2021 All Rights Reserved</div>
        </>
    )
}