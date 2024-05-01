import React, { useState } from "react";

const Validation = (formdata) => {
    const error = {};
    if (!formdata.product_name) {
        error.product_name = "product_name   is required";
    }
    
    if (!formdata.features) {
        error.features = "features is required";
    }

    if (!formdata.short_description) {
        error.short_description = "short_description is required"
    }

    if (!formdata.description) {
        error.description = "description is required"
    }
    if (!formdata.warranty_information) {
        error.warranty_information = "warranty_information is required"
    }

    if (!formdata.additional_information) {
        error.additional_information = "additional_information is required"
    }

    if (!formdata.sizes) {
        error.sizes = "sizes is required"
    }

    if (!formdata.offers) {
        error.offers = "offers is required"
    }

    if (!formdata.sku) {
        error.sku = "sku is required"
    }
    // if (!formdata.categories1) {
    //     error.categories1 = "categories1 is required"
    // }
    // if (!formdata.categories2) {
    //     error.categories2 = "categories2 is required"
    // }
    // if (!formdata.categories3) {
    //     error.categories3 = "categories3 is required"
    // }
    // if (!formdata.categories4) {
    //     error.categories4 = "categories4 is required"
    // }
    // if (!formdata.categories5) {
    //     error.categories5 = "categories5 is required"
    // }
    // if (!formdata.categories6) {
    //     error.categories6 = "categories6 is required"
    // }
    // if (!formdata.categories7) {
    //     error.categories7 = "categories7 is required"
    // }
    // if (!formdata.categories8) {
    //     error.categories8 = "categories8 is required"
    // }
    // if (!formdata.categories9) {
    //     error.categories9 = "categories9 is required"
    // }
    if (!formdata.price) {
        error.price = "price is required"
    }
    // if (!formdata.images1) {
    //     error.images1 = "images1 is required"
    // }
    // if (!formdata.images2) {
    //     error.images2 = "images2 is required"
    // }
    // if (!formdata.images3) {
    //     error.images3 = "images3 is required"
    // }
    // if (!formdata.images4) {
    //     error.images4 = "images4 is required"
    // }
    // if (!formdata.images5) {
    //     error.images5 = "images5 is required"
    // }
    if (!formdata.variants) {
        error.variants = "variants is required"
    }
    if (!formdata.brand) {
        error.brand = "brand is required"
    }
    if (!formdata.specifications) {
        error.specifications = "specifications is required"
    }
    if (!formdata.reviews_ratings) {
        error.reviews_ratings = "reviews_ratings is required"
    }
    if (!formdata.date) {
        error.date = "date is required"
    }

    if (!formdata.related_products) {
        error.related_products = "related_products is required"
    }
    if (!formdata.product_link) {
        error.product_link = "product_link is required"
    }
    if (!formdata.product_options) {
        error.product_options = "product_options is required"
    }
    if (!formdata.product_availability) {
        error.product_availability = "product_availability is required"
    }
    if (!formdata.productweight_dimensions) {
        error.productweight_dimensions = "productweight_dimensions is required"
    }
    if (!formdata.measurement_units) {
        error.measurement_units = "measurement_units is required"
    }
    if (!formdata.assembly_installation) {
        error.assembly_installation = "assembly_installation is required"
    }

    if (!formdata.others_deatils) {
        error.others_deatils = "others_deatils is required"
    }
    return error;
}
export default Validation