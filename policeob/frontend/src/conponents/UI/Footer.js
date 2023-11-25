import React from 'react'
import logo from "../../assets/images/logo.png"
const Footer = () => {

  const year = new Date().getFullYear();

  const useFullinks =[
    {
      link:"01",
      display:"Staffmail"
    },
    {
      link:"02",
      display:"vacancies"
    },
    {
      link:"03",
      display:"reports"
    },
    {
      link:"04",
      display:"Research"
    }
  ]
  const relatedlinks= [
    {
link:"01",
display:"kenya police service"
    },
    {
      link:"02",
      display:"directorate of criminal investigations"
    },
    {
      link:"03",
      display:"e-Cetizen"
    },
    {
      link:"04",
      display:"administration police"
    }
  ]
  return (
  <section className='pb-15 pt-10 mt-3'>
    <div className='container'>

<div className='flex justify-between flex-col md:flex-row flex-wrap gap-[10px]'>
  <div>
    <img src={logo}  alt='' className='w-[110px] h-[110px] rounded-full cursor-pointer'/>

    <p className='text-[16px leading-7 font-[400] text-gray-400 mt-4 capitalize'>
      Copyright © {year} developed by martin kavindu. All rights reserved
    </p>
  </div>
  <div >
<h2 className='text-blue-600 text-[20px] leading-[30px] font-[700] mb-6'>
  Related links
</h2>
<ul>
  {
    relatedlinks.map((item,index)=><li key={index}>
      {item.display}
    </li>)
  }
</ul>
  </div>
  <div >
<h2 className='text-blue-600 text-[20px] leading-[30px] font-[700] mb-6'>
  Useful links
</h2>
<ul>
  {
    useFullinks.map((item,index)=><li key={index}>
      {item.display}
    </li>)
  }
</ul>
  </div>
  <div >
    <h2 className='text-blue-600 text-[20px] leading-[30px] font-[700]'>Quick Contacts</h2>
    <ul>
    <li>
      Kenya Police Service
    </li>
    <li>
      p.o box 30083,Nairobi
    </li>
    <li>
      Vigilance House,Harambee House
    </li>
    <li>
    Telephone: (020) 341411/6/8
    </li>
    </ul>
  </div>
</div>
    </div>

  </section>
  )
}

export default Footer