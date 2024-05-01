import React, { useState, useEffect } from 'react';
import { TbEyeEdit } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Popup from 'reactjs-popup';
import Service_CURD from '../Middleware/Service_Mid/Service_CURD';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const ViewSerivces = () => {

  const {data, setData, getServiceList,getProduct_View,getService_Delete} = Service_CURD();   

  const [categoryNames, setCategoryNames] = useState();
  const [onopen, setonopen] = useState(false);
  const [oncancel, setoncancel] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  


  

   useEffect(() => {
    setFilteredData(data);
    }, [data]);

    const handleSearch = () => {
        const lowercaseQuery = searchQuery.toLowerCase();
        const filtered = data.filter(item =>
            item.service_name.toLowerCase().includes(lowercaseQuery) ||
            item.service_type.toLowerCase().includes(lowercaseQuery) ||
            item.service_cost.toLowerCase().includes(lowercaseQuery) ||
            item.payment_opt.toLowerCase().includes(lowercaseQuery) ||
            item.discounts_promo.toLowerCase().includes(lowercaseQuery)
            
        );
        setFilteredData(filtered);
    }



  return (

    <div>
    <div class='fixed'>
        <Navbar />
    </div>
    <div className='flex bg-gray-100 h-screen'>
        <div class=' bg-gray-50 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 fixed mt-[96px]'>
            <Sidebar />
        </div>
        
        <div class=''>
        <div className='flex ml-[18rem] mt-[7rem]'>
            <h1 class='font-serif'>View Service</h1>
        </div>
        
            <div class='w-[95rem] mt-[2rem] ml-[18rem] border-4 rounded-lg h-[42rem] overflow-auto bg-white '>
          
           
                <div class="mb-2 flex flex-row gap-3">
                <div class="flex  ">
                <input type="text" placeholder="Search for the tool you like" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[80rem] ml-2.5 px-3 h-10 rounded-l border-2 border-yellow-300  focus:border-yellow-500" 
                />
                <button type="submit" class="bg-yellow-500 text-white rounded-r px-2 md:px-3 py-0 " onClick={handleSearch}>Search</button>
                </div>
                <select id="pricingType" name="pricingType"
                    class="w-auto h-10 border-2 bg-yellow-500  focus:outline-none  text-white rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" selected=""><b>All</b></option>
                    <option value="Freemium">Freemium</option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                </select>
                {/* filteredData.map is not a function */}
                </div>
               
                <div class='bg-white '>
                    <table class="min-w-full divide-y divide-gray-200 font-serif ">
                    <thead class="bg-gray-50 font-sans">
                   <tr>
                         <th scope="col" class="px-6 py-3 text-left  text-black text-xs font-extrabold uppercase tracking-wider">
                             Image one
                         </th>
                         <th scope="col" class="px-6 py-3 text-left  text-black text-xs font-extrabold uppercase tracking-wider">
                             Service
                        </th>
                       <th scope="col" class="px-6 py-3 text-left  text-black text-xs font-extrabold uppercase tracking-wider">
                             Service Type
                         </th>
                         <th scope="col" class="px-6 py-3 text-left  text-black text-xs font-extrabold uppercase tracking-wider">
                             Service Cost
                         </th>
                         <th scope="col" class="px-6 py-3 text-left  text-black text-xs font-extrabold uppercase tracking-wider">
                             Payment Opt
                         </th>
                         <th scope="col" class="px-6 py-3 text-left  text-black text-xs font-extrabold uppercase tracking-wider">
                             Discounts Promo
                         </th>
                         <th scope="col" class="px-6 py-3 text-left  text-black text-xs font-extrabold uppercase tracking-wider">
                             Status
                         </th>
                         <th scope="col" class="px-6 py-3 text-left  text-black text-xs font-extrabold uppercase tracking-wider">
                             Actions
                         </th>
                     </tr>
                 </thead>
                 <tbody class="bg-white divide-y divide-gray-200 font-semibold">
                    {filteredData.map((item, index) => (
                         <tr key={index}>
                             <td class="px-6 py-4 whitespace-nowrap">
                                 <div class="flex items-center">
                                     <div class="flex-shrink-0 h-10 w-10">
                                         <img class="h-10 w-10 rounded-full" src={item.images} alt="/Backend/images" />
                                     </div>
                                 </div>
                             </td>
                             <td class="px-6 py-4 whitespace-nowrap">
                                 <div class="text-sm text-gray-900">{item.service_name}</div>
                             </td>
                             <td class="px-6 py-4 whitespace-nowrap">
                                 <div class="text-sm text-gray-600">{item.service_type}</div>
                             </td>
                             <td class="px-6 py-4 whitespace-nowrap">
                                 <div class="text-sm text-gray-600">{item.service_cost}</div>
                             </td>
                             <td class="px-6 py-4 whitespace-nowrap">
                                 <div class="text-sm text-gray-600">{item.payment_opt}</div>
                             </td>
                             <td class="px-6 py-4 whitespace-nowrap">
                                 <div class="text-sm text-gray-600">{item.discounts_promo}</div>
                             </td>
                             <td class="px-6 py-4 whitespace-nowrap">
                                 <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Yes</span>
                             </td>
                             <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                 <a href="#" class="text-indigo-600 hover:text-indigo-900" onClick={() => getProduct_View(item.service_id)}><TbEyeEdit class='text-3xl inline-flex' /></a>
                                 <a href="#" className="ml-2 text-red-600 hover:text-red-900" onClick={() => getService_Delete(item.service_id)}><AiTwotoneDelete className='text-3xl inline-flex' /></a>
                             </td>
                         </tr>
                     ))}
                 </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    <ToastContainer/>
</div>

    )
}

export default ViewSerivces
