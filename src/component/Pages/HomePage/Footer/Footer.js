import Qrcode from '../../../../assests/images/Qrcode.png';
import googlePlay from '../../../../assests/images/googlePlay.png';
import appstore from '../../../../assests/images/appstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faSignalMessenger, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const Footer=(props)=>{
    return(
        <div className='grid bg-black text-white justify-between  sm:gap-20'>
            <div className='mt-8 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16 grid grid-flow-col gap-6 sm:gap-12 md:gap-15 xl:gap-24 justify-between'>    
                <div className='space-y-4'>
                    <strong className='text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl'>Exclusive</strong>
                    <p className='custum_p'>Subscribe</p>
                    <p className='custum_p'>Get 10% off your first order</p>

                    <div className="hidden md:inline-block bg-black pr-1  border-2 border-white">
                        <input  className="bg-black p-2  focus:outline-none " 
                                type="text" 
                                placeholder="Enter your email"
                        />
                        <button ><FontAwesomeIcon  className='text-small md:text-sm lg:text-xl'icon={faTelegram} /></button>
                    </div>

                </div>
                
                <div className='space-y-2 sm:space-y-4'>
                    <strong className='text-xSmall sm:text-sm md:text-md lg:text-lg xl:text-xl'>Support</strong>
                    <p className='custum_p'>111 Bijoy sarani, Dhaka,<br></br>  DH 1515, Bangladesh.</p>
                    <p className='custum_p'>exclusive@gmail.com</p>
                    <p className='custum_p'>+88015-88888-9999</p>
                </div>

                <div className='space-y-2 sm:space-y-4'>
                    <strong className='text-xSmall sm:text-sm md:text-md lg:text-lg xl:text-xl'>Account</strong>
                    <p className='custum_p'>My Account</p>
                    <p className='custum_p'>Login / Register</p>
                    <p className='custum_p'>Cart</p>
                    <p className='custum_p'>Wishlist</p>
                    <p className='custum_p'>Shop</p>
                </div>

                <div className='space-y-2 sm:space-y-4'>
                    <strong className='text-xSmall sm:text-sm md:text-md lg:text-lg xl:text-xl'>Quick Link</strong>
                    <p className='custum_p'>Privacy Policy</p>
                    <p className='custum_p'>Terms</p>
                    <p className='custum_p'>FAQ</p>
                    <p className='custum_p'>Contact</p>
                </div>

                <div className='space-y-2 sm:space-y-4 w-min lg:w-fit '>
                    <strong className='text-xSmall sm:text-sm md:text-md lg:text-lg xl:text-xl'>
                        Download <span className='hidden sm:inline' >App</span>
                    </strong>

                    <p className='custum_p text-gray-400'>Save $3 with App New User Only</p>
                    <div className='grid grid-rows-2 grid-cols-2 md:w-fit' >
                        <img className='row-span-2 ' src={Qrcode}></img>
                        <img className='row-span-1 place-self-start ' src={googlePlay}></img>
                        <img className='row-span-1 place-self-start ' src={appstore}></img>
                    </div> 

                    <div className='flex flex-row justify-between text-small lg:text-md xl:text-xl'>
                        <FontAwesomeIcon  icon={faFacebook}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                </div>

            </div>
            <div className='justify-self-center text-gray-500'>
                <p >Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer;