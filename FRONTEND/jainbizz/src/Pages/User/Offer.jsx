import React from 'react'
import { useState } from "react"

const Offer = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };



    return (
        <div>



            <div class="bg-gray-900 py-16 h-screen">
                <div class="container-fluid mx-auto px-4">
                    <h2 class="text-3xl font-bold text-white mb-8">Post Your Latest Product</h2>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">



                        <div class="bg-white rounded-lg shadow-lg p-3">
                            <div class="relative overflow-hidden">
                                {/* ------------------------------------------------------------------------------------- */}
                                <div class="w-auto h-[200px] bg-white rounded-lg  ring-gray-500 flex items-center justify-center mb-3 border-2 ">
                                    <div class="  ">
                                        <div id="image-preview" className=" bg-white text-center cursor-pointer ">
                                            {selectedFile ? (
                                                <img src={URL.createObjectURL(selectedFile)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                            ) : (
                                                <div>
                                                    <label htmlFor="images1" className="cursor-pointer">
                                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Click To Here Upload Image</h5>
                                                        {/* <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                                                        <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p> */}
                                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile ? selectedFile.name : ''}</span>
                                                    </label>
                                                    <label htmlFor="images1" >
                                                        <input id="images1" name='images1' type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------------------------------------------- */}


                                {/* <div class="absolute inset-0 bg-black opacity-40"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                                </div> */}
                            </div>

                            <div class="mb-2">
                                <label for="measurement_units" class="block text-gray-700 font-medium mb-2">Category</label>
                                <select id="measurement_units" name="measurement_units"
                                    class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400"  >
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </select>
                            </div>

                            <h3 class="text-xl font-bold text-gray-900 mt-2">Offer Description</h3>
                            <textarea id="description" name="description"
                                class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="5"></textarea>
                            <div class="flex items-center justify-end mt-2">
                                <button class="bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-400">Save</button>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-3">
                            <div class="relative overflow-hidden">
                                {/* ------------------------------------------------------------------------------------- */}
                                <div class="w-auto h-[200px] bg-white rounded-lg  ring-gray-500 flex items-center justify-center mb-3 border-2">
                                    <div class="  ">
                                        <div id="image-preview" className=" bg-white text-center cursor-pointer ">
                                            {selectedFile ? (
                                                <img src={URL.createObjectURL(selectedFile)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                            ) : (
                                                <div>
                                                    <label htmlFor="images1" className="cursor-pointer">
                                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Click To Here Upload Image</h5>
                                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile ? selectedFile.name : ''}</span>
                                                    </label>
                                                    <label htmlFor="images1" >
                                                        <input id="images1" name='images1' type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------------------------------------------- */}
                            </div>

                            <div class="mb-2">
                                <label for="measurement_units" class="block text-gray-700 font-medium mb-2">Category</label>
                                <select id="measurement_units" name="measurement_units"
                                    class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400"  >
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </select>
                            </div>

                            <h3 class="text-xl font-bold text-gray-900 mt-2">Offer Description</h3>
                            <textarea id="description" name="description"
                                class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="5"></textarea>
                            <div class="flex items-center justify-end mt-2 ">
                                <button class="bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-400">Save</button>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-3">
                            <div class="relative overflow-hidden">
                                {/* ------------------------------------------------------------------------------------- */}
                                <div class="w-auto h-[200px] bg-white rounded-lg  ring-gray-500 flex items-center justify-center mb-3 border-2">
                                    <div class="  ">
                                        <div id="image-preview" className=" bg-white text-center cursor-pointer ">
                                            {selectedFile ? (
                                                <img src={URL.createObjectURL(selectedFile)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                            ) : (
                                                <div>
                                                    <label htmlFor="images1" className="cursor-pointer">
                                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Click To Here Upload Image</h5>
                                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile ? selectedFile.name : ''}</span>
                                                    </label>
                                                    <label htmlFor="images1" >
                                                        <input id="images1" name='images1' type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------------------------------------------- */}
                            </div>

                            <div class="mb-2">
                                <label for="measurement_units" class="block text-gray-700 font-medium mb-2">Category</label>
                                <select id="measurement_units" name="measurement_units"
                                    class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400"  >
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </select>
                            </div>

                            <h3 class="text-xl font-bold text-gray-900 mt-2">Offer Description</h3>
                            <textarea id="description" name="description"
                                class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="5"></textarea>
                            <div class="flex items-center justify-end mt-2">
                                <button class="bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-400">Save</button>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-3">
                            <div class="relative overflow-hidden">
                                {/* ------------------------------------------------------------------------------------- */}
                                <div class="w-auto h-[200px] bg-white rounded-lg ring-gray-500 flex items-center justify-center mb-3 border-2">
                                    <div class="  ">
                                        <div id="image-preview" className=" bg-white text-center cursor-pointer ">
                                            {selectedFile ? (
                                                <img src={URL.createObjectURL(selectedFile)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                            ) : (
                                                <div>
                                                    <label htmlFor="images1" className="cursor-pointer">
                                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Click To Here Upload Image</h5>
                                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile ? selectedFile.name : ''}</span>
                                                    </label>
                                                    <label htmlFor="images1" >
                                                        <input id="images1" name='images1' type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------------------------------------------- */}
                            </div>

                            <div class="mb-2">
                                <label for="measurement_units" class="block text-gray-700 font-medium mb-2">Category</label>
                                <select id="measurement_units" name="measurement_units"
                                    class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400"  >
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </select>
                            </div>

                            <h3 class="text-xl font-bold text-gray-900 mt-2 ">Offer Description</h3>
                            <textarea id="description" name="description"
                                class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="5"></textarea>
                            <div class="flex items-center justify-end mt-2">
                                <button class="bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-400">Save</button>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-3">
                            <div class="relative overflow-hidden">
                                {/* ------------------------------------------------------------------------------------- */}
                                <div class="w-auto h-[200px] bg-white rounded-lg ring-gray-500 flex items-center justify-center mb-3 border-2">
                                    <div class="  ">
                                        <div id="image-preview" className=" bg-white text-center cursor-pointer ">
                                            {selectedFile ? (
                                                <img src={URL.createObjectURL(selectedFile)} className="h-auto flex justify-center rounded-lg mx-auto" alt="Image preview" />
                                            ) : (
                                                <div>
                                                    <label htmlFor="images1" className="cursor-pointer">
                                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Click To Here Upload Image</h5>
                                                        <span id="filename" className="text-gray-500 bg-gray-200 z-50">{selectedFile ? selectedFile.name : ''}</span>
                                                    </label>
                                                    <label htmlFor="images1" >
                                                        <input id="images1" name='images1' type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------------------------------------------- */}
                            </div>

                            <div class="mb-2">
                                <label for="measurement_units" class="block text-gray-700 font-medium mb-2">Category</label>
                                <select id="measurement_units" name="measurement_units"
                                    class="border border-gray-400 bg-white p-2 w-full rounded-lg outline-none  focus:outline-yellow-500 focus:border-blue-400"  >
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </select>
                            </div>

                            <h3 class="text-xl font-bold text-gray-900 mt-2">Offer Description</h3>
                            <textarea id="description" name="description"
                                class="border border-gray-400 p-2 w-full rounded-lg outline-none  focus:outline-yellow-500  focus:border-blue-400 " rows="5"></textarea>
                            <div class="flex items-center justify-end mt-2">
                                <button class="bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-400">Save</button>
                            </div>
                        </div>





                    </div>

                </div>
            </div>


        </div>
    )
}

export default Offer
