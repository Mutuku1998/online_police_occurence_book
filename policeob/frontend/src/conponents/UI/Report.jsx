import React from 'react'
import {Form, FormGroup} from 'reactstrap'
import '../styles/report.css'
const Report = () => {
  return (
    <Form className='form'>
    <div className='d-flex align-items-center justify-content-between flex-wrap'>

<FormGroup className='form-group'>
<input type='text' placeholder='Fullname' required/>
</FormGroup>
<FormGroup className='form-group'>
<input type='text' placeholder='National Id'/>
</FormGroup>
<FormGroup className='form-group'>
<input placeholder='password'/>
</FormGroup>
<FormGroup className='form-group'>
<button className='btn report-btn'>
Join to report 
</button>
</FormGroup>
    </div>
   </Form>
  )
}

export default Report