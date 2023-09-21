import React, { useState } from 'react';
import './FormValidation.css';
// import data from './CountryState.json';
// import state from './CountryState.json'

const FormValidation = () => {
  const [values,setValues] = useState(
    {
        fullName: "",
        email: "",
        phone: "",
        password: "",
    }
  )
  const [submitted, setSubmitted] = useState(false)
  const [success,setSuccess] = useState(false)
  const [valid,setValid] = useState(false)
  const handleFullName = (e) =>{
    setValues({...values, fullName: e.target.value});
  }
  const handleEmail = (e) =>{
    setValues({...values, email: e.target.value});
  }
  const handlePhone = (e) =>{
    setValues({...values, phone: e.target.value});
  }
  const handlePassword = (e) =>{
    setValues({...values, password: e.target.value});
  }
  const submitHandle = (e) =>{
    e.preventDefault();
    if( values.fullName && values.email && values.phone && values.password ){
        setSuccess(true);
        setValid(true);
        setValues({
            fullName: e.target.reset(),
            email : e.target.reset(),
            phone: e.target.reset(),
            password: e.target.reset()
        })
    }
    setSubmitted(true);
  }
  return (
    <div>
        <div className='form-wrapper'>
            <h1>Register Yourself Today!</h1>
            
            <form onSubmit={submitHandle}>
                {submitted && success && valid ? <span>Form Submitted Successfully</span> : null}
                <p>Please fill the details below.</p>
                <div>
                    <input type='text' placeholder='Please Enter Full Name' value={values.fullname} name='fullName' onChange={handleFullName}/>
                    {submitted && !values.fullName && !success ? <p>This Field is required</p> : null}
                </div>
                <div>
                    <input type='email' placeholder='Please Enter Email Address' value={values.email} name='email' onChange={handleEmail}/>
                    {submitted && !values.email  && !success ? <p>This Field is required</p> : null}
                </div>
                <div>
                    <input type='phone' placeholder='Please Enter Phone Number' value={values.phone} name='phone' onChange={handlePhone}/>
                    {submitted && !values.phone  && !success ? <p>This Field is required</p> : null}
                </div>
                <div>
                    <input type='password' placeholder='Please Enter Password' value={values.password} name='password' onChange={handlePassword}/>
                    {submitted && !values.password  && !success ? <p>This Field is required</p> : null}
                </div>
                <input type='submit'/>
            </form>
        </div>
    </div>
  )
}

export default FormValidation;