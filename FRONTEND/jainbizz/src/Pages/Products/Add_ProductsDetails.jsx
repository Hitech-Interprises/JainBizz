import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Validate from '../../Middleware/Product_Mid/Validation';
import Product_Mid from '../../Middleware/Product_Mid/Product_Mid';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Add_ProductsDetails = () => {


  const navigate = useNavigate()

  const Pagenavigate = () => {
    navigate(`/Viewproducts/`);
  }

  const { handlechange, handlesubmit, values,
    selectedState, setSelectedState,
    selectedState2, setSelectedState2,
    selectedState3, setSelectedState3,
    selectedState4, setSelectedState4,
    selectedState5, setSelectedState5,
    selectedState6, setSelectedState6,
    selectedState7, setSelectedState7,
    selectedState8, setSelectedState8,
    selectedState9, setSelectedState9,
    // selectedState10, setSelectedState10,

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



    // -----------Images
    selectedFile1, setSelectedFile1,
    selectedFile2, setSelectedFile2,
    selectedFile3, setSelectedFile3,
    selectedFile4, setSelectedFile4,
    selectedFile5, setSelectedFile5,

    // ----------Varients
    selectedFile6, setSelectedFile6,
    selectedFile7, setSelectedFile7,
    selectedFile8, setSelectedFile8,
    selectedFile9, setSelectedFile9,
    selectedFile10, setSelectedFile10,


    handlecatergory, handleSubCategoryChange, handleSubCategory3, handleSubCategory4, handleSubCategory5, handleSubCategory6,
    handleSubCategory7, handleSubCategory8, handleSubCategory9, handleFileChange, handleFileChange1, handleFileChange2, handleFileChange3, handleFileChange4, handleFileChange5, handleFileChange6, handleFileChange7, handleFileChange8, handleFileChange9, handleFileChange10,
    handlesubmitproducts, frontresp, setfrontresp } = Product_Mid(Validate);




  const [datas, setDatas] = useState([]);


  const [currentStep, setCurrentStep] = useState(1);



  const [categorydata, setcategorydata] = useState({
    categories: '',

  })






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

  const handleCancel = () => {
    setSelectedFile1(null); // Clear the selected file
  };

  useEffect(() => {
    getMainCategories();
  }, []);

  const getMainCategories = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874' });
      setDatas(res.data);
    } catch (err) {
      console.log(err);
    }
  };





  return (
    <div class=''>
      <div class='flex bg-repeat-y bg-gray-200 '>
        <div class=' bg-gray-50 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 fixed'>
          <Sidebar />
        </div>
        {/* <div class=' bg-gray-50  max-w-full '>

      </div> */}
        <div className='ml-64'>
          <div class="max-w-full w-[85vw] h-mx-auto sm:px-6 lg:px-8">
            <form>
              {currentStep === 1 &&
                <div class="bg-gray-200 h-screen">
                  <div className='flex flex-col items-center justify-center w-[70vw]'>
                    <div className="bg-white border-4 rounded-lg shadow w-full max-w-full relative m-10">
                      <div className="flex items-start justify-between p-2 border-b rounded-t">
                        <h1 className="text-xl font-semibold font-mono">
                          Add New Product
                        </h1>
                        <div className="top-4 right-4">
                          <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={Pagenavigate}>
                            View All Products
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
                                <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Sub Category1</label>
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
                                <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Sub Category2</label>


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
                                <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Sub Category3</label>
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
                                <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Sub Category4</label>
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
                                <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Sub Category5</label>
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
                                <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Sub Category6</label>
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
                                <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Sub Category7</label>
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
                                <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">Sub Category8</label>
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
                  </div>
                </div>}
              {/* ------------------------PRODUCTS*****------------PRODUCTS****-----------------PRODUCTS****-------------------PRODUCTS****-------------------------------            */}

              {currentStep === 2 && <div>


                {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div class='rounded bg-white mt-4'>

                  <div class='grid grid-cols-2  '>
                    <div class=' mr-5'>
                      <h1 class='mb-4 mt-3 ml-11 '>Products Details Page</h1>
                      <div class='flex justify-end mt-[74px]'>
                        <div class='w-[700px]  bg-yellow-100  bg-opacity-50 border-2 rounded-md p-2' >
                          <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">General Details</h2>
                          <div class="col-span-6 sm:col-span-3 mb-2  ">
                            <label for="product_name" class="text-sm font-medium  text-gray-900 block mb-2">Product Name</label>
                            <input type="text" name="product_name" id="product_name" class="shadow-sm  border bg-white  border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none  focus:outline-yellow-500 focus:border-yellow-600 block w-full p-2.5" placeholder="Apple" onChange={handlechange} value={values.product_name} />
                          </div>

                          <div class=" mb-3">
                            <label for="description" class="block text-gray-700 font-medium mb-2">Description</label>
                            <textarea id="description" name="description"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="5"></textarea>
                          </div>


                          <div class="mb-4">
                            <label for="measurement_units" class="block text-gray-700 font-medium mb-2">Measurement Units</label>
                            <select id="measurement_units" name="measurement_units"
                              class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.measurement_units} >
                              <option value="">Select Measurement Units</option>
                              <option value="kg">Kg</option>
                              <option value="cm">cm</option>
                              <option value="liter">Liter</option>
                            </select>
                          </div>



                          <div class="mb-3">
                            <label for="sizes" class="block text-gray-700 font-medium mb-2">Size </label>
                            <select id="sizes" name="sizes"
                              class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.sizes} >
                              <option value="">Select Size Units</option>
                              <option value="Large">Large</option>
                              {/* <option value="gram">cm</option>
                      <option value="liter">Liter</option> */}
                            </select>
                          </div>

                        </div>

                      </div>

                      <div class='flex justify-end mt-2'>
                        <div class='bg-yellow-100 bg-opacity-50 rounded w-[700px] h-auto p-2'>
                          <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Product Information</h2>
                          <div class="mb-2 ">
                            <label for="brand" class="block text-gray-700 font-medium mb-2">brand</label>
                            <input type="text" id="brand" name="brand"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.brand} />
                          </div>
                          <div class="mb-2 ">
                            <label for="features" class="block text-gray-700 font-medium mb-2">features</label>
                            <input type="text" id="features" name="features"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.features} />
                          </div>
                          <div class="mb-2 ">
                            <label for="warranty_information" class="block text-gray-700 font-medium mb-2">warranty_information</label>
                            <input type="text" id="warranty_information" name="warranty_information"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.warranty_information} />
                          </div>
                          <div class="mb-2 ">
                            <label for="specifications" class="block text-gray-700 font-medium mb-2">specifications</label>
                            <input type="text" id="specifications" name="specifications"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.specifications} />
                          </div>
                          <div class="mb-2 ">
                            <label for="product_link" class="block text-gray-700 font-medium mb-2">Product Link</label>
                            <input type="text" id="product_link" name="product_link"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.product_link} />
                          </div>
                          <div class="mb-2 ">
                            <label for="others_deatils" class="block text-gray-700 font-medium mb-2">Others Details</label>
                            <input type="text" id="others_deatils" name="others_deatils"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.others_deatils} />
                          </div>
                        </div>
                      </div>


                      <div class='flex justify-end mt-2'>
                        <div class='bg-yellow-100 bg-opacity-50 rounded w-[700px] h-auto p-2'>
                          <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Related</h2>

                          <div class="mb-2 ">
                            <label for="related_products" class="block text-gray-700 font-medium mb-2">Related Products</label>
                            <input type="text" id="related_products" name="related_products"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.related_products} />
                          </div>
                          <div class="mb-2 ">
                            <label for="product_options" class="block text-gray-700 font-medium mb-2">Product Options</label>
                            <input type="text" id="product_options" name="product_options"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.product_options} />
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



                      <div class='grid grid-cols-2 mt-[74px] '>
                        <div className="w-[400px] h-[424px] bg-white rounded-lg ring-1 ring-gray-500 ring-opacity-40 flex items-center justify-center mb-3">
                          <div>
                            <div id="image-preview" className="bg-white text-center cursor-pointer">
                              <label htmlFor="images1" className="cursor-pointer">
                                {selectedFile1 ? (
                                  <img src={URL.createObjectURL(selectedFile1)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile1 ? selectedFile1.name : ''}</span>
                                  </div>
                                )}
                              </label>
                              <input id="images1" name='images1' type="file" className="hidden" accept="image/*" onChange={handleFileChange1} />
                            </div>
                          </div>
                        </div>


                        <div class=' w-[200px] '>

                          <div class='flex justify-center mb-2'>

                            {/* <div class="w-[100px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                                {selectedFile2 ? (
                                  <img src={URL.createObjectURL(selectedFile2)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <label htmlFor="images2" className="cursor-pointer">
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile2 ? selectedFile2.name : ''}</span>
                                    </label>
                                    <label htmlFor="images2" >
                                      <input id="images2" name='images2' type="file" className="hidden" accept="image/*" onChange={handleFileChange2} />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div> */}

                            <div class="w-[100px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div>
                                <div id="image-preview" className="bg-white text-center cursor-pointer">
                                  <label htmlFor="images2" className="cursor-pointer">
                                    {selectedFile2 ? (
                                      <img src={URL.createObjectURL(selectedFile2)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                    ) : (
                                      <div>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                        <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                                        <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile2 ? selectedFile2.name : ''}</span>
                                      </div>
                                    )}
                                  </label>
                                  <input id="images2" name='images2' type="file" className="hidden" accept="image/*" onChange={handleFileChange2} />
                                </div>
                              </div>
                            </div>



                          </div>
                          <div class='flex items-center justify-center gap-5 mb-2'>

                            {/* <div class="w-[100px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                                {selectedFile3 ? (
                                  <img src={URL.createObjectURL(selectedFile3)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <label htmlFor="images3" className="cursor-pointer">
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile3 ? selectedFile3.name : ''}</span>
                                    </label>
                                    <label htmlFor="images3" >
                                      <input id="images3" name='images3' type="file" className="hidden" accept="image/*" onChange={handleFileChange3} />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div> */}

                            <div class="w-[100px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div>
                                <div id="image-preview" className="bg-white text-center cursor-pointer">
                                  <label htmlFor="images3" className="cursor-pointer">
                                    {selectedFile3 ? (
                                      <img src={URL.createObjectURL(selectedFile3)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                    ) : (
                                      <div>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                        <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                                        <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile3 ? selectedFile3.name : ''}</span>
                                      </div>
                                    )}
                                  </label>
                                  <input id="images3" name='images3' type="file" className="hidden" accept="image/*" onChange={handleFileChange3} />

                                </div>
                              </div>
                            </div>

                          </div>
                          <div class='flex items-center justify-center mb-2'>

                            {/* <div class="w-[100px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                                {selectedFile4 ? (
                                  <img src={URL.createObjectURL(selectedFile4)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <label htmlFor="images4" className="cursor-pointer">
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile4 ? selectedFile4.name : ''}</span>
                                    </label>
                                    <label htmlFor="images4" >
                                      <input id="images4" name='images4' type="file" className="hidden" accept="image/*" onChange={handleFileChange4} />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div> */}

                            <div class="w-[100px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div>
                                <div id="image-preview" className="bg-white text-center cursor-pointer">
                                  <label htmlFor="images4" className="cursor-pointer">
                                    {selectedFile4 ? (
                                      <img src={URL.createObjectURL(selectedFile4)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                    ) : (
                                      <div>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                        <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                                        <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile4 ? selectedFile4.name : ''}</span>
                                      </div>
                                    )}
                                  </label>
                                  <input id="images4" name='images4' type="file" className="hidden" accept="image/*" onChange={handleFileChange4} />

                                </div>
                              </div>
                            </div>
                          </div>

                          <div class='flex items-center justify-center '>

                            <div class="w-[100px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div>
                                <div id="image-preview" className="bg-white text-center cursor-pointer">
                                  <label htmlFor="images5" className="cursor-pointer">
                                    {selectedFile5 ? (
                                      <img src={URL.createObjectURL(selectedFile5)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                    ) : (
                                      <div>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                        <p className="font-normal text-sm text-gray-400 md:px-6"><b className="text-gray-600">2mb</b></p>
                                        <p className="font-normal text-sm text-gray-400 md:px-6">image in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile5 ? selectedFile5.name : ''}</span>
                                      </div>
                                    )}
                                  </label>
                                  <input id="images5" name='images5' type="file" className="hidden" accept="image/*" onChange={handleFileChange5} />

                                </div>
                              </div>
                            </div>


                          </div>

                        </div>


                      </div>



                      <div class='w-[700px] mt-2.5 bg-yellow-100 bg-opacity-50 border p-2 rounded mb-[18px] ' >
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Varients</h2>

                        <div class='flex gap-4'>


                          <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div>
                              <div id="image-preview" className="bg-white text-center cursor-pointer">
                                <label htmlFor="variants1" className="cursor-pointer">
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
                                <input id="variants1" name='variants1' type="file" className="hidden" accept="image/*" onChange={handleFileChange6} />


                              </div>
                            </div>
                          </div>



                          
                          {/* <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                              {selectedFile6 ? (
                                <img src={URL.createObjectURL(selectedFile6)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                              ) : (
                                <div>
                                  <label htmlFor="variants1" className="cursor-pointer">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile6 ? selectedFile6.name : ''}</span>
                                  </label>
                                  <label htmlFor="variants1" >
                                    <input id="variants1" name='variants1' type="file" className="hidden" accept="image/*" onChange={handleFileChange6} />
                                  </label>
                                </div>
                              )}
                            </div>
                          </div> */}


                          <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div>
                              <div id="image-preview" className="bg-white text-center cursor-pointer">
                                <label htmlFor="variants2" className="cursor-pointer">
                                  {selectedFile7 ? (
                                    <img src={URL.createObjectURL(selectedFile7)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                  ) : (
                                    <div>
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"><b className="text-gray-600"></b></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"> <b className="text-gray-600"></b> </p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile7 ? selectedFile7.name : ''}</span>
                                    </div>
                                  )}
                                </label>
                                <input id="variants2" name='variants2' type="file" className="hidden" accept="image/*" onChange={handleFileChange7} />


                              </div>
                            </div>
                          </div>



                          {/* <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg  text-center cursor-pointer">
                              {selectedFile8 ? (
                                <img src={URL.createObjectURL(selectedFile8)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                              ) : (
                                <div>
                                  <label htmlFor="variants3" className="cursor-pointer">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile8 ? selectedFile8.name : ''}</span>
                                  </label>
                                  <label htmlFor="variants3" >
                                    <input id="variants3" name='variants3' type="file" className="hidden" accept="image/*" onChange={handleFileChange8} />
                                  </label>
                                </div>
                              )}
                            </div>
                          </div> */}


                          <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div>
                              <div id="image-preview" className="bg-white text-center cursor-pointer">
                                <label htmlFor="variants3" className="cursor-pointer">
                                  {selectedFile8 ? (
                                    <img src={URL.createObjectURL(selectedFile8)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                  ) : (
                                    <div>
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"><b className="text-gray-600"></b></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"> <b className="text-gray-600"></b> </p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile8 ? selectedFile8.name : ''}</span>
                                    </div>
                                  )}
                                </label>
                                <input id="variants3" name='variants3' type="file" className="hidden" accept="image/*" onChange={handleFileChange8} />


                              </div>
                            </div>
                          </div>

                          {/* <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center justify-center row-auto border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer ">
                              {selectedFile9 ? (
                                <img src={URL.createObjectURL(selectedFile9)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                              ) : (
                                <div>
                                  <label htmlFor="variants4" className="cursor-pointer">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile9 ? selectedFile9.name : ''}</span>
                                  </label>
                                  <label htmlFor="variants4" >
                                    <input id="variants4" name='variants4' type="file" className="hidden" accept="image/*" onChange={handleFileChange9} />
                                  </label>
                                </div>
                              )}
                            </div>
                          </div> */}


                          <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div>
                              <div id="image-preview" className="bg-white text-center cursor-pointer">
                                <label htmlFor="variants4" className="cursor-pointer">
                                  {selectedFile9 ? (
                                    <img src={URL.createObjectURL(selectedFile9)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                  ) : (
                                    <div>
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"><b className="text-gray-600"></b></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"> <b className="text-gray-600"></b> </p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile9 ? selectedFile9.name : ''}</span>
                                    </div>
                                  )}
                                </label>
                                <input id="variants4" name='variants4' type="file" className="hidden" accept="image/*" onChange={handleFileChange9} />


                              </div>
                            </div>
                          </div>

                          {/* <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center justify-center row-auto border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                              {selectedFile10 ? (
                                <img src={URL.createObjectURL(selectedFile10)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                              ) : (
                                <div>
                                  <label htmlFor="variants5" className="cursor-pointer">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile10 ? selectedFile10.name : ''}</span>
                                  </label>
                                  <label htmlFor="variants5" >
                                    <input id="variants5" name='variants5' type="file" className="hidden" accept="image/*" onChange={handleFileChange10} />
                                  </label>
                                </div>
                              )}
                            </div>
                          </div> */}


                          <div class="w-[100px] h-[100px] overflow-hidden rounded-lg bg-white flex items-center border dark:bg-gray-700 dark:text-white dark:border-none">
                            <div>
                              <div id="image-preview" className="bg-white text-center cursor-pointer">
                                <label htmlFor="variants5" className="cursor-pointer">
                                  {selectedFile10 ? (
                                    <img src={URL.createObjectURL(selectedFile10)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                  ) : (
                                    <div>
                                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"><b className="text-gray-600"></b></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"> <b className="text-gray-600"></b> </p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile10 ? selectedFile10.name : ''}</span>
                                    </div>
                                  )}
                                </label>
                                <input id="variants5" name='variants5' type="file" className="hidden" accept="image/*" onChange={handleFileChange10} />


                              </div>
                            </div>
                          </div>

                        </div>

                      </div>




                      <div class='w-[700px] mt-2 bg-yellow-100 bg-opacity-50 border p-2 rounded mb-3'>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Pricing And Stock</h2>
                        <div class="grid grid-cols-2 gap-2">
                          <div>
                            <label for="price" class="block text-gray-700 dark:text-white mb-1">Base pricing</label>
                            <input type="text" id="price" name='price' class="w-full rounded-lg border  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechange} value={values.price} />
                          </div>
                          <div>
                            <p class='mb-[4px]'>Availibilty</p>
                            <div class="flex ">
                              <div class="w-1/2">
                                <div class="  ">
                                  <label for="product_availability" class="flex bg-white text-gray-700 rounded-md px-3  mr-1 hover:bg-yellow-300 cursor-pointer border dark:bg-gray-700 dark:text-white dark:border-none">

                                    <input type="radio" name="product_availability" value='true' id='product_availability' checked={values.product_availability === 'true'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1] bg-white text-base font-medium " />
                                    <strong class="p-2 ">Yes</strong>

                                  </label>
                                </div>
                              </div>
                              <div class="w-1/2">
                                <div class="">
                                  <label class="flex bg-white text-gray-700 rounded-md px-3 ml-1 hover:bg-yellow-300 cursor-pointer border dark:bg-gray-700 dark:text-white dark:border-none ">

                                    <input type="radio" name="product_availability" value='false' id='product_availability' checked={values.product_availability === 'false'} onChange={handlechange} class="accent-purple-200 focus-within:accent-[#6A64F1] bg-white text-base font-medium " />
                                    <strong class="p-2 ">No</strong>

                                  </label>

                                </div>
                              </div>
                            </div>


                          </div>
                          <div>
                            <label for="date" class="block text-gray-700 dark:text-white mb-1">Date</label>
                            <input type="date" id="date" name='date' class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechange} value={values.date} />
                          </div>
                          <div>
                            <label for="reviews_ratings" class="block text-gray-700 dark:text-white mb-1">Review and Rating</label>
                            <input type="text" id="reviews_ratings" name='reviews_ratings' class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechange} value={values.reviews_ratings} />
                          </div>
                        </div>
                      </div>

                      <div class='mt-2'>
                        <div class='bg-yellow-100 bg-opacity-50 rounded w-[700px] h-auto p-2'>
                          <h2 class="text-xl font-semibold text-gray-700 dark:text-white  mb-4">More Information</h2>
                          <div class="mb-2 ">
                            <label for="offers" class="block text-gray-700 font-medium mb-2">Offers</label>
                            <textarea id="offers" name="offers"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400 " rows="3" onChange={handlechange} value={values.offers} ></textarea>
                          </div>
                          {/* <div class="mb-2 ">
                      <label for="variants" class="block text-gray-700 font-medium mb-2">Varients</label>
                      <input type="text" id="variants" name="variants"
                        class="border border-gray-400 p-2 w-full rounded-lg   focus:border-blue-400" onChange={handlechange} value={values.variants} />
                    </div> */}
                          <div class="mb-2 ">
                            <label for="additional_information" class="block text-gray-700 font-medium mb-2">Additional Information</label>
                            <input type="text" id="additional_information" name="additional_information"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 dark:bg-gray-700 dark:text-white" onChange={handlechange} value={values.additional_information} />
                          </div>
                          <div class="mb-2 ">
                            <label for="assembly_installation" class="block text-gray-700 font-medium mb-2">Assembly Installation</label>
                            <input type="text" id="assembly_installation" name="assembly_installation"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400" onChange={handlechange} value={values.assembly_installation} />
                          </div>
                          <div class="mb-">
                            <label for="productweight_dimensions" class="block text-gray-700 font-medium mb-2">Product Dimensions</label>
                            <input type="text" id="productweight_dimensions" name="productweight_dimensions"
                              class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400" onChange={handlechange} value={values.productweight_dimensions} />
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
                  <ToastContainer />

                </div>





              </div>

              }

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_ProductsDetails;