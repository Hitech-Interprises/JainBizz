import React,{useState} from "react";



const Validate = (formdata) => {
    const error = {};
    if (!formdata.gst_check) {
        error.gst_check = "gst_check   is required";
    }
    if (!formdata.fssai_check) {
        error.fssai_check = "fssai_check is required";
    }

     if (!formdata.iec_check) {
        error.iec_check = "iec_check is required"
    }
    
    // if (!formdata.gst_no) {
    //     error.gst_no = "gst_no is required"
    // }
    // if (!formdata.fssai_no) {
    //     error.fssai_no = "fssai_no is required"
    // }
    // if (!formdata.iec_no) {
    //     error.iec_no = "iec_no is required"
    // }

    // if (!formdata.iso_no) {
    //     error.iso_no = "iso_no is required"
    // }

    if (!formdata.company_type) {
        error.company_type = "company_type is required"
    }
    if (!formdata.bussiness_name) {
        error.bussiness_name = "bussiness_name is required"
    }
    if (!formdata.iso_check) {
        error.iso_check = "iso_check is required"
    }
    if (!formdata.annual_turnover) {
        error.annual_turnover = "annual_turnover is required"
    }
    if (!formdata.address1) {
        error.address1 = "address1 is required"
    }
    if (!formdata.address2) {
        error.address2 = "address2 is required"
    }
    if (!formdata.country) {
        error.country = "country is required"
    }
    if (!formdata.state) {
        error.state = "state is required"
    }
    if (!formdata.city) {
        error.city = "city is required"
    }
    if (!formdata.pincode) {
        error.pincode = "pincode is required"
    }

    if (!formdata.taluka) {
        error.taluka = "taluka is required"
    }
    if (!formdata.town_village) {
        error.town_village = "town_village is required"
    }
    if (!formdata.establishment_yrs) {
        error.establishment_yrs = "establishment_yrs is required"
    }
    if (!formdata.business_email) {
        error.business_email = "business_email is required"
    }
    if (!formdata.business_contact) {
        error.business_contact = "business_contact is required"
    }
    if (!formdata.business_whatsapp) {
        error.business_whatsapp = "business_whatsapp is required"
    }
    // if (!formdata.alternate_email) {
    //     error.alternate_email = "alternate_email is required"
    // }

    if (!formdata.alternate_contact) {
        error.alternate_contact = "alternate_contact is required"
    }
    if (!formdata.udyog_adhar_check) {
        error.udyog_adhar_check = "udyog_adhar_check is required"
    }
    // if (!formdata.udyog_adhar_no) {
    //     error.udyog_adhar_no = "udyog_adhar_no is required"
    // }
    return error;
}
export default Validate