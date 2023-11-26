import React, { useState } from "react";
import { MdAccountBox } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { FaBars,FaTimes } from "react-icons/fa";
import logo from "../assets/images/s5_logo.png"
import { Link } from "react-router-dom";



const Header = () => {

    const [nav ,setNav] = useState(false)
    const links =[


        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about us"
        },
        {
            id:3,
            link:"services"
        },
        {
            id:4,
            link:"formations"
        },
        {
            id:5,
            link:"media centre"
        },
        {id:6,
        link:"contact us"
        }
    ]
  return (
    <section>
    <div className="  w-full  ">
      <div className="">
        <img src={logo} alt="" className="w-full h-30 "/>
      </div>

      <div className=" hidden md:flex items-center justify-between w-full h-20 bg-blue-700 ">
      <ul className="hidden  md:flex">
        {
            links.map(({link,id})=>(
                <li 
                key={id}
                className=" mr-5 cursor-pointer capitalize font-medium text-white  hover:scale-105 duration-200">
               {link}
              </li>

            ))
        }
  
      </ul>

      <div className="flex ">
      <Link to="/register"> <span className='flex items-center text-white mx-3 cursor-pointer '> <MdAccountBox size={30} />Register</span> </Link> 
        <span className='flex items-center text-white mx-3 cursor-pointer '> <IoLogInOutline  size={30}/>Login</span>
      </div>
      </div>


      <div onClick={()=> setNav(!nav)}
      className="cursor-pointer px-10  text-gray-400 z-10 md:hidden w-full bg-black">
{
    nav? 
    <FaTimes size={30}/>: <FaBars size={30}/> 
}
      </div>

      {
        nav && (

          
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black  to-gray-800 text-white">
      {
        links.map(({id,link})=>(
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-xl left-0">
            {link}
          </li>
        ))
      }
    </ul>
        )
      }

    </div>
    </section>
  );
};

export default Header;
