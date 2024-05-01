import React, { useState } from 'react'
import Bgimage from "../../Assets/BG_IMG.png";
import Validate from "../../Middleware/BussinessForm_Mid/Validation"
import UserRegMid from '../../Middleware/BussinessForm_Mid/UserRegMid'
import Logo from "../../Assets/Logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SVedio from '../../Assets/Gif (2).mp4';
import ReactPlayer from 'react-player';


const BussinessForm = () => {

    const { handlechange, handlesubmit, values, errorMessage, setErrorMessage, Correctmsg, setCorrectmsg, ErrortmsgFassai, setErrortmsgFassai, ErrorMsgiec, setErrorMsgiec, ErrorMsgIso, setErrorMsgIso, ErrorUdym, setErrorUdym, successVideoPlaying, setSuccessVideoPlaying, handleVideoEnd } = UserRegMid(Validate);
    const [currentStep, setCurrentStep] = useState(1);


    const stepFunctions = [
        () => {

            console.log('Step 1 function');
        },
        () => {

            console.log('Step 2 function');
        },
        () => {

            console.log('Step 3 function');
        },
        () => {

            console.log('Step 4 function');
        },
        () => {

            console.log('Step 5 function');
        },

    ];


    const handleNext = () => {
        if (currentStep < stepFunctions.length) {
            // console.log('stepFunctions')
            stepFunctions[currentStep - 1]();
            setCurrentStep(currentStep + 1);
        }

    };


    const handleBack = () => {
        if (currentStep > 1) {
            // console.log(stepFunctions.length)
            stepFunctions[currentStep - 1]();
            setCurrentStep(currentStep - 1);
        }
    }


    return (
        <div>
            {successVideoPlaying && (
                <ReactPlayer
                    url={SVedio}
                    playing
                    controls={false}
                    onEnded={handleVideoEnd}
                    style={{
                        position: "fixed",
                        display: "contents",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 9999,
                    }}
                />

            )}


            <div className="p-8 pb-56 bg-[#fffff] bg-cover font-mono" style={{ backgroundImage: `url(${Bgimage})`, display: successVideoPlaying ? 'none' : 'block' }}>

                <div className="mx-auto w-full max-w-[600px] bg-transparent" >
                    <a className='mb-6 flex justify-center' href="Logo" aria-label="Home">
                        <img src={Logo} height="auto" width="160" />
                    </a>
                    <form className='bg-red-700 p-5' style={{ backgroundColor: '#F1EAFF' }} >
                        {/* ------------------------PAGE1--------------------- */}
                        {currentStep === 1 && <div>
                            <div class="mb-0 pt-3">
                                <h2 class="mb-0 pb-4">Complete your Business KYC </h2>

                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Business Name
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-5 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">

                                            <input type="text" name="bussiness_name" id="bussiness_name" placeholder="Enter your Business Name"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.bussiness_name} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-4  ">
                                <label for="company_type" class="block text-gray-700 font-medium mb-2">Company Type</label>
                                <select id="company_type" name="company_type"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.company_type}>
                                    <option value="">Select Company Type</option>
                                    <option value="Sole Propiter Ship">Sole Propiter Ship</option>
                                    <option value="Partnership Firm">Partnership Firm</option>
                                    <option value="OPC (One Person Company)">OPC (One Person Company)</option>
                                    <option value="LLP (Limited Liability Partner)">LLP (Limited Liability Partner)</option>
                                    <option value="Private Limited Company">Private Limited Company</option>
                                    <option value="HUF (Hindu Undivided Family)">HUF (Hindu Undivided Family)</option>
                                    <option value="NGO (Non-Governmental Organization)">NGO (Non-Governmental Organization)</option>
                                </select>
                            </div>


                            <div class="mb-4  ">
                                <label for="annual_turnover" class="block text-gray-700 font-medium mb-2">Annual turnover</label>
                                <select id="annual_turnover" name="annual_turnover"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.annual_turnover}>
                                    <option value="">Select Your turnover</option>
                                    <option value="0Lac TO 20 Lacs">0Lac TO 20 Lacs</option>
                                    <option value="20Lacs To 40 Lacs">20Lacs To 40 Lacs</option>
                                    <option value="50Lacs to 1 Crore">50Lacs to 1 Crore</option>
                                    <option value="1Crore To 3 Crore">1Crore To 3 Crore</option>
                                    <option value="3Crore To 5 Crore">3Crore To 5 Crore</option>
                                    <option value="Above 5Crore">Above 5Crore</option>
                                </select>
                            </div>

                            <div class='h-28'>
                                <div class="-mx-3 flex flex-wrap">
                                    <div class="w-full  px-3 sm:w-1/2">
                                        <div class="mb-5 ">
                                            <p>Do You Have GST No.?</p>
                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-yellow-300 cursor-pointer">

                                                <input type="radio" name="gst_check" value='true' id='gst_check' checked={values.gst_check === 'true'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1] bg-white py-3 px-6 text-base font-medium" />
                                                <strong class="p-2 ">Yes</strong>

                                            </label>
                                        </div>
                                    </div>
                                    <div class="w-full px-3 py-4 sm:w-1/2">

                                        <div class="mb-5">
                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-yellow-300 cursor-pointer ">

                                                <input type="radio" name="gst_check" value='false' id='gst_check' checked={values.gst_check === 'false'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1] bg-white py-3 px-6 text-base font-medium" />
                                                <strong class="p-2 ">No</strong>

                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0" id="GST_Nuber_input" style={{ display: values.gst_check === 'true' ? 'block' : 'none' }} >
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Can I have your GST Number ?
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-5 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">

                                            <input type="text" name="gst_no" id="gst_no" placeholder="Enter your GST Number" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.gst_no}
                                            />
                                            {errorMessage && <span className='text-red-500 font-medium text-sm'>{errorMessage}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>}

                        {/* --------------------------------------------------PAGE-2------------------------------------ */}

                        {currentStep === 2 && <div>


                            <div class='h-28'>
                                <div class="-m-2 flex flex-wrap">
                                    <p class='mb-1 ml-2'>Your Company is Certified for ISO ?</p>
                                    <div class="w-full  px-3 sm:w-1/2">
                                        <div class="mb-5 ">

                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-yellow-300 cursor-pointer">

                                                <input type="radio" name="iso_check" value="true" id="iso_check" checked={values.iso_check === 'true'} onChange={handlechange} />
                                                <strong class="p-2 ">Yes</strong>

                                            </label>
                                        </div>
                                    </div>
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">

                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-yellow-300 cursor-pointer ">

                                                <input type="radio" name="iso_check" value="No" id="iso_check" checked={values.iso_check === 'No'} onChange={handlechange} />
                                                <strong class="pl-2 my-2 ">No</strong>

                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mt-5 pt-0" id="iso_certificate_input" style={{ display: values.iso_check === 'true' ? 'block' : 'none' }}>
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Can I have your  ISO Certificate No. ?
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-0 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">
                                            <input
                                                type="text"
                                                name="iso_no"
                                                id="iso_no"
                                                placeholder="Enter your Certificate Number"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                onChange={handlechange}
                                                value={values.iso_no}
                                            />
                                            {ErrorMsgIso && <span className='text-red-500 font-medium text-sm'>{ErrorMsgIso}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div class='h-28'>
                                <div class="-m-2 flex flex-wrap">
                                    <p class='mb-1 ml-2'>Do you have FSSAI Number ?</p>
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5"> */}

                            <div class=''>
                                <div class="-m-2 flex flex-wrap">
                                    <p class='mb-1 ml-2 pr-5'>Do you have FSSAI Number ?</p>
                                    <div class="w-full  px-3 sm:w-1/2">
                                        <div class=" ">

                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-yellow-300 cursor-pointer">

                                                <input type="radio" name="fssai_check" value="true" id="fssai_check" checked={values.fssai_check === 'true'} onChange={handlechange} />
                                                <strong class="p-2 ">Yes</strong>

                                            </label>
                                        </div>
                                    </div>


                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5 ">

                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-yellow-300 cursor-pointer">

                                                <input type="radio" name="fssai_check" value="false" id="fssai_check" checked={values.fssai_check === 'false'} onChange={handlechange} />
                                                <strong class="pl-2 my-2">No</strong>

                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0" id="fssai_number_input" style={{ display: values.fssai_check === 'true' ? 'block' : 'none' }}>
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Can i have your FSSAI Number ?
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-0 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                            <input type="text"
                                                name="fssai_no"
                                                id="fssai_no"
                                                placeholder="Enter your FSSAI Number"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                onChange={handlechange}
                                                value={values.fssai_no}
                                            />
                                            {ErrortmsgFassai && <span className='text-red-500 font-medium text-sm'>{ErrortmsgFassai}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div class='h-28'>
                                <div class="-mx-4 py-3 flex flex-wrap">
                                    <div class="w-full px-3  sm:w-1/2">
                                        <div class="mb-5">
                                            <p>Do you have IEC Number ?</p>
                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-yellow-300 cursor-pointer ">
                                                <input type="radio" name="iec_check" value="true" id="iec_check" checked={values.iec_check === 'true'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1]" />
                                                <strong class="pl-2 my-2">Yes</strong>

                                            </label>
                                        </div>
                                    </div>
                                    <div class="w-full px-3 py-4 sm:w-1/2">
                                        <div class="mb-5">

                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-yellow-300 cursor-pointer ">

                                                <input type="radio" name="iec_check" value="false" id="iec_check" checked={values.iec_check === 'false'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1]" />
                                                <strong class="pl-2 my-2">No</strong>
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3 pt-0" id="iec_number_input" style={{ display: values.iec_check === 'true' ? 'block' : 'none' }}>
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Can i have your IEC Number ?
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-0 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                            <input type="text"
                                                name="iec_no"
                                                id="iec_no"
                                                placeholder="Enter your IEC Number"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                onChange={handlechange}
                                                value={values.iec_no} />
                                            {ErrorMsgiec && <span className='text-red-500 font-medium text-sm'>{ErrorMsgiec}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class='h-28'>
                                <div class="-mx-4 py-3 flex flex-wrap">
                                    <div class="w-full  px-3 sm:w-1/2">
                                        <div class="mb-5 ">
                                            <p>Do You Udyog Adhar ?</p>
                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-yellow-300 cursor-pointer">
                                                <input type="radio" name="udyog_adhar_check" value='true' id='udyog_adhar_check' checked={values.udyog_adhar_check === 'true'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1]" />
                                                <strong class="pl-2 my-2">Yes</strong>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="w-full px-3 py-4 sm:w-1/2">

                                        <div class="mb-5">
                                            <label class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-yellow-300 cursor-pointer ">

                                                <input type="radio" name="udyog_adhar_check" value='false' id='udyog_adhar_check' checked={values.udyog_adhar_check === 'false'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1]" />
                                                <strong class="pl-2 my-2">No</strong>

                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0" id="udyog_adhar_input" style={{ display: values.udyog_adhar_check === 'true' ? 'block' : 'none' }} >
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Can I have your udyog Adhar ?
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-0 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                            <input type="text"
                                                name="udyog_adhar_no"
                                                id="udyog_adhar_no"
                                                placeholder="Enter your GST Number"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                onChange={handlechange}
                                                value={values.udyog_adhar_no} />
                                            {ErrorUdym && <span className='text-red-500 font-medium text-sm'>{ErrorUdym}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>}

                        {currentStep === 3 && <div>



                            <h3>Business Register Address</h3>
                            <div class="mb-0 pt-3 ">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Address  Line 1
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">

                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">
                                            <input type="text" name="address1" id="address1" placeholder="Address  Line 1"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.address1} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Address  Line 2
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">

                                            <input type="text" name="address2" id="address2" placeholder="Address  Line 2"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.address2} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Country
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">


                                            <input type="text" name="country" id="country" placeholder="Country"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.country} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    State
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">


                                            <input type="text" name="state" id="state" placeholder="State"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.state} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    City
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">
                                            <input type="text" name="city" id="city" placeholder="Enter City Here"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.city} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-3 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Pin Code
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-5 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">
                                            <input type="text" name="pincode" id="pincode" placeholder="Pin Code"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.pincode} />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>}

                        {/* ----------------------------------------------PAGE-4-----------------------------------         */}

                        {currentStep === 4 && <div>

                            <h3>Business Register Address</h3>
                            <div class="mb-0 pt-3 ">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Taluka
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">

                                            <input type="text" name="taluka" id="taluka" placeholder="Taluka"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.taluka} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Village/Town
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">


                                            <input type="text" name="town_village" id="town_village" placeholder="Village/Town"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.town_village} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-3 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Establishment of business in Year
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-5 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">



                                            <input type="date" name="establishment_yrs" id="establishment_yrs" placeholder="YYYY"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.establishment_yrs} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>

                            </div>



                        </div>}


                        {/* --------------------------------------------------------------PAGE-5-------------------------------------  */}

                        {currentStep === 5 && <div>
                            <h3>Just few Steps More ...</h3>
                            <div class="mb-0 pt-3">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Business Email
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">


                                            <input type="text" name="business_email" id="areabusiness_email" placeholder="Business Email"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.business_email} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Business Contact Number
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">


                                            <input type="number" name="business_contact" id="business_contact" placeholder="Business Contact Number"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.business_contact} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-0 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Business Number (WhatsApp)
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">

                                            <input type="number" name="business_whatsapp" id="business_whatsapp" placeholder="Optional"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.business_whatsapp} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-0 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Aternate Business Email Id
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-2 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">
                                            <input type="text" name="alternate_email" id="alternate_email" placeholder="Optional"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.alternate_email} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-3 pt-0">
                                <label class="mb-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Alternate Contact No.
                                </label>
                                <div class="-mx-3 flex flex-col">
                                    <div class="w-full px-3 sm:w-full">
                                        <div class="mb-5 focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 ">

                                            <input type="text" name="alternate_contact" id="alternate_contact" placeholder="Optional"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={handlechange} value={values.alternate_contact} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <button
                                    class="hover:shadow-form w-full mb-5 rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={handlesubmit}>
                                    Save
                                </button>
                            </div>

                        </div>}

                        <div className="flex justify-between mt-10">


                            <button
                                type="button"
                                className="hover:shadow-form w-[240px] p-1 rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                onClick={handleBack}
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                className="hover:shadow-form w-[240px] rounded-md bg-yellow-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                onClick={handleNext}
                                style={{ marginRight: '10px' }} // Add margin-right to create a gap
                            >
                                Next
                            </button>
                        </div>







                    </form>
                </div>
                <ToastContainer />


            </div>
        </div>
    )
}

export default BussinessForm

































