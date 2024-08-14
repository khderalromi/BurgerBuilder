import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import speaker from '../../../../assests/images/speaker.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useCountdown } from 'react-countdown-circle-timer';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';



const MusicAd=(props)=>{
        
    const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
    } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' })

    const children = ({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60

       
      
        return `${hours}:${minutes}:${seconds}`

    }

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

   


    return(
        <div className=" mt-16 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 text-white bg-black grid grid-cols-2 items-center "
             data-aos='fade-up'
        >
            <div className="m-4 space-y-3 sm:ml-14 sm:mt-16 sm:mb-16 sm:space-y-12">
                <div className="flex justify-start items-center gap-5" >
                    <p className="text-xsm text-lemon">Categories</p>
                </div>


                <div>
                    <strong className=" text-base sm:text-2xl md:text-5xl md:leading-tight" >Enhance Your<br></br> Music Experience</strong>
                </div>


               {/*********** this div to show time*******/}
                <div className='flex flex-row gap-2 md:gap-5'>

                    {/*************Days Time*************/}
                    <div className='w-min bg-white rounded-full'>  
                        <CountdownCircleTimer
                            size={window.innerWidth<=400 ? 25 :
                                  window.innerWidth>400 && window.innerWidth<700 ? 35 :
                                  window.innerWidth>=700 && window.innerWidth<=800 ? 55 :
                                  window.innerWidth>800 && 80
                                 }

                            strokeWidth={0}
                            isPlaying
                            duration={3600*72}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                        >
                        {({ remainingTime }) => {
                            
                            const days = Math.ceil((remainingTime / (3600))/24)
                            const hours = Math.floor(remainingTime / (3600))%24
                            const minutes = Math.floor((remainingTime % 3600) / 60)
                            const seconds = remainingTime % 60
                            return <div className='text-black text-xSmall sm:text-xs  md:text-sm xl:text-base font-Righteous flex flex-col items-center' >
                                        <strong>{days} </strong>
                                        <strong>Days</strong>
                                    </div>
                       
                        }}
                            
                        </CountdownCircleTimer>
                    </div>

                    
                    {/*************Hours Time*************/}
                    <div className='w-min bg-white rounded-full'>   
                        <CountdownCircleTimer
                            size={window.innerWidth<=400 ? 25 :
                                 window.innerWidth>400 && window.innerWidth<700 ? 35 :
                                 window.innerWidth>=700 && window.innerWidth<=800 ? 55 :
                                 window.innerWidth>800 && 80
                                }
                            strokeWidth={0}
                            isPlaying
                            duration={3600*73.5}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                        >
                        {({ remainingTime }) => {
                            const days = Math.floor(remainingTime / (3600))/24
                            const hours = Math.floor(remainingTime / (3600))%24
                            const minutes = Math.floor((remainingTime % 3600) / 60)
                            const seconds = remainingTime % 60
                            return <div className='text-black text-xSmall sm:text-xs  md:text-sm xl:text-base font-Righteous flex flex-col items-center' >
                                        <strong>{hours} </strong>
                                        <strong>Hours</strong>
                                    </div>
                        }}
                            
                        </CountdownCircleTimer>
                    </div>

                    {/*************Minutes Time*************/}
                    <div className='w-min bg-white rounded-full'>  
                        <CountdownCircleTimer
                            size={window.innerWidth<=400 ? 25 :
                                  window.innerWidth>400 && window.innerWidth<700 ? 35 :
                                  window.innerWidth>=700 && window.innerWidth<=800 ? 55 :
                                  window.innerWidth>800 && 80
                                }
                            strokeWidth={0}
                            isPlaying
                            duration={3600*72}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                        >
                        {({ remainingTime }) => {
                            const days = Math.floor(remainingTime / (3600))/24
                            const hours = Math.floor(remainingTime / (3600))%24
                            const minutes = Math.floor((remainingTime % 3600) / 60)
                            const seconds = remainingTime % 60
                            return  <div className='text-black text-xSmall sm:text-xs  md:text-sm xl:text-base font-Righteous flex flex-col items-center' >
                                        <strong>{minutes} </strong>
                                        <strong>Minutes</strong>
                                    </div>
                        }}
                            
                        </CountdownCircleTimer>
                    </div>

                    

                    
                    {/*************Secondes Time*************/}
                    <div className='w-min bg-white rounded-full'>  
                        <CountdownCircleTimer
                            size={window.innerWidth<=400 ? 25 :
                                  window.innerWidth>400 && window.innerWidth<700 ? 35 :
                                  window.innerWidth>=700 && window.innerWidth<=800 ? 55 :
                                  window.innerWidth>800 && 80
                               }
                            strokeWidth={0}
                            isPlaying
                            duration={3600*72}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                        >
                        {({ remainingTime }) => {
                            
                            const days = Math.floor(remainingTime / (3600))/24
                            const hours = Math.floor(remainingTime / (3600))%24
                            const minutes = Math.floor((remainingTime % 3600) / 60)
                            const seconds = remainingTime % 60
                            return  <div className='text-black text-xSmall sm:text-xs  md:text-sm xl:text-base font-Righteous flex flex-col items-center' >
                                        <strong>{seconds} </strong>
                                        <strong>Secondes</strong>
                                    </div>
                        }}
                            
                        </CountdownCircleTimer>
                    </div>


                </div>


                <div className="w-1/2 ">
                    <button className=" bg-lemon p-2 text-xSmall sm:text-base  sm:pr-5 sm:pl-5 sm:pt-3 sm:pb-2 rounded">
                        Buy Now! 
                    </button>
                </div>
            </div>
            <img className='sm:mt-6' src={speaker}></img>


        </div>
           
        
    )
}

export default MusicAd;