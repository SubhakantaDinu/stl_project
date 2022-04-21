import React from "react";
import {Route,Switch} from "react-router-dom"
import Validation from "./Validation"
const App = () =>{
  return(
    <>
    <Switch>
<Route path ="/password" component={Validation}></Route>
    </Switch>
    </>
  )
}
export default App; 