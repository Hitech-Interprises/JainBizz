import React,{useState} from "react";

const Validate = (formdata) => {
    const error = {};
    if (!formdata.usertype) {
        error.usertype = "username   is required";
    }
    if (!formdata.fullname) {
        error.fullname = "username   is required";
    }
     if (!/^[A-Z 0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formdata.email)) {
        error.email = "not valid email id *"
    }
     if (!formdata.mobile) {
        error.mobile = "mobile is required"
    }
    
    if (!formdata.password) {
        error.password = "password is required"
    }
    return error;
}
export default Validate