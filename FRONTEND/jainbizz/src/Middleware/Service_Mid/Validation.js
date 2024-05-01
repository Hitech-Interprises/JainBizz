import React, { useState } from "react";

const Validation = (formdata) => {
    const error = {};
    if (!formdata.service_name) {
        error.service_name = "service_name   is required";
    }
    
    if (!formdata.service_availability) {
        error.service_availability = "service_availability is required";
    }

    if (!formdata.service_type) {
        error.service_type = "service_type is required"
    }

    if (!formdata.target_audience) {
        error.target_audience = "target_audience is required"
    }
    if (!formdata.keywords_tags) {
        error.keywords_tags = "keywords_tags is required"
    }

    if (!formdata.images) {
        error.images = "images is required"
    }

    if (!formdata.vedio) {
        error.vedio = "vedio is required"
    }

    if (!formdata.terms_conditions) {
        error.terms_conditions = "terms_conditions is required"
    }

    if (!formdata.payment_opt) {
        error.payment_opt = "payment_opt is required"
    }

    if (!formdata.discounts_promo) {
        error.discounts_promo = "discounts_promo is required"
    }

    if (!formdata.related_services) {
        error.related_services = "related_services is required"
    }
    if (!formdata.custom_fields) {
        error.custom_fields = "custom_fields is required"
    }
    // if (!formdata.categories ) {
    //     error.categories  = "categories  is required"
    // }
   
    return error;
}
export default Validation