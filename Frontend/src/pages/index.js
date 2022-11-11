import React from "react"
import Login from "#components/pages/Login.js"
import AboutUs from  "#components/pages/AboutUs.js"

export default function index() {
  const isLogin = false 

    return (
      <React.Fragment>
        {isLogin ? <Login/> : <AboutUs/>}
      </React.Fragment>
    );
  
}

// still works despite importing from twin.macro
