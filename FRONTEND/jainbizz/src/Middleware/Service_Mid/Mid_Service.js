import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'

const Mid_Service = (Validate) => {

    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedState, setSelectedState] = useState('');
  const [selectedState2, setSelectedState2] = useState('');
  const [selectedState3, setSelectedState3] = useState('');
  const [selectedState4, setSelectedState4] = useState('');
  const [selectedState5, setSelectedState5] = useState('');
  const [selectedState6, setSelectedState6] = useState('');
  const [selectedState7, setSelectedState7] = useState('');
  const [selectedState8, setSelectedState8] = useState('');
  const [selectedState9, setSelectedState9] = useState('');


  const [subCategories, setSubCategories] = useState([]);
  const [subCategories2, setSubCategories2] = useState([]);
  const [subCategories3, setSubCategories3] = useState([]);
  const [subCategories4, setSubCategories4] = useState([]);
  const [subCategories5, setSubCategories5] = useState([]);
  const [subCategories6, setSubCategories6] = useState([]);
  const [subCategories7, setSubCategories7] = useState([]);
  const [subCategories8, setSubCategories8] = useState([]);
  const [subCategories9, setSubCategories9] = useState([]);


  // -----------Images
  const [selectedFile, setSelectedFile] = useState();


  // --------VArients
  const [selectedFile6, setSelectedFile6] = useState();


  const [frontresp,setfrontresp] = useState({
    status:0,msg:'',
  });


  const [finalselectedCatID, setFinalSelectedCatID] = useState('');
  const [values, setValues] = useState({
    service_name : '',
    service_availability : '',
    service_type : '',
    target_audience : '',
    keywords_tags : '',
    images : '',
    vedio : '',
    terms_conditions : '',
    payment_opt : '',
    discounts_promo : '',
    related_services : '',
    custom_fields : '',
    service_package : '',
    categories : '',
    documentation : '',
    service_location : '',
    service_provider : '',
    service_cost : '',
    service_benefits : '',
    service_duration : '',
    service_security : '',
    service_custom : '',
    date:'',
  });


  const [val, setupValues] = useState({
    service_name : '',
    service_availability : '',
    service_type : '',
    target_audience : '',
    keywords_tags : '',
    images : '',
    vedio : '',
    terms_conditions : '',
    payment_opt : '',
    discounts_promo : '',
    related_services : '',
    custom_fields : '',
    service_package : '',
    categories : '',
    documentation : '',
    service_location : '',
    service_provider : '',
    service_cost : '',
    service_benefits : '',
    service_duration : '',
    service_security : '',
    service_custom : '',
    date:'',
  });



  const handlecatergory = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    setSelectedState(categoryId);
    setSelectedState2(''); // Reset subcategory 1 selection
    setSelectedState3('');
    setSelectedState4('');
    getSubCategories(categoryId);
    setFinalSelectedCatID(categoryId);
  }
  const handleSubCategoryChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    // setSelectedState(categoryId);
    setSelectedState2(categoryId); // Reset subcategory 1 selection
    setSelectedState3('');
    setSelectedState4('');
    getSubCategories2(categoryId);
  }

  const handleSubCategory3 = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    setSelectedState3(categoryId);
    setSelectedState4('');
    getSubCategories3(categoryId);
    setFinalSelectedCatID(categoryId);

  }


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleFileChange6 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile6(file);
    } else {
      setSelectedFile6(null);
    }
  };



  const handleSubCategory4 = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    setSelectedState4(categoryId);
    setSelectedState5(); // Reset subcategory 3 selection
    // Fetch subcategories for the selected subcategory 2
    getSubCategories4(categoryId);
    setFinalSelectedCatID(categoryId);
  };

  const handleSubCategory5 = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    setSelectedState5(categoryId);
    setSelectedState6(); 
    getSubCategories5(categoryId);
    setFinalSelectedCatID(categoryId);
  };

  const handleSubCategory6 = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    setSelectedState6(categoryId);
    setSelectedState7(); 
    getSubCategories6(categoryId);
    setFinalSelectedCatID(categoryId);
  };

  const handleSubCategory7 = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    setSelectedState7(categoryId);
    setSelectedState8();
    getSubCategories7(categoryId);
    setFinalSelectedCatID(categoryId);
  };

  const handleSubCategory8 = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    setSelectedState8(categoryId);
    setSelectedState9(); 
    getSubCategories8(categoryId);
    setFinalSelectedCatID(categoryId);
  };
  
  const handleSubCategory9 = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const categoryId = e.target.value;
    setSelectedState9(categoryId);
    getSubCategories9(categoryId);
    setFinalSelectedCatID(categoryId);
  };

  const getSubCategories = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories2 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories2(res.data);
    } catch (err) {
      console.log(err);
    }
  };  
  const getSubCategories3 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories3(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories4 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories4(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories5 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories5(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories6 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories6(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories7 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories7(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories8 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories8(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories9 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/ServiceViewList/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', parentid: categoryId });
      setSubCategories9(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  const handlechange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors(Validate(values));
    console.log(values)
  };

  const handlechangeupdate = (e) => {
    const { name, value } = e.target;
    setupValues({ ...val, [name]: value });
    setErrors(Validate(val));
    console.log(val)
  };


  const handlesubmit = (e) => {

    console.log("HEYYYYYYYY")
    e.preventDefault();
    setErrors(Validate(values));

    const formData = new FormData();
   
    formData.append('service_name', values.service_name);
    formData.append('service_availability', values.service_availability);
    formData.append('service_type', values.service_type);
    formData.append('target_audience', values.target_audience);
    formData.append('keywords_tags', values.keywords_tags);
    formData.append('images', selectedFile);
    formData.append('vedio', selectedFile6);
    formData.append('terms_conditions' ,values.terms_conditions);
    formData.append('payment_opt', values.payment_opt)
    formData.append('discounts_promo', values.discounts_promo)
    formData.append('related_services', values.related_services)
    formData.append('custom_fields', values.custom_fields)
    formData.append('service_package', values.service_package)
    formData.append('categories', values.categories);
    formData.append('documentation', values.documentation);
    formData.append('service_location', values.service_location);
    formData.append('service_provider', values.service_provider);
    formData.append('service_cost', values.service_cost );
    formData.append('service_benefits', values.service_benefits);
    formData.append('service_duration', values.service_duration);
    formData.append('service_security', values.service_security);
    formData.append('service_custom', values.service_custom);
    formData.append('date', values.date);






        axios.post('http://127.0.0.1:8000/app/Service_Add/',formData,{
         
        headers: {
          'Content-Type': 'multipart/form-data'
          
      },
      })
      
      
            .then(function (response) {
              toast.success('Service Saved Successfully')
            })    

            .catch(function (error) {
              toast.error('Invalid Inputs,Please Check!');
                console.log(error);
            });

};

const handleUpdateService = async (e,service_id) => {
    // alert("HIIIII")
    console.log(service_id,"**************************************")
    e.preventDefault();
    // setErrors(Validate(values));
  
   
    const formData = new FormData();
    formData.append('service_name', val.service_name);
    formData.append('service_availability', val.service_availability);
    formData.append('service_type', val.service_type);
    formData.append('target_audience', val.target_audience);
    formData.append('keywords_tags', val.keywords_tags);
    formData.append('images', selectedFile);
    formData.append('vedio', selectedFile6);
    formData.append('terms_conditions' ,val.terms_conditions);
    formData.append('payment_opt', val.payment_opt)
    formData.append('discounts_promo', val.discounts_promo)
    formData.append('related_services', val.related_services)
    formData.append('custom_fields', val.custom_fields)
    formData.append('service_package', val.service_package)
    formData.append('categories', val.categories);
    formData.append('documentation', val.documentation);
    formData.append('service_location', val.service_location);
    formData.append('service_provider', val.service_provider);
    formData.append('service_cost', val.service_cost );
    formData.append('service_benefits', val.service_benefits);
    formData.append('service_duration', val.service_duration);
    formData.append('service_security', val.service_security);
    formData.append('service_custom', val.service_custom);
    formData.append('date', val.date);
    formData.append('userid', 'be5a6874-83f4-4c58-9c89-2b0918b3f874');
    formData.append('service_id', service_id);
  
  
  
  
  
    await axios.post('http://127.0.0.1:8000/app/Sevice_Update/',formData,{
         
    headers: {
        'Content-Type': 'multipart/form-data'
        
    },
      })
   
            .then(function(response){
                toast.success('Service is Updated', {
                onClose: () => navigate('/ViewSerivces')
            });
  
            }) 
            .catch(function (error) {
              toast.error('Invalid Inputs,Please Check!');
                console.log(error);
            });
  
  };

  return{
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
    handleUpdateService,



    handlecatergory, handleSubCategoryChange, handleSubCategory3, handleSubCategory4, handleSubCategory5, handleSubCategory6,
    handleSubCategory7, handleSubCategory8, handleSubCategory9, handleFileChange, frontresp, setfrontresp, handlechangeupdate,
    handleFileChange6
 
  }
}

export default Mid_Service
