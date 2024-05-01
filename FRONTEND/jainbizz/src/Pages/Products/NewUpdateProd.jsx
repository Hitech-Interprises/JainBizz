import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Validate from '../../Middleware/Product_Mid/Validation';
import Product_Mid from '../../Middleware/Product_Mid/Product_Mid';
import Sidebar from '../../Components/Sidebar';
import Product_CURD from '../../Middleware/Product_Mid/Product_CURD';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const NewUpdateProd = () => {

    const navigate = useNavigate();

    const Pagenavigate =()=> {
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
    



      
  return (
    <div>
   {/* <div class="max-w-2xl overflow-hidden bg-yellow-300 rounded-lg shadow-md dark:bg-gray-800"> */}
  
    <form>
            {currentStep === 1 &&
              <div className='flex flex-col items-center justify-center w-[70vw]'>
                <div className="bg-yellow-200 border-4 rounded-lg shadow w-full max-w-full relative m-10">
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
                                <option key={categories.cate_id} value={categories.cate_id} >{categories.name}</option>
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
              </div>}
            {/* ------------------------PRODUCTS*****------------PRODUCTS****-----------------PRODUCTS****-------------------PRODUCTS****-------------------------------            */}

            {currentStep === 2 && <div>

                
              {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
              <div className='flex flex-col items-center justify-center w-[70vw]'>
              <div className="bg-yellow-200 border-4 rounded-lg shadow w-full max-w-full relative m-10">
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                
                <div>
                <label for="product_name" class="text-sm font-medium  text-gray-900 block mb-2">Product Name</label>
                    <input type="text" name="product_name" id="product_name" class="shadow-sm  border bg-white  border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none  focus:outline-yellow-500 focus:border-yellow-600 block w-full p-2.5" placeholder="Apple" onChange={handlechange} value={values.product_name} />
                </div>

                <div>
                <label for="measurement_units" class="block text-gray-700 font-medium mb-2">Measurement Units</label>
                <select id="measurement_units" name="measurement_units"
                class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.measurement_units} >
                <option value="">Select Measurement Units</option>
                <option value="kg">Kg</option>
                <option value="cm">cm</option>
                <option value="liter">Liter</option>
                </select>
                </div>

                <div>
                <label for="sizes" class="block text-gray-700 font-medium mb-2">Size </label>
                        <select id="sizes" name="sizes"
                        class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.sizes} >
                        <option value="">Select Size Units</option>
                        <option value="Large">Large</option>
                        </select>
                </div>
              </div>


              {/* ++++++++++++++++++++++++ */}

              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                
                <div>
                <label for="description" class="block text-gray-700 font-medium mb-2">Description</label>
                          <textarea id="description" name="description"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " ></textarea>
                </div>

                <div>
                <label for="brand" class="block text-gray-700 font-medium mb-2">brand</label>
                          <input type="text" id="brand" name="brand"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.brand} />
                </div>

                <div>
                <label for="features" class="block text-gray-700 font-medium mb-2">features</label>
                          <input type="text" id="features" name="features"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.features} />
                </div>
              </div>


              {/* ----------------------------------------------------------- */}

              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                
                <div>
                <label for="warranty_information" class="block text-gray-700 font-medium mb-2">warranty_information</label>
                <input type="text" id="warranty_information" name="warranty_information" class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.warranty_information} />
                </div>

                <div>
                <label for="specifications" class="block text-gray-700 font-medium mb-2">specifications</label>
                <input type="text" id="specifications" name="specifications" class=" border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.specifications} />
                </div>

                <div>
                <label for="product_link" class="block text-gray-700 font-medium mb-2">Product Link</label>
                <input type="text" id="product_link" name="product_link" class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.product_link} />
                </div>
              </div>

              <div class="p-6 border-t border-gray-200 rounded-b">
                      <button class="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleNext}>Add Details </button>
                </div>

              </div>

              </div>
 





            </div>

            }


            {currentStep === 3 && <div>

                <div className='flex flex-col items-center justify-center w-[70vw]'>
              <div className="bg-yellow-200 border-4 rounded-lg shadow w-full max-w-full relative m-10">
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">

                <div>
                <label for="others_deatils" class="block text-gray-700 font-medium mb-2">Others Details</label>
                          <input type="text" id="others_deatils" name="others_deatils"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.others_deatils} />
                </div>

                <div>
                <label for="related_products" class="block text-gray-700 font-medium mb-2">Related Products</label>
                          <input type="text" id="related_products" name="related_products"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.related_products} />
                </div>

                <div>
                <label for="product_options" class="block text-gray-700 font-medium mb-2">Product Options</label>
                          <input type="text" id="product_options" name="product_options"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none focus:outline-yellow-500 focus:border-blue-400" onChange={handlechange} value={values.product_options} />
                </div>
              </div>


              {/* ++++++++++++++++++++++++ */}

              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-5">
                
                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                                {selectedFile1 ? (
                                  <img src={URL.createObjectURL(selectedFile1)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <label htmlFor="images2" className="cursor-pointer">
                                      <h5 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile1 ? selectedFile1.name : ''}</span>
                                    </label>
                                    <label htmlFor="images2" >
                                      <input id="images2" name='images2' type="file" className="hidden" accept="image/*" onChange={handleFileChange1} />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div>
                </div>

                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                                {selectedFile2 ? (
                                  <img src={URL.createObjectURL(selectedFile2)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <label htmlFor="images2" className="cursor-pointer">
                                      <h5 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile2 ? selectedFile2.name : ''}</span>
                                    </label>
                                    <label htmlFor="images2" >
                                      <input id="images2" name='images2' type="file" className="hidden" accept="image/*" onChange={handleFileChange2} />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div>
                </div>

                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                                {selectedFile3 ? (
                                  <img src={URL.createObjectURL(selectedFile3)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <label htmlFor="images2" className="cursor-pointer">
                                      <h5 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile3 ? selectedFile3.name : ''}</span>
                                    </label>
                                    <label htmlFor="images2" >
                                      <input id="images3" name='images3' type="file" className="hidden" accept="image/*" onChange={handleFileChange3} />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div>
                </div>


                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                                {selectedFile4 ? (
                                  <img src={URL.createObjectURL(selectedFile4)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <label htmlFor="images2" className="cursor-pointer">
                                      <h5 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile4 ? selectedFile4.name : ''}</span>
                                    </label>
                                    <label htmlFor="images2" >
                                      <input id="images4" name='images4' type="file" className="hidden" accept="image/*" onChange={handleFileChange4} />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div>
                </div>


                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                                {selectedFile5 ? (
                                  <img src={URL.createObjectURL(selectedFile5)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                ) : (
                                  <div>
                                    <label htmlFor="images2" className="cursor-pointer">
                                      <h5 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload image</h5>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                      <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile5 ? selectedFile5.name : ''}</span>
                                    </label>
                                    <label htmlFor="images2" >
                                      <input id="images5" name='images5' type="file" className="hidden" accept="image/*" onChange={handleFileChange5} />
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div>
                </div>
              </div>


              {/* ----------------------------------------------------------- */}

              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-5">
                
                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                              {selectedFile6 ? (
                              <img src={URL.createObjectURL(selectedFile6)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                            ) : (
                              <div>
                                <label htmlFor="variants1" className="cursor-pointer">
                                  <h5 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload variants1</h5>
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
                            </div>
                </div>

                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                              {selectedFile7 ? (
                              <img src={URL.createObjectURL(selectedFile7)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                            ) : (
                              <div>
                                <label htmlFor="variants2" className="cursor-pointer">
                                  <h5 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload variants2</h5>
                                  <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                  <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                  <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile7 ? selectedFile7.name : ''}</span>
                                </label>
                                <label htmlFor="variants2" >
                                  <input id="variants2" name='variants2' type="file" className="hidden" accept="image/*" onChange={handleFileChange7} />
                                </label>
                              </div>
                            )}
                              </div>
                            </div>
                </div>

                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                              {selectedFile8 ? (
                              <img src={URL.createObjectURL(selectedFile8)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                            ) : (
                              <div>
                                <label htmlFor="variants3" className="cursor-pointer">
                                  <h5 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload variants3</h5>
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
                            </div>
                </div>


                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                              {selectedFile9 ? (
                              <img src={URL.createObjectURL(selectedFile9)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                            ) : (
                              <div>
                                <label htmlFor="variants4" className="cursor-pointer">
                                  <h3 className="mb-2 text-lg p-4 font-bold tracking-tight text-gray-700">Upload variants4</h3>
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
                            </div>
                </div>


                <div class="w-[250px]">
                <div class="w-[200px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                              <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                              {selectedFile10 ? (
                              <img src={URL.createObjectURL(selectedFile10)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                            ) : (
                              <div>
                                <label htmlFor="variants5" className="cursor-pointer">
                                  <h3 className="mb-2 text-lg p-4  font-bold tracking-tight text-gray-700">Upload variants5</h3>
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
                            </div>
                </div>
              </div>

              <div class="p-6 border-t border-gray-200 rounded-b mt-2">
                      <button class="text-white bg-purple-500 hover:bg-purple-400 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleNext}>Update Details </button>
                </div>

              </div>

              </div>

                
            </div>}

    </form>


      
    </div>
  )
}

export default NewUpdateProd
