import React, { useState } from 'react'
import MidLogin from "../../Middleware/Login/MidLogin"
import Validation from '../../Middleware/Login/Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../../Assets/Logo.png";
  // import MidLogin from '../Middleware/Login/MidLogin';  
// import Registeration from "./Registeration"
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Forgot from '../../Components/Forgot';

// import MidLogin from '../Middleware/Login/MidLogin';  
const Login = () => {
  const navi = useNavigate();
  const { handlelogin, handlechange, values, frontresp, setfrontresp } = MidLogin(Validation);
  // const [isForgotClick, setIsForgotClick] = useState(false);
  // const [showForgot, setShowForgot] = useState(false);

  const handleForgot = () => {
    navi('/Forgot')
  }



  const getSignUpView = () => {
    navi('/SignUp')
  }



  return (

    <div>
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-full xl:w-5/12 p-6 sm:p-12">
            <div class="mt-12 flex flex-col items-center">
              <a className='mb-6' href="Logo" aria-label="Home">
                <img src={Logo} height="auto" width="160" />
              </a>
              <h2 className="mb-2 text-3xl font-extrabold">Login</h2>
              {/* <div className="px-4 py-10"> */}


              <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-col w-full ">


                <p className="mb-1 font-medium text-gray-500">Email/Mobile<span class="required-field text-red-500">*</span></p>
                <div className="mb-4 ">
                  <div className="focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                    <input type="text" id="email_or_phone" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your email/phone no" name='email_or_phone' onChange={handlechange} value={values.email_or_phone} />
                  </div>
                </div>


                <p className="mb-1 font-medium text-gray-500">Password<span class="required-field text-red-500">*</span></p>
                <div className="mb-4 flex flex-col">
                  <div className="focus-within:border-yellow-500 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                    <input type="password" id="password" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Choose a password (minimum 8 characters)" name='password' onChange={handlechange} value={values.password} />
                  </div>

                </div>

                <div className='flex w-full justify-between'>
                  <link /><p className='font-bold text-purple-500 cursor-pointer' onClick={handleForgot}>Forgot  Password ?</p>

                  <p className='font-bold text-purple-500'>Don't have an Account ?</p>
                </div>



                {/* click={isForgotClick} onChange={handleForgot} onClick={() => setShowForgot(true)} */}


                {/* {isForgotClick && (// Only render the forgot popup when the click on forgot Password
                  <Popup open={showForgot} onClose={() => setShowForgot(false)}>
                    <div>
                      <Forgot />
                    </div>
                  </Popup>
                )} */}





              </div>

              <div className=" gap-5 flex">
                <button className="hover:shadow-yellow-500/40 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-300  hover:from-yellow-400 hover:to-yellow-200 px-8 py-3 font-bold text-black transition-all hover:opacity-90 hover:shadow-xl " onClick={handlelogin}>Log In</button>
                <button className="hover:shadow-yellow-500/40 rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-400  hover:from-yellow-300 hover:to-yellow-500 px-8 py-3 font-bold text-black transition-all hover:opacity-90 hover:shadow-xl " onClick={getSignUpView}>Sign Up</button>
              </div>


            </div>
          </div>
          <div class="flex-1 bg-gradient-to-l from-[#FFEFB3] to-[#C3A5FF] text-center hidden lg:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>

    
  )
}

export default Login;






