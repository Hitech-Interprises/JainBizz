import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Service_CURD = () => {
    const[data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const[deletedata, setDeleteDatas] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getServiceList();

    }, []);

    const getServiceList = async () => {
        try {
          const res = await axios.post("http://127.0.0.1:8000/app/Service_List/", { userid: 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc' });
          setData(res.data);
          console.log(res.data,"000000000006778")
        } catch (err) {
          console.log(err);
        }
    };

    const getService_Delete = async (service_id) => {
        try {
            const formData = new FormData();
            formData.append('userid', 'bf986e4e-1d89-42ed-b49d-491ebbbcb4dc');
            formData.append('allservice_id', service_id);
    
            console.log(formData)
    
            const res = await axios.post("http://127.0.0.1:8000/app/Service_Deleted/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
                
            });
            setData(data.filter(item => item.service_id !== service_id));
            console.log(data,"+++++&&&")
            toast.success('Row deleted successfully.');
            setDeleteDatas(res.data);
           
            
        } catch (err) {
        //   if (err.response) {            
        //       console.log(err.response.data);
        //       console.log(err.response.status);
        //       console.log(err.response.headers);
        //       // toast.error('Server Error. Please try again later.');
        //   } else if (err.request) {
             
        //       console.log(err.request);
        //       // toast.error('No response from server. Please check your internet connection.');
        //   } else {
        //       // Something happened in setting up the request that triggered an Error
        //       console.log('Error', err.message);
        //       // toast.error('Something went wrong. Please try again later.');
        //   }
          console.log(err);
      }
      };


    const getProduct_View = async (allservice_id) => {
        console.log(allservice_id, '=====================================');
        navigate(`/UpdateService/?allservice_id=${allservice_id}`);
    
    };

      

  return {getServiceList, data, setData, getProduct_View, getService_Delete}
}

export default Service_CURD
