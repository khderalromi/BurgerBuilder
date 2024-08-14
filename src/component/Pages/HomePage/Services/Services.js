import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCar, faHeadphones, faSign } from "@fortawesome/free-solid-svg-icons";

const Services=(props)=>{

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []); 
    return(
        <div className="mt-8 ml-5 mr-5 md:ml-15 md:mr-15 md:mt-10 md:mb-6 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16 lg:mb-10 grid grid-flow-col justify-evenly">

            <div className="grid grid-flow-row " data-aos='zoom-in'>
                <FontAwesomeIcon className="place-self-center text-white bg-black rounded-full p-1.5 border-4 text-lg sm:text-3xl sm:border-8 sm:p-3 "  
                                icon={faCar}
                />
                <strong className="place-self-center mt-2 text-xSmall sm:text-sm lg:text-lg xl:text-xl ">FREE AND FAST DELIVERY</strong>
                <p className="place-self-center text-xSmall sm:text-small md:text-xs lg:text-sm ">Free delivery for all orders over $140</p>
            </div>

            <div className="grid grid-flow-row" data-aos='zoom-in'>
                <FontAwesomeIcon  className="place-self-center text-white bg-black rounded-full p-1.5 border-4 text-lg sm:text-3xl sm:border-8 sm:p-3 "
                                  icon={faHeadphones}
                />
                <strong className="place-self-center mt-2 text-xSmall sm:text-sm lg:text-lg xl:text-xl ">24/7 CUSTOMER SERVICE</strong>
                <p className="place-self-center text-xSmall sm:text-small md:text-xs lg:text-sm">Friendly 24/7 customer support</p>
            </div>
            
            <div className="grid grid-flow-row" data-aos='zoom-in'>
                <FontAwesomeIcon  className="place-self-center text-white bg-black rounded-full p-1.5 border-4 text-lg sm:text-3xl sm:border-8 sm:p-3 "  
                                  icon={faCircleCheck}
                />
                <strong className="place-self-center mt-2 text-xSmall sm:text-sm lg:text-lg xl:text-xl ">MONEY BACK GUARANTEE</strong>
                <p className="place-self-center text-xSmall sm:text-small  md:text-xs lg:text-sm">We reurn money within 30 days</p>
            </div>
            



        </div>
    )
}
export default Services;