
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

let arrObj = [
  {title:"Tab 1" , content:"This is the content for Tab 1."},
  {title:"Tab 2" , content:"This is the content for Tab 2."},
  {title:"Tab 3" , content:"This is the content for Tab 3."}
]
const App = () => {


  return (
    <div>
      <Tabs arr={arrObj}/>
    </div>
  )
}

export default App
