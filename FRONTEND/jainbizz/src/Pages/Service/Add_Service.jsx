import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Service_Mid from '../../Middleware/Service_Mid/Mid_Service';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Validate from '../../Middleware/Service_Mid/Validation';

const Add_Service = () => {


  const navigate = useNavigate()

  const Pagenavigate =()=> {
      navigate(`/Viewproducts/`);
  }

  const { 
    handlechange, handlesubmit, values,
    selectedState, setSelectedState,
    selectedState2, setSelectedState2,
    selectedState3, setSelectedState3,
    selectedState4, setSelectedState4,
    selectedState5, setSelectedState5,
    selectedState6, setSelectedState6,
    selectedState7, setSelectedState7,
    selectedState8, setSelectedState8,
    selectedState9, setSelectedState9,

    subCategories, setSubCategories,
    subCategories2, setSubCategories2,
    subCategories3, setSubCategories3,
    subCategories4, setSubCategories4,
    subCategories5, setSubCategories5,
    subCategories6, setSubCategories6,
    subCategories7, setSubCategories7,
    subCategories8, setSubCategories8,
    subCategories9, setSubCategories9,
    selectedFile, setSelectedFile,
    


    selectedFile6, setSelectedFile6,
    val, setupValues,



    handlecatergory, handleSubCategoryChange, handleSubCategory3, handleSubCategory4, handleSubCategory5, handleSubCategory6,
    handleSubCategory7, handleSubCategory8, handleSubCategory9, handleFileChange,handlesubmitproducts, frontresp, setfrontresp, handlechangeupdate,
    handleFileChange6
  } = Service_Mid(Validate);


    

  const [datas, setDatas] = useState([]);


  const [currentStep, setCurrentStep] = useState(1);



  // const [categorydata, setcategorydata] = useState({
  //   categories: '',

  // })


  



  const Pages = [
    () => {
      console.log('Page -- 1')
    },
    () => {
      console.log('Page -- 2')
    },
    () => {
      console.log('Page -- 3')
    }
  ]


  const handleNext = () => {
    if (currentStep < Pages.length) {
      Pages[currentStep - 1]();
      setCurrentStep(currentStep + 1);
    }

  };

  const handleBack = () => {
    if (currentStep < Pages.length) {
      Pages[currentStep + 1]();
      setCurrentStep(currentStep - 1);
    }
  }

  useEffect(() => {
    getMainCategories();
  }, []);

  const getMainCategories = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc' });
      setDatas(res.data);
    } catch (err) {
      console.log(err);
    }
  };





  return (
    <div class=''>
      <div class='flex bg-gray-100 '>
        <div class=''>
          <Sidebar />
        </div>
        <div className=''>
          <div class="max-w-full w-[83vw] h-mx-auto sm:px-6 lg:px-8">
            <form>
              {currentStep === 1 &&
                <div className='flex flex-col items-center justify-center w-[70vw]'>
                  <div className="bg-white border-4 rounded-lg shadow w-full max-w-full relative m-10">
                    <div className="flex items-start justify-between p-2 border-b rounded-t">
                      <h1 className="text-xl font-semibold">
                        Add New Services
                      </h1>
                      <div className="top-4 right-4">
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={Pagenavigate}>
                          View All Services
                        </button>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      <h5 className="text-xl font-semibold">
                        General Information
                      </h5>

                      <div className="grid grid-cols-9 gap-6">
                        <div className="col-span-9 sm:col-span-3">
                          <div className="mb-4">
                            <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Main Category</label>
                            <select
                              id="categories"
                              name="categories"
                              className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                              onChange={handlecatergory}
                              // onChange={handleMainCategoryChange}
                              value={selectedState}
                            >
                              <option value="">Select Main Category</option>
                              {datas.map(category => (
                                <option key={category.cate_id} value={category.cate_id}>{category.name}</option>

                              ))}
                            </select>
                          </div>
                        </div>

                        {selectedState && (
                          <div className="col-span-9 sm:col-span-3">
                            <div className="mb-4">
                              <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Depth 2</label>
                              <select
                                id="categories"
                                name="categories"
                                className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"

                                onChange={handleSubCategoryChange}
                                value={selectedState2}
                              >
                                <option value="">Choose any Options</option>
                                {subCategories.map(categories => (
                                  <option key={categories.cate_id} value={categories.cate_id}>{categories.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}
                        {/* ----------------------------------------------------------------PART-3------------------------------------------------------------- */}
                        {selectedState2 && (
                          <div className="col-span-9 sm:col-span-3">
                            <div className="mb-4">
                              <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Depth 3</label>


                              <select
                                id="categories"
                                name="categories"
                                className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"

                                onChange={handleSubCategory3}
                                value={selectedState3}
                              >
                                <option value="">Choose any Options</option>
                                {subCategories2.map(categories => (
                                  <option key={categories.cate_id} value={categories.cate_id}>{categories.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}
                        {/* -------------------------------------------------------------------Part-4------------------------------------------------------------               */}

                        {selectedState3 && (
                          <div className="col-span-9 sm:col-span-3">
                            <div className="mb-4">
                              <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Depth 4</label>
                              <select
                                id="categories"
                                name="categories"
                                className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"

                                onChange={handleSubCategory4}
                                value={selectedState4}
                              >
                                <option value="">Choose any Options</option>
                                {subCategories3.map(categories => (
                                  <option key={categories.cate_id} value={categories.cate_id}>{categories.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}


                        {/* -------------------------------------------------------------------Part-5------------------------------------------------------------               */}

                        {selectedState4 && (
                          <div className="col-span-9 sm:col-span-3">
                            <div className="mb-4">
                              <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Depth 5</label>
                              <select
                                id="categories"
                                name="categories"
                                className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"

                                onChange={handleSubCategory5}
                                value={selectedState5}
                              >
                                <option value="">Choose any Options</option>
                                {subCategories4.map(categories => (
                                  <option key={categories.cate_id} value={categories.cate_id}>{categories.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}


                        {/* -------------------------------------------------------------------Part-6--------------------------------------------------------------------------*/}



                        {selectedState5 && (
                          <div className="col-span-9 sm:col-span-3">
                            <div className="mb-4">
                              <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Depth 6</label>
                              <select
                                id="categories"
                                name="categories"
                                className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"

                                onChange={handleSubCategory6}
                                value={selectedState6}
                              >
                                <option value="">Choose any Options</option>
                                {subCategories5.map(categories => (
                                  <option key={categories.cate_id} value={categories.cate_id}>{categories.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}



                        {/* -------------------------------------------------------------------Part-7--------------------------------------------------------------------------*/}


                        {selectedState6 && (
                          <div className="col-span-9 sm:col-span-3">
                            <div className="mb-4">
                              <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Depth 7</label>
                              <select
                                id="categories"
                                name="categories"
                                className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"

                                onChange={handleSubCategory7}
                                value={selectedState7}
                              >
                                <option value="">Choose any Options</option>
                                {subCategories6.map(categories => (
                                  <option key={categories.cate_id} value={categories.cate_id}>{categories.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}

                        {/* -------------------------------------------------------------------Part-8--------------------------------------------------------------------------*/}


                        {selectedState7 && (
                          <div className="col-span-9 sm:col-span-3">
                            <div className="mb-4">
                              <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Depth 8</label>
                              <select
                                id="categories"
                                name="categories"
                                className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"

                                onChange={handleSubCategory8}
                                value={selectedState8}
                              >
                                <option value="">Choose any Options</option>
                                {subCategories7.map(categories => (
                                  <option key={categories.cate_id} value={categories.cate_id}>{categories.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}

                        {/* -------------------------------------------------------------------Part-9--------------------------------------------------------------------------*/}

                        {selectedState8 && (
                          <div className="col-span-9 sm:col-span-3">
                            <div className="mb-4">
                              <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Depth 9</label>
                              <select
                                id="categories"
                                name="categories"
                                className="border-1 border-black p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"

                                onChange={handleSubCategory9}
                                value={selectedState9}
                              >
                                <option value="">Choose any Options</option>
                                {subCategories8.map(categories => (
                                  <option key={categories.cate_id} value={categories.cate_id}>{categories.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}

                        {/* -------------------------------------------------------------------Part-end--------------------------------------------------------------------------*/}

                      </div>


                      <div class="p-6 border-t border-gray-200 rounded-b">
                        <button class="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleNext}>Add Details </button>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                </div>}
              {/* ------------------------Services*****------------Services****-----------------Services****-------------------Services****-------------------------------            */}

              {currentStep === 2 && <div>


                {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div class='rounded bg-white mt-4'>

                  <div class='grid grid-cols-2 '>
                    <div class=' mr-5'>
                      <h1 class='mb-4 mt-3 ml-11 '>Service Details Page</h1>
                      <div class='flex justify-end mt-[74px]'>
                        <div class='w-[700px]  bg-yellow-100  bg-opacity-50 border-2 rounded-md p-2' >
                          <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">General Details</h2>
                          <div class="col-span-6 sm:col-span-3 mb-2  ">
                            <label for="service_name" class="text-sm font-medium  text-gray-900 block mb-2">Service Name</label>
                            <input type="text" name="service_name" id="service_name" class="shadow-sm  border bg-white  border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none  focus:outline-yellow-500 focus:border-yellow-600 block w-full p-2.5" placeholder="Apple" onChange={handlechange} value={values.service_name} />
                          </div>

                          <div class=" mb-3">
                            <label for="documentation" class="block text-gray-700 font-medium mb-2">Documentation</label>
                            <textarea id="documentation" name="documentation"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="5" onChange={handlechange} value={values.documentation}></textarea>
                          </div>


                          <div class="mb-4">
                            <label for="service_type" class="block text-gray-700 font-medium mb-2">Service Type</label>
                            <select id="service_type" name="service_type"
                              class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.service_type} >
                              <option value="">Select Service Type</option>
                              <option value="Online">Online</option>
                              <option value="Onfield">Onfield</option>
                              <option value="Installation">Installations</option>
                            </select>
                          </div>



                          <div class="mb-3">
                            <label for="target_audience" class="block text-gray-700 font-medium mb-2">Target Audience</label>
                            <input type="text" name="target_audience" id="target_audience" class="shadow-sm  border bg-white  border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none  focus:outline-yellow-500 focus:border-yellow-600 block w-full p-2.5" placeholder="Apple" onChange={handlechange} value={values.target_audience} />

                            
                            {/* <select id="sizes" name="sizes"
                              class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.sizes} >
                              <option value="">Select Target Audience</option>
                              <option value="Large">""</option>
            
                            </select> */}
                          </div>

                        </div>

                      </div>

                      <div class='flex justify-end mt-2'>
                        <div class='bg-yellow-100 bg-opacity-50 rounded w-[700px] h-auto p-2'>
                          <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Service Information</h2>
                          <div class="mb-2 ">
                            <label for="keywords_tags" class="block text-gray-700 font-medium mb-2">Keywords ags</label>
                            <input type="text" id="keywords_tags" name="keywords_tags"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.keywords_tags} />
                          </div>
                          <div class="mb-2 ">
                            <label for="custom_fields" class="block text-gray-700 font-medium mb-2">Custom Fields</label>
                            <textarea id="custom_fields" name="custom_fields"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="3" onChange={handlechange} value={values.custom_fields}></textarea>
                          </div>
                          <div class="mb-2 ">
                            <label for="terms_conditions" class="block text-gray-700 font-medium mb-2">Terms Conditions</label>
                            <input type="text" id="terms_conditions" name="terms_conditions"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.terms_conditions} />
                          </div>
                          <div class="mb-2 ">
                            <label for="payment_opt" class="block text-gray-700 font-medium mb-2">Payment Options</label>
                            <input type="text" id="payment_opt" name="payment_opt"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.payment_opt} />
                          </div>
                          <div class="mb-2 ">
                            <label for="discounts_promo" class="block text-gray-700 font-medium mb-2">Discounts Promo</label>
                            <input type="text" id="discounts_promo" name="discounts_promo"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.discounts_promo} />
                          </div>
                          <div class="mb-2 ">
                            <label for="related_services" class="block text-gray-700 font-medium mb-2">Related Services</label>
                            <input type="text" id="related_services" name="related_services"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.related_services} />
                          </div>
                          <div class="mb-2 ">
                            <label for="service_package" class="block text-gray-700 font-medium mb-2">Service Package</label>
                            <input type="text" id="service_package" name="service_package"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.service_package} />
                          </div>
                        </div>
                      </div>






                    </div>


                    <div class='ml-5 '>


                      <div class="sm:flex sm:justify-end lg:justify-end mb-4 mt-3 mr-11">
                        <div class="rounded-full shadow">
                          <a href=""
                            class="w-full no-underline flex items-center justify-center border border-transparent text-base font-medium rounded-full text-purple-800 hover:text-purple-600 bg-yellow-200 hover:bg-yellow-400 md:py-2 md:text-lg md:px-8">
                            Save Draft
                          </a>
                        </div>
                        <div class=" rounded-full shadow sm:ml-3">
                          <a href=""
                            class="w-full no-underline flex items-center justify-center border border-transparent text-base font-medium rounded-full text-purple-600 hover:text-purple-800 bg-yellow-400 hover:bg-yellow-200 md:py-2 md:text-lg md:px-8">
                            View Main Category
                          </a>
                        </div>
                      </div>



                      <div class='flex mt-[74px] gap-5 justify-center'>
                        <div class="w-[250px] h-[250px] bg-white rounded-lg ring-1 ring-gray-500 ring-opacity-40 flex items-center justify-center mb-3  ">
                          <div class="">
                            {/* <div id="image-preview" className=" bg-white text-center cursor-pointer ">
                              {selectedFile ? (
                                <img src={URL.createObjectURL(selectedFile)} className="h-auto flex justify-center p-2.5 mx-auto" alt="Image preview" />
                              ) : (
                                <div>
                                  <label htmlFor="images" className="cursor-pointer">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload Image or Video</h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6">Choose file size should be less than <b className="text-gray-600">2mb</b></p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"> <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile ? selectedFile.name : ''}</span>
                                  </label>
                                  <label htmlFor="images" >
                                    <input id="images" name='images' type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                  </label>
                                </div>
                              )}
                            </div> */}
                            {/* -------------------- */}

                            <div id="image-preview" className="bg-white text-center cursor-pointer">
                                <label htmlFor="images" className="cursor-pointer">
                                {selectedFile ? (
                                    <img src={URL.createObjectURL(selectedFile)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                  ) : (
                                    <div>
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"><b className="text-gray-600"></b></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"> <b className="text-gray-600"></b> </p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile ? selectedFile.name : ''}</span>
                                    </div>
                                  )}
                                </label>
                                <input id="images" name='images' type="file" className="hidden" accept="image/*" onChange={handleFileChange} />


                              </div>
                          </div>
                        </div>

                        <div class="w-[250px] h-[250px] bg-white rounded-lg ring-1 ring-gray-500 ring-opacity-40 flex items-center justify-center mb-3">
                          <div class="">
                            {/* <div id="image-preview" className=" bg-white text-center cursor-pointer ">
                              {selectedFile6 ? (
                                <img src={URL.createObjectURL(selectedFile6)} className="h-auto flex justify-center p-2.5 mx-auto" alt="Image preview" />
                              ) : (
                                <div>
                                  <label htmlFor="vedio" className="cursor-pointer">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload Video</h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6">Choose file size should be less than <b className="text-gray-600">2mb</b></p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"> <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile6 ? selectedFile6.name : ''}</span>
                                  </label>
                                  <label htmlFor="vedio" >
                                    <input id="vedio" name='vedio' type="file" className="hidden" accept="image/*" onChange={handleFileChange6} />
                                  </label>
                                </div>
                              )}
                            </div> */}

                            <div id="image-preview" className="bg-white text-center cursor-pointer">
                                <label htmlFor="vedio" className="cursor-pointer">
                                  {selectedFile6 ? (
                                    <img src={URL.createObjectURL(selectedFile6)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                  ) : (
                                    <div>
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"><b className="text-gray-600"></b></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"> <b className="text-gray-600"></b> </p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile6 ? selectedFile6.name : ''}</span>
                                    </div>
                                  )}
                                </label>
                                <input id="vedio" name='vedio' type="file" className="hidden" accept="image/*" onChange={handleFileChange6} />


                              </div>
                          </div>
                        </div>
                      </div>

                      <div class='w-[700px] mt-2 bg-yellow-100 bg-opacity-50 border p-2 rounded mb-3'>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Service Details</h2>
                        <div class="grid grid-cols-2 gap-2">
                          <div>
                            <label for="service_package" class="block text-gray-700 dark:text-white mb-1">Service Package</label>
                            <input type="text" id="service_package" name='service_package' class="w-full rounded-lg border  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechange} value={values.price} />
                          </div>
                          <div>
                            <p class='mb-[4px]'>Availibilty</p>
                            <div class="flex ">
                              <div class="w-1/2">
                                <div class="  ">
                                  <label for="service_availability" class="flex bg-white text-gray-700 rounded-md px-3  mr-1 hover:bg-yellow-300 cursor-pointer border dark:bg-gray-700 dark:text-white dark:border-none">

                                    <input type="radio" name="service_availability" value='true' id='service_availability' checked={values.service_availability === 'true'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1] bg-white text-base font-medium " />
                                    <strong class="p-2 ">Yes</strong>

                                  </label>
                                </div>
                              </div>
                              <div class="w-1/2">
                                <div class="">
                                  <label class="flex bg-white text-gray-700 rounded-md px-3 ml-1 hover:bg-yellow-300 cursor-pointer border dark:bg-gray-700 dark:text-white dark:border-none ">

                                    <input type="radio" name="service_availability" value='false' id='service_availability' checked={values.service_availability === 'false'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1] bg-white text-base font-medium " />
                                    <strong class="p-2 ">No</strong>

                                  </label>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class='mt-2'>
                        <div class='bg-yellow-100 bg-opacity-50 rounded w-[700px] h-auto p-2'>
                          <h2 class="text-xl font-semibold text-gray-700 dark:text-white  mb-4">More Information</h2>
                          <div>
                            <label for="service_location" class="block text-gray-700 dark:text-white mb-1">Service Location</label>
                            <input type="text" id="service_location" name='service_location' class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechange} value={values.service_location} />
                          </div>
                          <div class="mb-2 ">
                            <label for="service_provider" class="block text-gray-700 font-medium mb-2">Service Provider</label>
                            <textarea id="service_provider" name="service_provider"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400 " rows="2" onChange={handlechange} value={values.service_provider} ></textarea>
                          </div>

                          <div>
                          <label for="date" class="block text-gray-700 dark:text-white mb-1">Date</label>
                          <input type="date" id="date" name='date' class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechange} value={values.date} />
                        </div>

                          <div class="mb-2 ">
                            <label for="service_cost" class="block text-gray-700 font-medium mb-2">Service Cost</label>
                            <input type="text" id="service_cost" name="service_cost"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 dark:bg-gray-700 dark:text-white" onChange={handlechange} value={values.service_cost} />
                          </div>
                          <div class="mb-2 ">
                            <label for="service_benefits" class="block text-gray-700 font-medium mb-2">Service Benefits</label>
                            <input type="text" id="service_benefits" name="service_benefits"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400" onChange={handlechange} value={values.service_benefits} />
                          </div>
                          <div class="mb-">
                            <label for="service_duration" class="block text-gray-700 font-medium mb-2">Service Duration</label>
                            <input type="text" id="service_duration" name="service_duration"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400" onChange={handlechange} value={values.service_duration} />
                          </div>
                          <div class="mb-">
                            <label for="service_security" class="block text-gray-700 font-medium mb-2">Service Security</label>
                            <input type="text" id="service_security" name="service_security"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400" onChange={handlechange} value={values.service_security} />
                          </div>                          
                          <div class="mb-">
                            <label for="service_custom" class="block text-gray-700 font-medium mb-2">Service Custom</label>
                            <input type="text" id="service_custom" name="service_custom"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400" onChange={handlechange} value={values.service_custom} />
                          </div>
                          <div class="mb-2 ">
                            <label for="custom_fields" class="block text-gray-700 font-medium mb-2">Custom Fields</label>
                            <input type="text" id="custom_fields" name="custom_fields"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.product_options} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div class='max-w-[1500px]  mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
                    <div class="-mx-2 mb-40">
                      <div class="flex justify-end  w-full px-2">
                        <button class="w-40 mb-5 py-2 px-4 mr-5 rounded-full font-bold text-purple-800 hover:text-purple-600 bg-yellow-200 hover:bg-yellow-400 " onClick={handleBack}>Back</button>

                        {/* <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={handleNext}>Next</button> */}

                        <button
                          class="hover:shadow-form w-40  mb-5 mr-5  py-2 px-4 text-center text-base rounded-full font-bold hover:text-purple-800 text-purple-600 hover:bg-yellow-200 bg-yellow-400" onClick={handlesubmit}>
                          Save
                        </button>

                      </div>
                    </div>
                  </div>

                </div>





              </div>

              }

            </form>

          </div>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Add_Service;