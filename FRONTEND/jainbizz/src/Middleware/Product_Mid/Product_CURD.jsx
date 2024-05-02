import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Product_CURD = () => {
    const[data, setData] = useState([])
    const[deletedata, setDeleteDatas] = useState([])
    const [successMessage, setSuccessMessage] = useState('');
    const [category, setcategory] = useState({});
    const [updateProduct, setupdateProduct] = useState('')
    const [allProducts, setAllProducts] = useState('')
    

    const navigate = useNavigate()

    useEffect(() => {
        getProduct_List();
      }, []);

    const getProduct_List = async () => {
        try {
          const res = await axios.post("http://127.0.0.1:8000/app/Product List/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874' });
          setData(res.data);
          console.log(res.data,"000000000006778")
        } catch (err) {
          console.log(err);
        }
      };
    

      const getProduct_Delete = async (allproduct_id) => {
        try {
            const formData = new FormData();
            formData.append('userid', 'be5a6874-83f4-4c58-9c89-2b0918b3f874');
            formData.append('allproduct_id', allproduct_id);

            console.log(formData)
    
            const res = await axios.post("http://127.0.0.1:8000/app/Product Deleted/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
            });
            setData(data.filter(item => item.allproduct_id !== allproduct_id));
            console.log(data,"+++++&&&")
            toast.success('Row deleted successfully');    
            setDeleteDatas(res.data);
        } catch (err) {
            console.log(err);
        }
    };


    const getCategoryname= async (cate_id) =>{

      console.log(cate_id,"666666666666666666")
      try{

        const res = await axios.post("http://127.0.0.1:8000/app/SelectedProduct Page/", { userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', cate_id:cate_id });
        setcategory(res.data)
        console.log(res.data,"+++++++")

      }catch (err) {
          console.log(err);
        }

    }



  //   const getProduct_View = async (allproduct_id) => {
  //     console.log(allproduct_id, '=====================================');
  //     try {
  //         const formData = new FormData();
  //         formData.append('userid', 'be5a6874-83f4-4c58-9c89-2b0918b3f874');
  //         formData.append('allproduct_id', allproduct_id);

  //         const config = {
  //             headers: {
  //                 'Content-Type': 'multipart/form-data',
  //             },
  //         };

  //         navigate(`/UpdateProducts/?allproduct_id=${allproduct_id}`);
  //         const res = await axios.post('http://127.0.0.1:8000/app/Product View-EditPage/', formData, config);
  //         console.log(res.data, '77777755433');
  //         const productName = res.data[0]['product_name'];
  //         setValues({ ...values, product_name: res.data[0]['productName'] });
  //         console.log(res.data[0]['product_name']);
  //         setAllProducts(res.data);
  //         console.log(values, ']]]]]]]]]');
  //     } catch (err) {
  //         console.log(err);
  //     }
  // };


    // const UpdateProduct= async (allproduct_id) => {
    //   console.log("|||||||||||||||||||")
      
    //   try{
    //     navigate(`/UpdateProducts/`);
       
    //     // const res = await axios.post("http://127.0.0.1:8000/app/Product Update/",{userid: 'be5a6874-83f4-4c58-9c89-2b0918b3f874', product_id:allproduct_id });
    //     setupdateProduct(res.data)
       
    //     console.log(res.data,"++++++UPPPPDDDAAATEEE+")

    //   }catch (err) {
    //       console.log(err);
    //     }     

    // }
        

  return {
    data,
    setData,
    getProduct_Delete,
    getCategoryname
    // getProduct_View,
    // values, setValues
  }
}

export default Product_CURD
