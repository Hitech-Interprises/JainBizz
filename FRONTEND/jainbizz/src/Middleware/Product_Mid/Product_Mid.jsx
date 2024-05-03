import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
const Product_Mid = (Validate) => {
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
  const [selectedFile, setSelectedFile] = useState('');

  // -----------Images
  const [selectedFile1, setSelectedFile1] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  const [selectedFile3, setSelectedFile3] = useState();
  const [selectedFile4, setSelectedFile4] = useState();
  const [selectedFile5, setSelectedFile5] = useState();

  // --------VArients
  const [selectedFile6, setSelectedFile6] = useState();
  const [selectedFile7, setSelectedFile7] = useState();
  const [selectedFile8, setSelectedFile8] = useState();
  const [selectedFile9, setSelectedFile9] = useState();
  const [selectedFile10, setSelectedFile10] = useState();
  
 


  const [frontresp,setfrontresp] = useState({
    status:0,msg:'',
  });
  const [finalselectedCatID, setFinalSelectedCatID] = useState('');
  const [values, setValues] = useState({
    product_name: '',
    features: '',
    short_description: '',
    description: '',
    warranty_information: '',
    additional_information: '',
    sizes: '',
    offers: '',
    sku: '',
    categories: '',
    price: '',
    images1: '',
    images2: '',
    images3: '',
    images4: '',
    images5: '',
    variants1: '',
    variants2: '',
    variants3: '',
    variants4 : '',
    variants5: '',
    brand: '',
    specifications: '',
    reviews_ratings: '',
    date: '',
    related_products: '',
    product_link: '',
    product_options: '',
    product_availability: '',
    productweight_dimensions: '',
    measurement_units: '',
    assembly_installation: '',
    others_deatils: '',
  });


  const [val, setupValues] = useState({
    product_name: '',
    features: '',
    short_description: '',
    description: '',
    warranty_information: '',
    additional_information: '',
    sizes: '',
    offers: '',
    sku: '',
    categories: '',
    price: '',
    images1: '',
    images2: '',
    images3: '',
    images4: '',
    images5: '',
    variants1: '',
    variants2: '',
    variants3: '',
    variants4 : '',
    variants5: '',
    brand: '',
    specifications: '',
    reviews_ratings: '',
    date: '',
    related_products: '',
    product_link: '',
    product_options: '',
    product_availability: '',
    productweight_dimensions: '',
    measurement_units: '',
    assembly_installation: '',
    others_deatils: '',
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


  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile1(file);
    } else {
      setSelectedFile1(null);
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile2(file);
    } else {
      setSelectedFile2(null);
    }
  };

  const handleFileChange3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile3(file);
    } else {
      setSelectedFile3(null);
    }
  };

  const handleFileChange4 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile4(file);
    } else {
      setSelectedFile4(null);
    }
  };

  const handleFileChange5 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile5(file);
    } else {
      setSelectedFile5(null);
    }
  };

  // ------------Varients

  const handleFileChange6 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile6(file);
    } else {
      setSelectedFile6(null);
    }
  };

  const handleFileChange7 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile7(file);
    } else {
      setSelectedFile7(null);
    }
  };

  const handleFileChange8 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile8(file);
    } else {
      setSelectedFile8(null);
    }
  };

  const handleFileChange9 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile9(file);
    } else {
      setSelectedFile9(null);
    }
  };

  const handleFileChange10 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile10(file);
    } else {
      setSelectedFile10(null);
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


  const getProduct_View = async (allproduct_id) => {
    console.log(allproduct_id, '=====================================');
    navigate(`/UpdateProducts/?allproduct_id=${allproduct_id}`);
};


  const getSubCategories = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
      setSubCategories(res.data);
      //setSelectedFileselectedState(...selectedState,res.data.data[0][{categoryId:3,ca}])
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories2 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
      setSubCategories2(res.data);
    } catch (err) {
      console.log(err);
    }
  };  
  const getSubCategories3 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
      setSubCategories3(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories4 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
      setSubCategories4(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories5 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
      setSubCategories5(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories6 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
      setSubCategories6(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories7 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
      setSubCategories7(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories8 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
      setSubCategories8(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubCategories9 = async (categoryId) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/app/MainCategoryView_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc', parentid: categoryId });
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
  const handleSuccess = () => {
    // Show a success toast notification
    toast.success('User Registration successfull.');
  };
  const handlesubmit = (e) => {

    console.log("HEYYYYYYYY")
    e.preventDefault();
    setErrors(Validate(values));

    // const fileBlob = new Blob([selectedFile], { type: selectedFile.type });

    const formData = new FormData();
    // const parent_user  = values.parent_user;    
    formData.append('product_name', values.product_name);
    formData.append('features', values.features);
    formData.append('short_description', values.short_description);
    formData.append('description', values.description);
    formData.append('warranty_information', values.warranty_information);
    formData.append('additional_information', values.additional_information);
    formData.append('sizes', values.sizes);
    formData.append('offers' ,values.offers);
    formData.append('sku', values.sku)
    formData.append('categories', values.categories);
    formData.append('price', values.price);
    formData.append('images1', selectedFile1);
    formData.append('images2', selectedFile2);
    formData.append('images3', selectedFile3);
    formData.append('images4', selectedFile4);
    formData.append('images5', selectedFile5);
    formData.append('variants1' ,selectedFile6);
    formData.append('variants2' ,selectedFile7);
    formData.append('variants3' ,selectedFile8);
    formData.append('variants4' ,selectedFile9);
    formData.append('variants5' ,selectedFile10);
    formData.append('brand', values.brand);
    formData.append('specifications', values.specifications);
    formData.append('reviews_ratings', values.reviews_ratings);
    formData.append('date', values.date);
    formData.append('related_products', values.related_products);
    formData.append('product_link', values.product_link);
    formData.append('product_options', values.product_options);
    formData.append('product_availability', values.product_availability);
    formData.append('productweight_dimensions', values.productweight_dimensions);
    formData.append('measurement_units', values.measurement_units);
    formData.append('assembly_installation', values.assembly_installation);
    formData.append('others_deatils', values.others_deatils);





        axios.post('http://127.0.0.1:8000/app/Product Add/',formData,{
         
        headers: {
          'Content-Type': 'multipart/form-data'
          
      },
      // body: JSON.stringify(values)
      })   
      .then(function (response) {
      
            
              toast.success('Products Saved Successfully')

            })    

            .catch(function (error) {
              toast.error('Invalid Inputs,Please Check!');
                console.log(error);
            });

};

// -------------------------------------------------------------------------

const handlesubmitproducts = async (e,product_id) => {
  // alert("HIIIII")
  console.log(product_id,"**************************************")
  e.preventDefault();
  // setErrors(Validate(values));

 
  const formData = new FormData();
  // const parent_user  = values.parent_user;    
  formData.append('product_name', val.product_name);
  formData.append('features', val.features);
  formData.append('short_description', val.short_description);
  formData.append('description', val.description);
  formData.append('warranty_information', val.warranty_information);
  formData.append('additional_information', val.additional_information);
  formData.append('sizes', val.sizes);
  formData.append('offers' ,val.offers);
  formData.append('sku', val.sku)
  formData.append('categories', val.categories);
  formData.append('price', val.price);
  formData.append('images1', selectedFile1);
  formData.append('images2', selectedFile2);
  formData.append('images3', selectedFile3);
  formData.append('images4', selectedFile4);
  formData.append('images5', selectedFile5);
  formData.append('variants1' ,selectedFile6);
  formData.append('variants2' ,selectedFile7);
  formData.append('variants3' ,selectedFile8);
  formData.append('variants4' ,selectedFile9);
  formData.append('variants5' ,selectedFile10);
  formData.append('brand', val.brand);
  formData.append('specifications', val.specifications);
  formData.append('reviews_ratings', val.reviews_ratings);
  formData.append('date', val.date);
  formData.append('related_products', val.related_products);
  formData.append('product_link', val.product_link);
  formData.append('product_options', val.product_options);
  formData.append('product_availability', val.product_availability);
  formData.append('productweight_dimensions', val.productweight_dimensions);
  formData.append('measurement_units', val.measurement_units);
  formData.append('assembly_installation', val.assembly_installation);
  formData.append('others_deatils', val.others_deatils);
  formData.append('userid', 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc');
  formData.append('product_id', product_id);





      await axios.post('http://127.0.0.1:8000/app/Product Update/',formData,{
       
      headers: {
        'Content-Type': 'multipart/form-data'
        
    },
    })
 
          .then(function(response){
            toast.success('Producted is Added', {
              onClose: () => navigate('/Viewproducts')
          });
            // console.log(response.data);
            //   handleSuccess(); 
            //   navigate('/login');

          }) 
          .catch(function (error) {
            toast.error('Invalid Inputs,Please Check!');
              console.log(error);
          });

};






  const showpass = (e) => {
    setShowPassword((prev) => !prev);
  };
  return {
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

    selectedFile1, setSelectedFile1,
    selectedFile2, setSelectedFile2,
    selectedFile3, setSelectedFile3,
    selectedFile4, setSelectedFile4,
    selectedFile5, setSelectedFile5,

    selectedFile6, setSelectedFile6,
    selectedFile7, setSelectedFile7,
    selectedFile8, setSelectedFile8,
    selectedFile9, setSelectedFile9,
    selectedFile10, setSelectedFile10,
    getProduct_View,
    val, setupValues,



    handlecatergory, handleSubCategoryChange, handleSubCategory3, handleSubCategory4, handleSubCategory5, handleSubCategory6,
    handleSubCategory7, handleSubCategory8, handleSubCategory9, handleFileChange, handleFileChange1, handleFileChange2, handleFileChange3, handleFileChange4, handleFileChange5,
    handleFileChange6, handleFileChange7, handleFileChange8, handleFileChange9, handleFileChange10,
    handlesubmitproducts, frontresp, setfrontresp, handlechangeupdate
  };

  
}
export default Product_Mid