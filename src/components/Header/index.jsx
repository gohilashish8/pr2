import React from 'react'
import Logo from '../Logo'
import NavBar from './NavBar'
import Icons from './Icons'

const index = () => {
    let navtabs = ["Home", "About Us", "Services", "Pages", "Shop", " Blog", "Contect"];
  return (
 <div className="bg-white shadow-2xl">
     <div className="container mx-auto  ">
     <div className="flex flex-row justify-between items-center">
        <Logo img="./images/logo.png"/>
        <NavBar navtabs={navtabs} />
        <Icons/>

     </div>
 </div>
 </div>
  )
}

export default index
