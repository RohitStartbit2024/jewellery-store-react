import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import { aboutInfo } from '../../static-data/aboutInfo'
import DiamondBox from '../../modules/about/DiamondBox/DiamondBox'
import { features } from '../../static-data/aboutInfo'
import { reviews } from '../../static-data/aboutInfo'
import Title from '../../Components/Title/Title'
import Clients from '../../modules/about/Clients/Clients'
import Banner from '../../Components/Banner/Banner'
export default function(){
   
    return(      
        <>
            <Header page="aboutUs"/>

            <Banner bgImage={"bg-[url('/images/rose-3494596_1920.jpg')]"}>
                <h1 className="font-serif md:text-6xl">About Us</h1>
            </Banner>
            <div className='px-2 md:container md:mx-auto mt-2 md:mt-24 text-center'>

                <h1 className="font-serif md:text-4xl">{aboutInfo[0].title}</h1>
                <p className='text-[10px] md:text-lg mt-0 md:mt-4'>{aboutInfo[0].detail}</p>

            </div>

            <div className='md:container-fluid bg-teal-50 md:mt-24 mt-4'>
            <div className='py-3 md:flex md:container px-2 md:mx-auto md:py-16'>
                <div className='p-2 text-center md:text-left md:px-16 md:w-1/2'>
                    <h1 className="font-serif md:text-4xl">{aboutInfo[1].title} <br />{aboutInfo[1].subTitle}</h1>
                    <p className='text-xs md:text-lg mt-0 md:mt-4'>{aboutInfo[1].detail}</p>
                </div>
                <div className='flex justify-center gap-4 md:block mt-1 md:pl-0 md:px-16 md:w-1/2 h-32 md:h-80'>
                    <img src={aboutInfo[1].image1} alt="image1" className='max-w-[50%] h-[70%]'/>
                    <img src={aboutInfo[1].image2} alt="image2" className='max-w-[50%] h-[70%] md:-mt-40 md:ml-40' />
                </div>
            </div>
            </div>

            <div className='mt-4 md:my-24 p-2 md:flex md:container md:mx-auto justify-between'>
                {features?.map((feature) =>(
                    <>
                        <DiamondBox className={feature.class}
                                    title={feature.title}
                                    detail={feature.detail}/>
                        
                    </>
                ))}
            </div>
            
            <div className=' md:px-0 md:container-fluid bg-teal-50'>
            <div className='flex md:mx-auto md:container py-3 md:py-24 my-2 md:my-24 '>
                <div className='w-1/2 aspect-video flex justify-center md:mr-0'>
                    <img src={aboutInfo[2].image} alt="image-3" className='max-w-full'/>
                </div>
                <div className='w-1/2 pr-2 md:pr-0 md:py-10 text-right'>
                    <h1 className='font-serif text-[12px] md:text-4xl'>{aboutInfo[2].title}</h1>
                    <p className='text-[8px] md:text-lg mt-0 md:mt-4'>{aboutInfo[2].detail}</p>
                </div>
            </div>
            </div>

            <div className='px-2 md:container md:mx-auto'>
                <Title title="Our Client Reviews"/>
                <div className=' flex justify-between'>
                    {reviews?.map((review) =>(
                        <>
                            <Clients name={review.name}
                                    image={review.image}
                                    review={review.review}
                                    occupation={review.occupation}/>
                        
                        </>
                    ))}
                </div>
            </div>

            <NewsLetter/>
            <Footer/>
        </>
    )
}