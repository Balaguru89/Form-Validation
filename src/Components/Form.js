import React from 'react'
import {useForm} from 'react-hook-form'
import *as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {Link} from 'react-router-dom'
import './style.css'

const phoneRegExp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
const state = /^[A-Za-z]+$/

const schema = yup.object().shape({
    fullName: yup.string().required('Enter name').min(4,'Min 4 chars').matches(state, 'Enetr Valid name'),
    dob: yup.string().required('select Date of Birth'),
    email: yup.string().email().required('Enter valid email'),
    mobileNumber: yup.string().matches(phoneRegExp,"Mobile no is not valid").required('Enter valid Mobile number'),
    gender: yup.string().required('Select Gender').max(6, 'Select Gender'),
    occupation: yup.string().required('Enetr occupation').matches(state, 'Enetr Valid occupation'),
    idType: yup.string().required('Select ID Type').max(8, 'Select ID Type'),
    idNumber: yup.number().integer().positive().required('Enetr ID number'),
    issue: yup.string().required('Enetr Issue Authority').matches(state, 'Enetr Valid detail'),
    issueDate: yup.string().required('Enetr issue date'),
    issueState: yup.string().required('Enetr State Name').matches(state, 'Enetr Valid State name'),
    expiryDate: yup.string().required(('Enetr expiry date'))
} )

const Forms = () => {
    
    const {register, handleSubmit, formState: {errors, isValid, isDirty} } = useForm({
        resolver:yupResolver(schema),
        mode: 'onChange'
      });
    
    return (
    <div className="Form">    
    <div className="container bg-primary bg-opacity-75 mt-3 p-3">
        <div className="container bg-white my-3 px-5 pb-3 w-75">
            <h2 className="pt-3 mb-3 col-1 border-bottom border-primary border-3 ">Registration</h2>
            
            <h6 className="text-secondary mt-3">Personal Details</h6>
      <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
        
        <div className="row">
            <div className="col-lg-4">    
            <label className="mb-1">Full Name </label> <br />
            <input className="rounded w-100 ps-3" {...register('fullName')} placeholder="Enter FullName"/>
            <p className="text-danger">{errors.fullName?.message}</p>
            </div>
        
            <div className="col-lg-4">    
            <label className="mb-1">Date of Birth </label> <br />
            <input className="rounded w-100 ps-3" {...register('dob')} placeholder="Date of birth"
            type="date" />
            <p className="text-danger">{errors.dob?.message}</p>
            </div>
        
            <div className="col-lg-4">    
            <label className="mb-1">Email </label> <br />
            <input className="rounded w-100 ps-3" {...register('email')} placeholder="Enter your Email"
            type="email" />
            <p className="text-danger">{errors.email?.message}</p>
            </div>
        </div>
        
        <div className="row">
            <div className="col-lg-4">    
            <label className="mb-1">Mobile Number </label> <br />
            <input className="rounded w-100 ps-3" {...register('mobileNumber')} placeholder="Enter Mobile Number"
            />
            <p className="text-danger">{errors.mobileNumber?.message}</p>
            </div>
        
            <div className="col-lg-4">    
            <label className="mb-1"> Gender </label> <br />
           
            <select className="rounded w-100 ps-3 pb-1" {...register('gender',{ required: true })} >
            <option>Select Gender...</option>
            <option>Male</option>
            <option>Female</option>
            </select>    
            <p className="text-danger">{errors.gender?.message}</p>
            </div>
        
            <div className="col-lg-4">    
            <label className="mb-1">Occupation </label> <br />
            <input className="rounded w-100 ps-3" {...register('occupation')} placeholder="Enter your Occupation"
            type="text" />
            <p className="text-danger">{errors.occupation?.message}</p>
            </div>
        </div>
      
        <h6 className="text-secondary">Identity Details</h6>
        
        <div className="row">
            <div className="col-lg-4">    
            <label className="mb-1">ID Type </label> <br />
            <select className="rounded w-100 ps-3 pb-1" {...register('idType')} >
            <option>Select Id Type....</option>
            <option>Aadhar</option>
            <option>License</option>
            <option>PAN</option>
            <option>Passport</option>
            </select>
            <p className="text-danger">{errors.idType?.message}</p>
            </div>
        
            <div className="col-lg-4">    
            <label className="mb-1">ID Number </label> <br />
            <input className="rounded w-100 ps-3" {...register('idNumber')} placeholder="Enter Id Number"
            type="number" />
            <p className="text-danger">{errors.idNumber?.message}</p>
            </div>
        
            <div className="col-lg-4">    
            <label className="mb-1">Issue Athority </label> <br />
            <input className="rounded w-100 ps-3" {...register('issue')} placeholder="Enter issue Athority"
            type="text" />
            <p className="text-danger">{errors.issue?.message}</p>
            </div>
        </div>
        
        <div className="row">
            <div className="col-lg-4">    
            <label className="mb-1">Issue Date </label> <br />
            <input className="rounded w-100 ps-3" {...register('issueDate')} 
            placeholder="Enter issue Date" type="date"/>
            <p className="text-danger">{errors.issueDate?.message}</p>
            </div>
        
            <div className="col-lg-4">    
            <label className="mb-1"> Issue State </label> <br />
           
            <input className="rounded w-100 ps-3" {...register('issueState')} placeholder="Enter issue State"/>
            <p className="text-danger">{errors.issueState?.message}</p>
            </div>
        
            <div className="col-lg-4">    
            <label className="mb-1">Expiry Date </label> <br />
            <input className="rounded w-100 ps-3" {...register('expiryDate')} placeholder="Enter Expiry Date"
            type="date" />
            <p className="text-danger">{errors.expiryDate?.message}</p>
            </div>
        </div>
        
            
         <Link to="/home"> 
            <button className=" mb-1 rounded  text-white bg-primary border border-3 border-primary w-25 py-1 " type="submit" disabled={!isValid  } >Register</button>  
         </Link> <br/> 
         { isDirty&&!isValid ? <p className="text-danger"> Please fill all details valid to register </p> : ''}   
    </form>
</div>
</div>
</div>
  )
}

export default Forms
