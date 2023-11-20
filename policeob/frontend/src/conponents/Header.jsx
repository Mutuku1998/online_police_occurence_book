import React, { useState } from "react";
import { FaBars,FaTimes } from "react-icons/fa";



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
        link:"contact"
        }
    ]
  return (
    <div className="flex justify-center items-center w-full h-20 text-white bg-black fixed">
      <div>
        <h1></h1>
      </div>
      <ul className="hidden md:flex">
        {
            links.map(({link,id})=>(
                <li 
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
               {link}
              </li>

            ))
        }
  
      </ul>

      <div onClick={()=> setNav(!nav)}
      className="cursor-pointer   text-gray-400 z-10 md:hidden pr-60">
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
  );
};

export default Header;
