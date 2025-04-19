import Link from "next/link";
import '@/app/login/page.css';
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '400', variable: '--font-inter' });
   const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400', variable: '--font-roboto-mono' });
   
   export { inter, robotoMono };


export default function Login(){

    return(
        <>
        <div className="w-full border border-gray-500 h-13 text-center ">
         <img src="/images/igp.png" alt="" className="w-20 absolute top-1/17 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  />
         <img src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg" alt="" />
        </div>

        <div className=" p-12 absolute top-97 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-130 h-auto ">
         <div>
         <h1 className="text-2xl inter">Sign in</h1>
         <p>Don't have an account?  <span  className="text-blue-600 relative left-2.5 font-bold"> <Link href=''>Sign up</Link></span></p>
         </div>
         
         <div className="mt-10">
            <label htmlFor="" className="text-gray-600">Email ID or Mobile Number <sup>*</sup></label> <br />
            <input type="text" placeholder="Enter Email or Mobile Number" className="shadow-lg p-3 border border-gray-300 w-full" />
<br />
<br />
            <label htmlFor="" className="text-gray-600"  >Password <sup>*</sup></label> <br />
            <input type="text" placeholder="Enter Password"   className="shadow-lg p-3 border border-gray-300 w-full" />
         </div>
        
         <div className="btn"><button >SIGN IN</button></div>
         <div className="relative flex justify-end top-7">
         <p className="text-gray-500">Forgot Password ?</p>
         </div>
<br /><br />
         <div className="flex justify-center items-center gap-3">
            <div className="w-41 h-1 bg-gray-300"></div>
            <p className="text-2" >or Signin</p>
            <div className="w-41 h-1 bg-gray-300"></div>
         </div>

         <div className="flex gap-10 justify-center items-center">
            <div className="w-20 h-8 border border-black flex justify-center items-center "> github</div>  
            <div className="w-20 h-8 border border-black flex justify-center items-center  ">Google</div>
            <div className="w-20 h-8 border border-black flex justify-center items-center  " >Facebook</div>
         </div>
        </div>
        </>
    )
}