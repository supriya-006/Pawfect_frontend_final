
import React from "react";
// import Homepage from "../Homepage";
// import Layouts from "./layouts/Layouts";
// import Help from "./Help";
// import Signup from "./Signup";
// import Forget_password from "./Forget_password";
// import Reset_password from "./Reset_password";
// import Login from "./Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Layouts from "./layouts/Layouts";
import Homepage from "../Homepage";
import Forget_password from "./Forget_password";
import Help from "./Help";
import Reset_password from "./Reset_password";
import Adopt from "../Pages/Admin/Adopt";
import Category from "../Pages/Admin/Category";
import AddCategory from "../Pages/Admin/AddCategory";
import EditCategory from "../Pages/Admin/EditCategory";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layouts />}>
        <Route path="/home" element={<Homepage/>}/>
          <Route path="/" element={<Homepage />} />
          <Route path="/forget_password" element={<Forget_password />} />
          <Route path="/reset_password" element={<Reset_password/>} />
          <Route path="/help" element={<Help />} />
          <Route path="/adopt" element={<Adopt/>}/>

          <Route path='category' element={<Category/>}/>
          <Route path='category/new' element={<AddCategory/>}/>
         <Route path='category/:id' element={<EditCategory/>}/> 
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes
