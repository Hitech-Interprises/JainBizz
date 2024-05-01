import React,{useState} from "react";
const Validation = (formdata) => {
    const error = {};
    if (!formdata.email_or_phone) {
        error.email_or_phone = "Phone number is required";
    }
    // else if (!/^[A-Z 0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formdata.email_or_phone)) {
    //     error.email_or_phone = "not valid email id *"
    // }
    if (!formdata.password) {
        error.password = "password is required"
    }
    return error;
}
export default Validation