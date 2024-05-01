import React from 'react';
import './Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
    return (
        <div className='container-fuild'>
            <section class="search-sec">
                {/* <div class="container"> */}
                    <form action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-lg-12 w-full">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-12  w- m-auto ">
                                        <input type="text" class="form-control search-slt" placeholder="Enter Pickup City" />
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 m-1rem ">
                                        <input type="text" class="form-control search-slt" placeholder="Enter Drop City" />
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 m-auto ">
                                        <select class="form-control search-slt" id="exampleFormControlSelect1">
                                            <option>Select Your City</option>
                                            <option>Mumbai</option>
                                            <option>Pune</option>
                                            <option>Kalyan</option>
                                            <option>Palghar</option>
                                            <option>Panvel</option>
                                            <option>churchgate</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 m-0">
                                        <button type="button" class="btn wrn-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                {/* </div> */}
            </section>

        </div>
    )
}

export default Search