import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const UpdateProductMid = () => {
    const navigate = useNavigate();

      useEffect(() => {
        ViewDetails()
        // setid(allproduct_id)
    }, []);
    
    
    const getProductNavigate = async (allproduct_id) => {
        console.log(allproduct_id, '=====================================');
        navigate(`/UpdateProducts/?allproduct_id=${allproduct_id}`);
        ViewDetails(allproduct_id)
    }    
    
    const ViewDetails = async (allproduct_id) => {
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
  return {getProductNavigate, val, setupValues}
}

export default UpdateProductMid
