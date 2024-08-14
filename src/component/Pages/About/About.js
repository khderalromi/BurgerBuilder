import { useState,useEffect } from "react";
import { useLocation } from "react-router";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import OffersItem from "./OffersItem";
import Services from "../HomePage/Services/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCoins, faSackDollar, faGift, faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import man1 from '../../../assests/images/man1.png';
import man2 from '../../../assests/images/man2.png';
import women2 from '../../../assests/images/women2.png';
import twoWomens from '../../../assests/images/twoWomens.png';
const About=(props)=>{

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

    const location=useLocation();
    const [index,setIndex]=useState(0);
    const[disabledButton,setDisabledButton]=useState(false);
    const offersItems=[   
        {Offers:'10.5k',icon:faHome,explain:'Sallers active our site'},
        {Offers:'33k',icon:faSackDollar ,explain:'Mopnthly Produduct Sale'},
        {Offers:'45.5k',icon:faGift ,explain:'Customer active in our site'},
        {Offers:'25k',icon:faCoins ,explain:'Anual gross sale in our site'}

    ]

    const employeesArray=[
        {image:man1,name:'Tom Cruise',department:'Founder & Chairman'},
        {image:women2,name:'Emma Watson',department:'Managing Director'},
        {image:man2,name:'Will Smith',department:'Product Designer'}
    ]

    

    return(
        <div>
            <Header/>
            <div className="mt-8 ml-4 md:ml-15 lg:ml-24 lg:mt-16" >
                <div >
                    <p>Home {location.pathname}</p>
                </div>
                {/*******this div for main photo and paragraph **********/}
                <div className="flex items-center w-full mt-6 lg:mt-12 " >
                    <div className="w-4/5 sm:w-1/2 flex flex-col gap-2 sm:gap-5 lg:gap-10 " data-aos='fade-right'>
                        <strong className="text-base md:text-2xl lg:text-5xl leading" >Our Story</strong>
                        <div className="space-y-1 sm:space-y-3">  
                            <p className="text-xSmall sm:text-xs lg:text-sm">Launced in 2015, Exclusive is South Asia’s premier online shopping<br></br>
                                makterplace with an active presense in Bangladesh. Supported<br></br>
                                by wide range of tailored marketing, data and service solutions,<br></br>
                                Exclusive has 10,500 sallers and 300 brands and serves 3<br></br>
                                    millioons customers across the region. 
                            </p>

                            <p className="text-xSmall sm:text-xs lg:text-sm">Exclusive has more than 1 Million products to offer, growing at a<br></br>
                                very fast. Exclusive offers a diverse assotment in categories<br></br>
                                ranging  from consumer.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img className="rounded size-40 sm:size-full" src={twoWomens}  data-aos='fade-left'></img>
                    </div>
                </div>

                {/************Offers Item ************/}
                
                <div className="flex sm:gap-1 lg:gap-5 mt-8 mr-4 lg:mr-24 lg:mt-16 "  data-aos='zoom-in' >
                    {
                    [1,2,3,4].map((_,indexElement)=>{
                        return(
                                    <OffersItem
                                        icon={offersItems[indexElement+index].icon}
                                        offers={offersItems[indexElement+index].Offers}
                                        explain={offersItems[indexElement+index].explain}
                                    />
                        )
                    })
                    
                    }
                </div>

                <div className="w-full flex justify-between sm:gap-1 lg:gap-5 mt-8 mr-4 lg:mr-24 lg:mt-16 "  data-aos='fade-right'>
                    {employeesArray.map((employee)=>{
                        return(
                            <div className="size-1/3 flex flex-col gap-3 sm:gap-6 lg:gap8">
                                <div className="w-10/12 bg-slate-300 flex justify-center size-20 sm:size-44 md:size-64 xl:size-80">
                                    <img className="pt-4 rounded" src={employee.image}></img>
                                </div>

                                <div className="space-y-1 lg:space-y-2">
                                    <strong className="font-Roboto text-small sm:text-sm lg:text-3xl">{employee.name}</strong>
                                    <p className="text-xSmall sm:text-xs lg:text-sm">{employee.department}</p>
                                    <div className='flex flex-row justify-between gap-2 w-1/5 text-small lg:text-md xl:text-xl'>
                                        <FontAwesomeIcon  icon={faFacebook}/>
                                        <FontAwesomeIcon icon={faTwitter}/>
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        
                    </div>
                </div>
            </div>

            <Services/>
            <Footer/>

        </div>
        

    )

}

export default About;