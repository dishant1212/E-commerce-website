import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";

function Footer(){




    return(
        <>
         <footer>
      <div className='h-auto w-full flex  justify-center items-center py-20' >
        <div className='w-[90%] flex space-x-2 flex-col md:flex-row'>
           <div className='space-y-20 w-[90%] md:w-1/3 '>
               <div className='text-4xl font-semibold mt-14'> 
                <p className='text-orange-500 '>Shop</p>
                <p className='text-gray-700'>Swiftly</p>
               </div>
               <div className='text-2xl text-gray-700'>We take the work out of connecting with others so you can accomplish more.</div>
               <select className='h-8 w-full border-[2px] border-gray-500 text-gray-600'>
        <option >English</option>
        <option >Hindi</option>
        <option >Francais</option>
        <option >Espanol</option>
        <option >Deutsch</option>
        <option >Portugues</option>     
               </select>

        <div className="flex text-4xl space-x-4 md:space-x-8 ">
             
        <div><TiSocialTwitter /></div>
        <div><TiSocialFacebook /></div>
        <div><SlSocialInstagram /></div>
        <div><TiSocialLinkedin /></div>
        <div><SlSocialYoutube /></div>
               </div>
               <div className="text-gray-500">
            <p className="hidden md:flex">Copyright ShopSwiftly
 2024</p>
           </div>
           </div>

           


           <div className='w-[90%] md:w-2/3 flex flex-col  md:space-y-20 '>
            <div className="w-full mx:0 my-14 md:mx-14 flex justify-evenly">
                    <div className="space-y-3  text-gray-700 ">
                      <h1 className="text-xl md:text-2xl text-orange-500 font-bold">About</h1>
                      <p>About ShopSwiftly
</p>
                      <p>Contact Sales</p>
                      <p>Newsroom</p>
                      <p>Careers</p>
                      <p>Security</p>
   
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <h1 className="text-xl md:text-2xl text-orange-500 font-bold">Solutions</h1>
                      <p>Customer Success</p>
                      <p>Sales</p>
                      <p>Recruiting</p>
                      <p>Information Technology</p>
                      <p>Marketing</p>
   
                    </div>
                    <div className="space-y-3  text-gray-700">
                      <h1 className="text-xl md:text-2xl text-orange-500 font-bold">Popular Features</h1>
                      <p>Embed ShopSwiftly
</p>
                      <p>Availability</p>
                      <p>Sending Notifications</p>
                      <p>Using ShopSwiftly
 Mobile</p>
                      <p></p>
   
                    </div>
                </div>

                <div className="w-full mx:0 my-4 md:mx-14 flex justify-evenly">
                <div className="space-y-3  text-gray-700">
                      <h1 className="text-xl md:text-2xl text-orange-500 font-bold">Support</h1>
                      <p>Help Center</p>
                      <p>Video Tutorials</p>
                      <p>Cookie settings</p>
                     
   
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <h1 className="text-xl md:text-2xl text-orange-500 font-bold">Add-Ons</h1>
                      <p>Download for Chrome</p>
                      <p>Download for Firefox</p>
                      
   
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <h1 className="text-xl md:text-2xl text-orange-500 font-bold">Developers</h1>
                      <p>Developer Tools</p>
                    
                    </div>

                </div>
                
                <div className="text-[12px] md:text-md  text-gray-500 w-full mx:0 my-4 md:mx-14 flex justify-between md:justify-end   md:items-end ">
                  <p >Privacy / Terms and Conditions</p>
                  <p className="flex md:hidden">Copyright ShopSwiftly
 2024</p>
                </div>
           </div>
       </div>

      
      </div>


  </footer>
 
        </>
    )
}

export default Footer