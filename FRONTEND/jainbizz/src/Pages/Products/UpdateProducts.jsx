import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Validate from '../../Middleware/Product_Mid/Validation';
import Product_CURD from '../../Middleware/Product_Mid/Product_CURD';
import Product_Mid from '../../Middleware/Product_Mid/Product_Mid';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
// import Product_CURD from '../../Middleware/Product_Mid/Product_CURD';

const UpdateProducts = () => {

  const [id, setid] = useState();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const allproduct_id = searchParams.get('allproduct_id');


  useEffect(() => {
    ViewDetails()
    console.log(allproduct_id, "-----------UPDAT PAGE");
    setid(allproduct_id)
  }, []);



  const ViewDetails = async () => {
    try {
      const formData = new FormData();
      formData.append('userid', 'be5a6874-83f4-4c58-9c89-2b0918b3f874');
      formData.append('allproduct_id', allproduct_id);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const res = await axios.post('http://127.0.0.1:8000/app/Product_View-EditPage/', formData, config);
      const data = res.data[0];

      setupValues({
        ...val,
        product_name: data.product_name || '',
        features: data.features || '',
        short_description: data.short_description || '',
        description: data.description || '',
        warranty_information: data.warranty_information || '',
        additional_information: data.additional_information || '',
        sizes: data.sizes || '',
        offers: data.offers || '',
        sku: data.sku || '',
        categories: data.categories || '',
        price: data.price || '',
        images1: data.images1 || '',
        images2: data.images2 || '',
        images3: data.images3 || '',
        images4: data.images4 || '',
        images5: data.images5 || '',
        variants1: data.variants1 || '',
        variants2: data.variants2 || '',
        variants3: data.variants3 || '',
        variants4: data.variants4 || '',
        variants5: data.variants5 || '',
        brand: data.brand || '',
        specifications: data.specifications || '',
        reviews_ratings: data.reviews_ratings || '',
        date: data.date || '',
        related_products: data.related_products || '',
        product_link: data.product_link || '',
        product_options: data.product_options || '',
        product_availability: data.product_availability || '',
        productweight_dimensions: data.productweight_dimensions || '',
        measurement_units: data.measurement_units || '',
        assembly_installation: data.assembly_installation || '',
        others_deatils: data.others_deatils || '',
      });
    } catch (err) {
      console.log(err);
    }
  };




  const navigate = useNavigate()

  const Pagenavigate = () => {
    navigate(`/Viewproducts/`);
  }

  const { handlechange, handlesubmit, values,


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

    getProduct_View,
    val, setupValues,


    handleFileChange, handleFileChange1, handleFileChange2, handleFileChange3, handleFileChange4, handleFileChange5, handleFileChange6, handleFileChange7, handleFileChange8, handleFileChange9, handleFileChange10,
    handlesubmitproducts, frontresp, setfrontresp, handlechangeupdate } = Product_Mid(Validate);




  const [datas, setDatas ] = useState([]);


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
    <div class=''>
      <div class='flex bg-gray-200 '>
        <div class=' bg-gray-50 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'>
          <Sidebar />
        </div>
        <div class=' bg-gray-50  max-w-full'>

        </div>
        <div className=''>
          <div class="max-w-full w-[85vw] h-mx-auto sm:px-6 lg:px-8">
            <form>

              <div class='rounded bg-white mt-4'>

                <div class='grid grid-cols-2  '>
                  <div class=' mr-5'>
                    <h1 class='mb-4 mt-3 ml-11 '>Products Updates Page</h1>
                    <div class='flex justify-end mt-[74px]'>
                      <div class='w-[700px]  bg-gray-200  bg-opacity-50 border-2 rounded-md p-2' >
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">General Details</h2>
                        <div class="col-span-6 sm:col-span-3 mb-2  ">
                          <label for="product_name" class="text-sm font-medium  text-gray-900 block mb-2">Product Name</label>
                          <input type="text" name="product_name" id="product_name" class="shadow-sm  border bg-white  border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none  focus:outline-yellow-500 focus:border-yellow-600 block w-full p-2.5" placeholder="Apple" onChange={handlechangeupdate} value={val.product_name} />
                        </div>

                        <div class=" mb-3">
                          <label for="description" class="block text-gray-700 font-medium mb-2">Description</label>
                          <textarea id="description" name="description"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="5" onChange={handlechangeupdate} value={val.description}></textarea>
                        </div>


                        <div class="mb-4">
                          <label for="measurement_units" class="block text-gray-700 font-medium mb-2">Measurement Units</label>
                          <select id="measurement_units" name="measurement_units"
                            class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.measurement_units} >
                            <option value="">Select Measurement Units</option>
                            <option value="kg">Kg</option>
                            <option value="cm">cm</option>
                            <option value="liter">Liter</option>
                          </select>
                        </div>



                        <div class="mb-3">
                          <label for="sizes" class="block text-gray-700 font-medium mb-2">Size </label>
                          <select id="sizes" name="sizes"
                            class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.sizes} >
                            <option value="">Select Size Units</option>
                            <option value="Large">Large</option>

                          </select>
                        </div>

                      </div>

                    </div>

                    <div class='flex justify-end mt-2'>
                      <div class='bg-gray-200 bg-opacity-50 rounded w-[700px] h-auto p-2'>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Product Information</h2>
                        <div class="mb-2 ">
                          <label for="brand" class="block text-gray-700 font-medium mb-2">brand</label>
                          <input type="text" id="brand" name="brand"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.brand} />
                        </div>
                        <div class="mb-2 ">
                          <label for="features" class="block text-gray-700 font-medium mb-2">features</label>
                          <input type="text" id="features" name="features"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.features} />
                        </div>
                        <div class="mb-2 ">
                          <label for="warranty_information" class="block text-gray-700 font-medium mb-2">warranty_information</label>
                          <input type="text" id="warranty_information" name="warranty_information"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.warranty_information} />
                        </div>
                        <div class="mb-2 ">
                          <label for="specifications" class="block text-gray-700 font-medium mb-2">specifications</label>
                          <input type="text" id="specifications" name="specifications"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.specifications} />
                        </div>
                        <div class="mb-2 ">
                          <label for="product_link" class="block text-gray-700 font-medium mb-2">Product Link</label>
                          <input type="text" id="product_link" name="product_link"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.product_link} />
                        </div>
                        <div class="mb-2 ">
                          <label for="others_deatils" class="block text-gray-700 font-medium mb-2">Others Details</label>
                          <input type="text" id="others_deatils" name="others_deatils"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.others_deatils} />
                        </div>
                      </div>
                    </div>


                    <div class='flex justify-end mt-2'>
                      <div class='bg-gray-200 bg-opacity-50 rounded w-[700px] h-auto p-2'>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Related</h2>

                        <div class="mb-2 ">
                          <label for="related_products" class="block text-gray-700 font-medium mb-2">Related Products</label>
                          <input type="text" id="related_products" name="related_products"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.related_products} />
                        </div>
                        <div class="mb-2 ">
                          <label for="product_options" class="block text-gray-700 font-medium mb-2">Product Options</label>
                          <input type="text" id="product_options" name="product_options"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none focus:outline-yellow-500 focus:border-blue-400" onChange={handlechangeupdate} value={val.product_options} />
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

                          {/* <div class="w-[100px] h-[100px] overflow-hidden bg-white flex items-center rounded-lg ring-1 ring-gray-500 ring-opacity-40 ">
                            <div id="image-preview" className="flex justify-center items-center bg-white rounded-lg text-center cursor-pointer">
                              {selectedFile5 ? (
                                <img src={URL.createObjectURL(selectedFile5)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                              ) : (
                                <div>
                                  <label htmlFor="images5" className="cursor-pointer">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6"></p>
                                    <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile5 ? selectedFile5.name : ''}</span>
                                  </label>
                                  <label htmlFor="images5" >
                                    <input id="images5" name='images5' type="file" className="hidden" accept="image/*" onChange={handleFileChange5} />
                                  </label>
                                </div>
                              )}
                            </div>
                          </div> */}

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



                    <div class='w-[700px] mt-2.5 bg-gray-200 bg-opacity-50 border p-2 rounded mb-[18px] ' >
                      <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Varients</h2>

                      <div class='flex gap-4'>


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
                            {selectedFile7 ? (
                              <img src={URL.createObjectURL(selectedFile7)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                            ) : (
                              <div>
                                <label htmlFor="variants2" className="cursor-pointer">
                                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload image</h5>
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




                    <div class='w-[700px] mt-2 bg-gray-200 bg-opacity-50 border p-2 rounded mb-3'>
                      <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Pricing And Stock</h2>
                      <div class="grid grid-cols-2 gap-2">
                        <div>
                          <label for="price" class="block text-gray-700 dark:text-white mb-1">Base pricing</label>
                          <input type="text" id="price" name='price' class="w-full rounded-lg border  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechangeupdate} value={val.price} />
                        </div>
                        <div>
                          <p class='mb-[4px]'>Availibilty</p>
                          <div class="flex ">
                            <div class="w-1/2">
                              <div class="  ">
                                <label for="product_availability" class="flex bg-white text-gray-700 rounded-md px-3  mr-1 hover:bg-yellow-300 cursor-pointer border dark:bg-gray-700 dark:text-white dark:border-none">

                                  <input type="radio" name="product_availability" value='true' id='product_availability' checked={val.product_availability === 'true'} onChange={handlechangeupdate} class="accent-purple-200 focus-within:accent-[#6A64F1] bg-white text-base font-medium " />
                                  <strong class="p-2 ">Yes</strong>

                                </label>
                              </div>
                            </div>
                            <div class="w-1/2">
                              <div class="">
                                <label class="flex bg-white text-gray-700 rounded-md px-3 ml-1 hover:bg-yellow-300 cursor-pointer border dark:bg-gray-700 dark:text-white dark:border-none ">

                                  <input type="radio" name="product_availability" value='false' id='product_availability' checked={val.product_availability === 'false'} onChange={handlechangeupdate} class="accent-purple-200 focus-within:accent-[#6A64F1] bg-white text-base font-medium " />
                                  <strong class="p-2 ">No</strong>

                                </label>

                              </div>
                            </div>
                          </div>


                        </div>
                        <div>
                          <label for="date" class="block text-gray-700 dark:text-white mb-1">Date</label>
                          <input type="date" id="date" name='date' class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechangeupdate} value={val.date} />
                        </div>
                        <div>
                          <label for="reviews_ratings" class="block text-gray-700 dark:text-white mb-1">Review and Rating</label>
                          <input type="text" id="reviews_ratings" name='reviews_ratings' class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none outline-none  focus:outline-yellow-500" onChange={handlechangeupdate} value={val.reviews_ratings} />
                        </div>
                      </div>
                    </div>

                    <div class='mt-2'>
                      <div class='bg-gray-200 bg-opacity-50 rounded w-[700px] h-auto p-2'>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white  mb-4">More Information</h2>
                        <div class="mb-2 ">
                          <label for="offers" class="block text-gray-700 font-medium mb-2">Offers</label>
                          <textarea id="offers" name="offers"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400 " rows="3" onChange={handlechangeupdate} value={val.offers} ></textarea>
                        </div>

                        <div class="mb-2 ">
                          <label for="additional_information" class="block text-gray-700 font-medium mb-2">Additional Information</label>
                          <input type="text" id="additional_information" name="additional_information"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 dark:bg-gray-700 dark:text-white" onChange={handlechangeupdate} value={val.additional_information} />
                        </div>
                        <div class="mb-2 ">
                          <label for="assembly_installation" class="block text-gray-700 font-medium mb-2">Assembly Installation</label>
                          <input type="text" id="assembly_installation" name="assembly_installation"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400" onChange={handlechangeupdate} value={val.assembly_installation} />
                        </div>
                        <div class="mb-">
                          <label for="productweight_dimensions" class="block text-gray-700 font-medium mb-2">Product Dimensions</label>
                          <input type="text" id="productweight_dimensions" name="productweight_dimensions"
                            class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400" onChange={handlechangeupdate} value={val.productweight_dimensions} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div class='max-w-[1500px]  mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
                  <div class="-mx-2 mb-40">
                    <div class="flex justify-end  w-full px-2">
                      <button class="w-40 mb-5 py-2 px-4 mr-5 rounded-full font-bold text-purple-800 hover:text-purple-600 bg-yellow-200 hover:bg-yellow-400 " onClick={handleBack}>Back</button>

                      <button
                        class="hover:shadow-form w-40  mb-5 mr-5  py-2 px-4 text-center text-base rounded-full font-bold hover:text-purple-800 text-purple-600 hover:bg-yellow-200 bg-yellow-400" onClick={(e) => handlesubmitproducts(e, allproduct_id)}>
                        Save
                      </button>

                    </div>
                  </div>
                </div>
                <ToastContainer />

              </div>





            </form>

          </div>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts
