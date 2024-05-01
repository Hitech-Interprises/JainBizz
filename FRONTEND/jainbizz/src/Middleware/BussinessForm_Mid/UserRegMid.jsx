import React, { useState , Component , setState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import SuccessVedio from '../../Assets/Gif (2).mp4'
import ReactPlayer from 'react-player';

const UserRegMid = (Validate) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('')
    const [Correctmsg, setCorrectmsg] = useState('')
    const [ErrortmsgFassai, setErrortmsgFassai] = useState('')
    const [ErrorMsgiec,setErrorMsgiec] = useState('')
    const [ErrorMsgIso,setErrorMsgIso] = useState('')
    const [ErrorUdym, setErrorUdym] = useState('')
    const [successVideoPlaying, setSuccessVideoPlaying] = useState(false);

    const [values, setValues] = useState({

        gst_check : '',
        fssai_check : '',
        iec_check : '',
        gst_no : '',
        fssai_no : '',
        iec_no : '',
        bussiness_name : '',
        iso_check : '',
        annual_turnover : '',
        address1 : '',
        address2 : '',
        country : '',
        state : '',
        city : '',
        pincode : '',
        taluka : '',
        town_village : '',
        establishment_yrs : '',
        business_email : '',
        business_contact : '',
        business_whatsapp : '',
        alternate_email : '',
        alternate_contact : '',
        company_type:'',
        iso_no:'',
        udyog_adhar_no:'',
        udyog_adhar_check:'',



    });

    const handlechange = (e) => {
        const { name, value } = e.target;

        if (name === 'gst_no') {           
            Check_gst_no(value);           
        }
        if (name === 'fssai_no') {           
            Check_fssai_no(value);           
        }
        if (name === 'iec_no') {           
            Check_iec_no(value);           
        }
        if (name === 'iso_no') {           
            Check_iso_no(value);           
        }
        if (name === 'udyog_adhar_no') {           
            Check_udhaym_no(value);           
        }
        setValues({ ...values, [name]: value });
        setErrors(Validate(values));
        console.log(values)

 


    };


    // ------------------------Validation Function-----------------//

    const Check_gst_no = (value) => {
        if (validator.isLength(value, { min: 15 })) {
            if (validator.isLength(value, { max: 15 })) {
                setErrorMessage(''); // Exactly 15 characters
            } else {
                setErrorMessage('GST number is more than 15 characters long'); // More than 15 characters
            }
        } else {
            setErrorMessage('GST number must be 15 characters long'); // Less than 15 characters
        }

    }

    const Check_fssai_no = (value) => {
        if (validator.isLength(value, { min: 14 })) {
            if (validator.isLength(value, { max: 14 })) {
                setErrortmsgFassai(''); // Exactly 14 characters
            } else {
                setErrortmsgFassai('FSSAI number is more than 14 characters long'); // More than 15 characters
            }
        } else {
            setErrortmsgFassai('FSSAI  number must be 14 characters long'); // Less than 15 characters
        }

    }

    const Check_iec_no = (value) => {
        if (validator.isLength(value, { min: 10 })) {
            if (validator.isLength(value, { max: 10 })) {
                setErrorMsgiec(''); // Exactly 15 characters
            } else {
                setErrorMsgiec('IEC number is more than 10 characters long'); // More than 15 characters
            }
        } else {
            setErrorMsgiec('IEC number must be 10 characters long'); // Less than 15 characters
        }

    }

    const Check_udhaym_no = (value) => {
        if (validator.isLength(value, { min: 10 })) {
            if (validator.isLength(value, { max: 10 })) {
                setErrorUdym(''); // Exactly 15 characters
            } else {
                setErrorUdym('IEC number is more than 10 characters long'); // More than 15 characters
            }
        } else {
            setErrorUdym('IEC number must be 10 characters long'); // Less than 15 characters
        }

    }

    const Check_iso_no = (value) => {
        if (validator.isLength(value, { min: 7 })) {
            if (validator.isLength(value, { max: 7 })) {
                setErrorMsgIso(''); // Exactly 15 characters
            } else {
                setErrorMsgIso('ISO number is more than 7 characters long'); // More than 15 characters
            }
        } else {
            setErrorMsgIso('ISO number must be 7 characters long'); // Less than 15 characters
        }

    }


    // ------------------------Validation Function-----------------//

    
    const handlesubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values));


   
        const gst_check   = values.gst_check;
        const fssai_check   = values.fssai_check;
        const iec_check   = values.iec_check;
        const gst_no   = values.gst_no;
        const fssai_no   = values.fssai_no;
        const iec_no   = values.iec_no;
        const bussiness_name   = values.bussiness_name;
        const iso_check   = values.iso_check;
        const annual_turnover   = values.annual_turnover;
        const address1   = values.address1;
        const address2   = values.address2;
        const country   = values.country;
        const state   = values.state;
        const city   = values.city;
        const pincode   = values.pincode;
        const taluka   = values.taluka;
        const town_village   = values.town_village;
        const establishment_yrs   = values.establishment_yrs;
        const business_email   = values.business_email;
        const business_contact   = values.business_contact;
        const business_whatsapp   = values.business_whatsapp;
        const alternate_email   = values.alternate_email;
        const alternate_contact   = values.alternate_contact;
        const company_type   = values.company_type;
        const iso_no   = values.iso_no;
        const udyog_adhar_check   = values.udyog_adhar_check;
        const udyog_adhar_no   = values.udyog_adhar_no;


         if(gst_check !== '' && fssai_check !== '' && iec_check !== '' &&  bussiness_name !=='' &&  iso_check  !== '' &&  annual_turnover !=='' &&
         address1 !== '' && address2 !==''  &&  country !=='' &&  state !==''  &&  city !==''  &&  pincode  !==''  && taluka !=='' && town_village !=='' &&  establishment_yrs !=='' && business_email !=='' && business_contact !==""  && company_type !== ''&& udyog_adhar_check !== '' ) {
            axios.post('http://127.0.0.1:8000/app/Buissness/', { gst_check: gst_check, fssai_check: fssai_check, iec_check: iec_check, gst_no: gst_no, fssai_no: fssai_no, iec_no : iec_no ,
            bussiness_name: bussiness_name, iso_check: iso_check , annual_turnover: annual_turnover ,  address1: address1 , address2: address2 , country: country , state: state , city: city , pincode: pincode, taluka: taluka,
            town_village: town_village, establishment_yrs: establishment_yrs, business_email: business_email ,  business_contact: business_contact , business_whatsapp: business_whatsapp, alternate_email: alternate_email,  alternate_contact:alternate_contact, company_type:company_type, iso_no:iso_no , udyog_adhar_no:udyog_adhar_no , udyog_adhar_check:udyog_adhar_check})
            .then(function (response) {                    
                // toast.success("Form submitted successfully!");
                setSuccessVideoPlaying(true);
               
                    // navigate('/Add_ProductsDetails')
            
            })
            .catch(function (error) {
                toast.error('Invalid credentials,Please Check!');
                console.log(error);
            });
        } else {
            alert('Required fields missing');
        }
    };

    const handleVideoEnd = () => {
        setSuccessVideoPlaying(false);
        navigate('/Add_ProductsDetails');
    }

    const showpass = (e) => {
        setShowPassword((prev) => !prev);
    };

    return {handlechange, handlesubmit, values,errorMessage, setErrorMessage, Correctmsg, setCorrectmsg ,ErrortmsgFassai, setErrortmsgFassai,ErrorMsgiec,setErrorMsgiec,ErrorMsgIso,setErrorMsgIso,ErrorUdym, setErrorUdym,successVideoPlaying, setSuccessVideoPlaying,handleVideoEnd};
}

export default UserRegMid