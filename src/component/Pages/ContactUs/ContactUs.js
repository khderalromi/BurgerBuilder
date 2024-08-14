
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons"

const ContactUs=(props)=>{
    const location=useLocation();
    const CurrentUser=useSelector(state=>state.users.currentUser)
    return(
        <div>
            <Header/>
            <div className="mt-8 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16" >
                <p>Home {location.pathname}</p>
            </div>

            <div className="flex gap-8 mt-8 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16  mb-8 lg:mb-16">
                <div className="w-1/3 flex flex-col gap-3 lg:gap-8" >
                    {/***div for call to us */}
                    <div className="space-y-2 lg:space-y-3">
                        <div className="flex items-center gap-1 lg:gap-2">
                            <FontAwesomeIcon className="bg-red-500 p-1 lg:p-2 text-xs lg:text-base  rounded-full" icon={faPhone}/>
                            <strong className=" text-small sm:text-sm lg:text-3xl">Call To Us</strong>
                        </div>
                        <div className=" space-y-2 lg:space-y-3">
                            <p className="textSize">We are available 24/7, 7 days a week.</p>
                            <p className="textSize">Phone: +8801611112222</p>
                        </div>
                    </div>

                    {/***div for write to us */}
                    <div className=" space-y-2 lg:space-y-3  border-t-2">
                        <div className="flex items-center gap-1 lg:gap-2 mt-3 lg:mt-5">
                            <FontAwesomeIcon className="bg-red-500 p-1 lg:p-2 text-xs lg:text-base rounded-full" icon={faMessage}/>
                            <strong className=" text-small sm:text-sm lg:text-3xl">Write To US</strong>
                        </div>
                        <div className=" space-y-2 lg:space-y-3">
                            <p className="textSize">Fill out our form and we will contact<br></br> you within 24 hours.</p>
                            <p className="textSize">Emails: customer@exclusive.com</p>
                            <p className="textSize">Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>

                {/***div for text areas ****/}
                <div className="w-2/3 grid grid-cols-3 grid-rows-4 items-end gap-2 lg:gap-3 border-2 p-1 lg:p-4">
                    
                        <input 
                            type="text" 
                            placeholder="Your Name *"
                            value={CurrentUser !=undefined && CurrentUser['name']}
                            className="bg-slate-300 textSize p-0.5 rounded " 
                        >

                        </input>

                        <input 
                            type="text" 
                            placeholder="Your Email *" 
                            value={CurrentUser !=undefined && CurrentUser['email']}
                            className="bg-slate-300 textSize p-0.5 rounded"
                        >

                        </input>

                        <input
                            type="text"
                            placeholder="Your Phone *" 
                            className="bg-slate-300 textSize p-0.5 rounded"
                        >
                                    
                        </input>


                    
                    <textarea 
                            rows={6} 
                            placeholder="Your Massage"
                            className="col-span-3 row-span-2 bg-slate-300 rounded"
                    >
                    </textarea>

                    <button className="btn row-span-1 col-span-2 md:col-span-1 col-start-2 md:col-start-3 h-3/5 rounded">Send Massage</button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs;