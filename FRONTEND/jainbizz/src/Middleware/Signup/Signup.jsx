import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'


const Signup = (Validate) => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('')
    const [formError, setFormError] = useState('') 
    const [frontresp,setfrontresp] = useState({
        status:0,msg:'',
    });

    const [values, setValues] = useState({
        usertype:'',
        fullname:'',
        email:'',
        mobile:'',
        password:''
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            
            validate(value);
           
           
        }

        setValues({ ...values, [name]: value });
        setErrors(Validate(values));
            
    };



    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Strong Password');
        } else {
            setErrorMessage('Weak Password');
        }
    };
    
    const handlesubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values));
         
         const usertype = values.usertype;
         const fullname=values.fullname;
         const email=values.email;
         const mobile= values.mobile;
         const passsword=values.password;


         if(usertype !== '' && fullname !== '' && email !== '' && mobile !== '' && passsword !== '') {
            axios.post('http://127.0.0.1:8000/app/Signup/', { usertype: usertype, fullname: fullname, email: email, mobile: mobile, password: passsword })
            .then(function (response) {
                console.log(response.data);
                toast.success("Data submitted successfully",{
                    onClose: () => navigate('/login')
                })
            })
            .catch(function (error) {
                toast.error("Invalid Credentails,please check ")
                console.log(error);
            });
        } else {
            alert('Required fields missing');
            setFormError(true);
        }
    };

    const showpass = (e) => {
        setShowPassword((prev) => !prev);
    };

    return { handlechange, handlesubmit,errorMessage,formError, values,frontresp, setfrontresp };
};

export default Signup;
