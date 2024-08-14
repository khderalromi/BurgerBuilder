import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPhoto from "./mainPhoto/mainPhoto";
import MainNavbar from "./mainNavbar/mainNavbar";


const Main=(props)=>{
    useEffect(() => {
        AOS.init({
          once: true,
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(
        <div className="ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 flex sm:justify-center md:justify-start">
            <div className=" border-r-2 text-small w-4/12 sm:w-2/12 md:text-sm lg:text-lg" data-aos='slide-left'>
                <MainNavbar/>
            </div>
            <div className="text-small w-8/12  md:w-10/12 "  data-aos='slide-right'>
                <MainPhoto/>
            </div>
        </div>
    )
}

export default Main