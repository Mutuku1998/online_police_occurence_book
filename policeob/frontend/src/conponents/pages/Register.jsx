import React from "react";
import {Link } from 'react-router-dom'
import img from "../../assets/images/D.jpeg"
import head from "../../assets/images/s5_logo.png"
const Register = () => {
  return (
    <section className="px-5 xl:px-0">
        <div > 
            <img src={head} alt="" className="h-20 w-full"/>
        </div>
      <div className="max-w-[1170px] max-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-blue-300 rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={img} alt="" className="w-full h-[700px] rounded-l-lg" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-blue-600 text-[22px] leading-7 font-bold mb-10">
               Create an <span className="text-orange-400">account</span> 
            </h3>

            <form>
                <div className="mb-3">
                    <input type="text" placeholder="Full name"
                    className="w-full py-3 border-b border-solid border-[#0066ff61]
                    focus:outline-none focus:border-b-blue-300 text-[17px] leading-7
                    text-gray-600 
                    placeholder:text-gray-500 cursor-pointer " required/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="National ID"
                    className="w-full py-3 border-b border-solid border-[#0066ff61]
                    focus:outline-none focus:border-b-blue-300 text-[17px] leading-7
                    text-gray-600
                    placeholder:text-gray-500 cursor-pointer " required/>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Email address"
                    className="w-full py-3 border-b border-solid border-[#0066ff61]
                    focus:outline-none focus:border-b-blue-300 text-[17px] leading-7
                    text-gray-600
                    placeholder:text-gray-500 cursor-pointer " required/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Home county"
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

                <div className='flext items-center justify-between'>
                    <label className="text-[16px] px-1" > Upload profile:</label>
                    <input type="file" />
<label htmlFor='' className='text-black text-bold text-[16px] leading-7'>
Are you a :
<select

className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3
focus:outline-none'>
  <option value="patient">Reporter</option>
  <option value="doctor">Officer</option>

</select>
</label>
<label htmlFor='' className='text-headingColor text-bold text-[16px] leading-7 mx-2 lg:mx-11'>
Gender:
<select
name='gender'
className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 
focus:outline-none'>
  <option value="">select</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
</label>
  </div>
  <div className='mt-7'>
  <button
  type="submit"
 
  className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
> Sign up
</button>

    <p className='mt-3 text-textColor text-center'> Already have an account?
   <Link to = '/login' className='text-primaryColor font-semibold'>Login here!</Link>
   </p>
  </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
