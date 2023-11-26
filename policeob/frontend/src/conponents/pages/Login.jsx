import React from "react";
import {Link } from 'react-router-dom'
import img from "../../assets/images/D.jpeg"
import head from "../../assets/images/s5_logo.png"
const Login = () => {
  return (
    <section className="px-5 xl:px-0">
        <div className="hdidden md:w-full" > 
            <img src={head} alt="" className="h-20 w-full"/>
        </div>
      <div className="max-w-[1170px] max-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-blue-300 rounded-l-lg mt-10">
            <figure className="rounded-l-lg">
              <img src={img} alt="" className="w-full h-[700px] rounded-[5px]" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-blue-600 text-[22px] leading-7 font-bold mb-10">
               Good to see  <span className="text-orange-400">you again 👋</span> 
            </h3>

            <form>
              
        
                <div className="mb-3">
                    <input type="email" placeholder="Email address"
                    className="w-full py-3 border-b border-solid border-[#0066ff61]
                    focus:outline-none focus:border-b-blue-300 text-[17px] leading-7
                    text-gray-600
                    placeholder:text-gray-500 cursor-pointer " required/>
                </div>
             
                <div className="mb-3">
                    <input type="password" placeholder="Password"
                    className="w-full py-3 border-b border-solid border-[#0066ff61]
                    focus:outline-none focus:border-b-blue-300 text-[17px] leading-7
                    text-gray-600
                    placeholder:text-gray-500 cursor-pointer " required/>
                </div>

  
  <div className='mt-7'>
  <button
  type="submit"
 
  className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
> Login
</button>

    <p className='mt-3 text-textColor text-center'> Don't have an account 
   <Link to = '/register' className='text-primaryColor font-semibold'>Register here!</Link>
   </p>
  </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
