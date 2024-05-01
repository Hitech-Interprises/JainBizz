import React from "react";
import Home from "./Pages/Sigup-In/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/Sigup-In/Login";
import Registeration from "./Pages/Sigup-In/Registeration";
import BussinessForm from "./Pages/User/BussinessForm";
import Add_ProductsDetails from "./Pages/Products/Add_ProductsDetails";
import Viewproducts from "./Tables/Viewproducts";
import UpdateProducts from "./Pages/Products/UpdateProducts";
import Terms1 from "./Components/Terms1";
import NewUpdateProd from "./Pages/Products/NewUpdateProd";
import Add_Service from "./Pages/Service/Add_Service";
import Dashboard from "./Components/Dashboard";
import ViewSerivces from "./Tables/ViewSerivces";
import UpdateService from "./Pages/Service/UpdateService";
import Forgot from "./Components/Forgot";
import Dashboard1 from "./Components/Dashboard/Dashboard";
import MainDashboard from "./Components/Dashboard/MainDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Login />} />
        <Route path="/SignUp" element={<Registeration />} />
        <Route path="/BussinessForm" element={<BussinessForm />} />
        <Route path="/Add_ProductsDetails" element={<Add_ProductsDetails />} />
        <Route path="/Viewproducts" element={<Viewproducts />} />
        <Route path="/UpdateProducts" element={<UpdateProducts />} />
        <Route path="/NewUpdateProd" element={<NewUpdateProd />} />
        <Route path="/Add_Service" element={<Add_Service />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ViewSerivces" element={<ViewSerivces />} />
        <Route path="/UpdateService" element={<UpdateService />} />
        <Route path="/Forgot" element={<Forgot />} />

     
        <Route path="/Dashboard1" element={<Dashboard1 />} />
        <Route path="/MainDashboard" element={<MainDashboard />} />
        </Routes>
    </BrowserRouter>  
  );
}

export default App;