import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PlayStation from '../../../../assests/images/PlayStation.png';
import Women from '../../../../assests/images/Women.png';
import Speakers from '../../../../assests/images/Speakers.png';
import Perfume from '../../../../assests/images/Perfume.png';





const Features=(props)=>{

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);


    return(
        <div className="mt-8 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16 ">
            
            <div className="before" >
                <strong className="ml-3 text-red-500">Featured</strong>
            </div>

            <div className="mt-5 flex justify-between">
                <strong className="text-sm md:text:2xl lg:text-4xl">New Arrival</strong>
                
            </div>


            <div className='mt-8 grid grid-rows-2 grid-cols-4 gap-4 lg:mt:16 lg:gap-10' >
                <div className='bg-black rounded-md col-span-2 row-span-2 relative' data-aos='flip-left'>

                    <img className='size-full' src={PlayStation}></img>

                    <div className='text-white ml-3 mb-3 absolute z-2 bottom-0 lg:ml-10 lg:mb-10'>

                        <strong className='text-white text-sm lg:text-4xl'>PlayStation 5</strong>
                        <p className='text-xs mt-1 mb-1 lg:mt-4 lg:mb-4'>Black and White version of the PS5 <br></br> coming out on sale.</p>
                        <button className='text-sm underline lg:text-base'>Shop Now</button>

                    </div>

                </div>

                <div className='bg-black rounded-md col-span-2 row-span-1 w-full relative'  data-aos='flip-right'>
                    <img className='size-full rounded-md '  src={Women}></img>

                    <div className='text-white ml-3 mb-2 absolute z-2 bottom-0 lg:ml-10 lg:mb-10'>

                        <strong className='text-white text-xs sm:text-sm lg:text-2xl '>Women's Collections</strong>
                        <p className=' mt-0.5 mb-0.5  text-small  sm:text-xs lg:mt-2 lg:mb-2 lg:text:sm'>Featured woman collections that<br></br> give you another vibe.</p>
                        <button className='underline text-small sm:text-sm  lg:text-base'>Shop Now</button>

                    </div>

                </div>

                <div className='bg-black rounded-md col-span-1 row-span-1 w-full relative' data-aos='flip-right'>
                    <img className='size-3/4'  src={Speakers}></img>
                    
                    <div className='text-white ml-3 mb-2 absolute z-2 bottom-0 lg:ml-10 lg:mb-10'>
                        <strong className='text-white text-xs sm:text-sm lg:text-3xl '>Speakers</strong>
                        <p className=' mt-0.5 mb-0.5 text-small sm:text-xs lg:text:sm lg:mt-2 lg:mb-2 '>Amazon wireless speakers</p>
                        <button className='underline text-small sm:text-sm  lg:text-base'>Shop Now</button>

                    </div>

                </div>

                <div className='bg-black rounded-md col-span-1 row-span-1 w-full relative' data-aos='flip-right'>
                    <img className='size-5/6'  src={Perfume}></img>
                    
                    <div className='text-white ml-3 mb-2 absolute z-2 bottom-0 lg:ml-10 lg:mb-10'>
                        <strong className='text-white text-xs sm:text-sm lg:text-3xl '>Perfume</strong>
                        <p className=' mt-0.5 mb-0.5 text-small  sm:text-xs lg:text:sm lg:mt-2 lg:mb-2 '>GUCCI INTENSE OUD EDP</p>
                        <button className='underline text-small sm:text-sm  lg:text-basee'>Shop Now</button>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Features;