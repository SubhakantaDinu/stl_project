

import React from "react";
import { Routes, Route } from "react-router-dom";
import PhotoValidation from "./PhotoValidation";
import Validation from "./Validation";

import  Login  from "./Login";
import  Dashboard  from "./Dashboard";
const App = () =>{
  return(
    <>

<Routes>
<Route path ="/password" element={<Validation />}></Route>
<Route path ="/login" element={<Login />}></Route>
<Route path ="/photovalidation" element={<PhotoValidation />}></Route>
<Route path ="/dashboard" element={<Dashboard />}></Route>
   </Routes>
    </>
  )
}
export default App; 