import React, { useState } from 'react';
import image from '../../Assets/bgimage.png';
import Signup from '../../Middleware/Signup/Signup';
import Validation from '../../Middleware/Signup/Validation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import { IoIosLock } from "react-icons/io";
import Logo from "../../Assets/Logo.png";
import Popup from 'reactjs-popup';
import Otp_Model from '../../Components/Otp_Model';
import Terms1 from '../../Components/Terms1';
import { useNavigate } from 'react-router-dom';

const Registeration = () => {
    const [ShowModel, setShowModal] = useState(false)
    // const [ShowTerms, setShowTerms] = useState(false)
    const [otpModelOpen, setOtpModelOpen] = useState(false)
    const [showTermsPopup, setShowTermsPopup] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const { handlechange, handlesubmit, errorMessage, formError, values, frontresp, setfrontresp, password, setPassword } = Signup(Validation);
    const [getLogInOpen, setgetLogInOpen] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false);
    // const [password, setPassword] = useState('');
    const navigation = useNavigate();


    const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(e.target.checked);
        setShowTermsPopup(e.target.checked); // Show the popup only when the checkbox is checked
    };


    const getLogInView = () => {
        navigation('/Login')
    }


    

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    

    <style>

    </style>
    return (

        <div>
            <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 ">
                        <div class="mt-0 flex flex-col items-center">
                            <a className='mb-6' href="Logo" aria-label="Home">
                                <img src={Logo} height="auto" width="160" />
                            </a>
                            <h2 className="mb-2 text-3xl font-extrabold">Sign Up</h2>
                            <div className="px-4 py-8">
                                <p className="mb-1 font-medium text-gray-500">Looking for?</p>
                                <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
                                    <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                                        <input type="radio" name="usertype" value="seller" id="seller" checked={values.usertype === 'seller'} onChange={handlechange} className="peer hidden" />
                                        <label className="peer-checked:border-yellow-500 peer-checked:bg-yellow-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="seller"></label>
                                        <div className="peer-checked:border-transparent peer-checked:bg-yellow-500 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-yellow-500 ring-offset-2"></div>
                                        <span className="pointer-events-none z-10">Seller</span>
                                    </div>
                                    <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                                        <input className="peer hidden" type="radio" name="usertype" value="buyer" id="buyer" checked={values.usertype === 'buyer'} onChange={handlechange} />
                                        <label className="peer-checked:border-yellow-500 peer-checked:bg-yellow-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="buyer"></label>
                                        <div className="peer-checked:border-transparent peer-checked:bg-yellow-500 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-yellow-500 ring-offset-2"></div>
                                        <span className="pointer-events-none z-10">Buyer</span>
                                    </div>
                                </div>

                                <p className="mb-1 font-medium text-gray-500">FullName<span class="required-field text-red-500">*</span></p>
                                <div className="mb-4 flex flex-col">
                                    <div className="focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                        <input type="text" name='fullname' id="fullname" className={`w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none ${formError && !values.fullname ? 'input-error' : ''}`} placeholder="Enter your fullname" onChange={handlechange} value={values.fullname} />
                                    </div>
                                </div>


                                <p className="mb-1 font-medium text-gray-500">Mobile<span class="required-field text-red-500">*</span></p>
                                <div className="mb-4 flex flex-col">
                                    <div className="focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                        <input type="number" name="mobile" id="mobile" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder='Enter Mobile number' onChange={handlechange} value={values.mobile} />
                                    </div>
                                </div>



                                <p className="mb-1 font-medium text-gray-500">Email<span class="required-field text-red-500">*</span></p>
                                <div className="mb-4 flex flex-col">
                                    <div className="focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                        <input type="email" id="email" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" name='email' onChange={handlechange} value={values.email} />
                                    </div>
                                </div>




                                <p className="mb-1 font-medium text-gray-500">Password<span class="required-field text-red-500">*</span></p>
                                <div className="mb-4 flex flex-col">
                                    <div className="focus-within:border-yellow-500 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                    <button class="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto mt-2" onClick={togglePasswordVisibility}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <input type={passwordVisible ? 'text' : 'password'} id="password" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Choose a password (minimum 8 characters)" onChange={handlechange} name='password' value={values.password} />
                                      
                                    </div>
                                    {errorMessage && <span className='text-red-500 font-medium  text-xs'>{errorMessage}</span>}


                                    {ShowModel && (
                                        <Popup trigger={<div className="App flex flex-col mt-1 items-center justify-center">
                                            <Otp_Model />
                                        </div>} />
                                    )}



                                </div>




                                <div className='w-full flex flex-row items-center justify-between'>


                                    <p className="font-bold font-serif mt-3">
                                        <input type="checkbox" className="mr-2" checked={isCheckboxChecked} onChange={handleCheckboxChange} /> I agree with the{' '}
                                        <span className="font-bold text-purple-500">
                                            <button
                                                className="font-bold text-purple-500 no-underline dark:text-purple-500 hover:no-underline"
                                                onClick={() => setShowTermsPopup(true)} // This line is now redundant
                                            >
                                                terms and conditions
                                            </button>


                                        </span>
                                    </p>
                                    <p className='font-bold font-serif text-purple-500 mt-3'>Already User ?</p>
                                </div>

                                {isCheckboxChecked && ( // Only render the Terms popup when the checkbox is checked
                                    <Popup open={showTermsPopup} onClose={() => setShowTermsPopup(false)}>
                                        <div className="p-8">
                                            <Terms1 setIsCheckboxChecked={setIsCheckboxChecked}/>
                                        </div>
                                    </Popup>
                                )}


                            </div>

                            <div class="flex gap-20">
                                {ShowModel && (
                                    <button className="hover:shadow-yellow-500/40 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 px-8 py-3 font-bold text-black transition-all hover:opacity-90 hover:shadow-lg" onClick={handlesubmit}>Sign Up</button>
                                )}
                                {!otpModelOpen && (
                                    <button className="hover:shadow-gray-500/40 flex rounded-xl bg-black px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg" onClick={() => { setShowModal(true); setOtpModelOpen(true); }}>Verify<span className='ml-3 mt-1'><IoIosLock /></span></button>
                                )}
                                {!getLogInOpen && (
                                    <button className="hover:shadow-yellow-500/40 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 px-8 py-3 font-bold text-black transition-all hover:opacity-90 hover:shadow-lg" onClick={getLogInView}>Login</button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 bg-gradient-to-l from-[#FFEFB3] to-[#C3A5FF] text-center hidden lg:flex">
                        <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>

                        </div>
                    </div>



                </div>
                <ToastContainer />
            </div>

        </div>
    )
}

export default Registeration






