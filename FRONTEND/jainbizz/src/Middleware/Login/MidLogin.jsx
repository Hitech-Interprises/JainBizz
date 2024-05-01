import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const MidLogin = (Validate) => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [frontresp, setfrontresp] = useState({
        status: 0,
        msg: '',
    });
    const [values, setValues] = useState({
        email_or_phone: '',
        password: ''
    });

    const navigate = useNavigate();

    const handlechange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        setErrors(Validate(values));
    }

    // const handleLogin = () => {
    //     setLoggedIn(false);
    // }


    
    const handlelogin = (e) => {
        e.preventDefault();
        setErrors(Validate(values));

        const email_or_phone = values.email_or_phone;
        const password = values.password;

        if (email_or_phone !== '' && password !== '') {
            axios.post('http://127.0.0.1:8000/app/Login/', { email_or_phone: email_or_phone, password: password })
                .then(function (response) {
                    console.log(response.data);
                    toast.success("Data submitted successfully", {
                        onClose: () => navigate('/BussinessForm')
                    });
                    setIsLoggedIn(true);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert('Required fields missing');
        }
    };

    const showpass = (e) => {
        setShowPassword((prev) => !prev);
    }

    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
    };

    return {
        handlelogin,
        handlechange,
        values,
        frontresp,
        setfrontresp,
        isLoggedIn, setIsLoggedIn,
        // handleLogin,
        handleLogout,
    }
}

export default MidLogin;
