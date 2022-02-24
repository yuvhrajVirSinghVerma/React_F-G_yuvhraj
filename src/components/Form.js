import React,{useEffect, useState,useRef} from 'react'
import { NavBar } from './NavBar'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



export const Form = () => {
  // =================ALL STATES======================
  let[Data,setData]=useState(JSON.parse(localStorage.getItem('feedback'))||[])
  let[isSubmit,setisSubmit]=useState(false)
  let[AllfieldRequired,setAllfieldRequired]=useState(false)
  let[allValues,setallValues]=useState({name:'',email:'',phone:'',text:'',vote:''})
  let[radiochecked,setradiochecked]=useState({checked:false})
  let[errors,setErrors]=useState({})
  let[success,setsuccess]=useState(false)
  // ==================Handle Inputs=======================
function handlechange(e){
  setallValues({...allValues,[e.target.name]:e.target.value })
}

  // ==================Handle Radio button======================
function handleRadiochange(e){
  setradiochecked({radiochecked:e.target.checked})
}


  // ==================Handle Submit=======================
 function handlesubmit(){
   setErrors(Validate(allValues,radiochecked))
}

// =====================Validating Inputs===================
function Validate(values,radiochecked){
    let error={}
    let Emailre=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    let phonere=/^[6-9]\d{9}$/gi

    if(radiochecked.checked==false){
      error.radio='Vote is required'
    }
      if(!values.name){
        error.name='name is required'
      }else if(values.name.length<4){
        error.name='Name should be more Than 4 Characters'
      }
  
      if(!values.email){
        error.email='email is required'
      }else if(!Emailre.test(values.email)){
        error.email='This email is not valid'
      }
  
      if(!values.phone){
        error.phone='phone is required'
      }else if(!phonere.test(values.phone)){
        error.phone='Incorrect phone number'
      }
      else if(values.phone.length>10){
        error.phone='phone number cannot exceed 10 digits'
      }
  
      if(!values.text){
        error.text='text is required'
      }
      

      if(Object.keys(error).length==5){
        setAllfieldRequired(true)
      }
      else{
        setAllfieldRequired(false)
      }
    return error
  }
  

// ========================Making useffect to skip its execution when page reloads==================
  let didmount=useRef(false)
  useEffect(()=>{
    if(didmount.current)Store()
    else didmount.current=true
  },[errors])

  function Store(){
  
    if(Object.keys(errors).length==0){
      UpdateDataState()
    } }



 // ========================Updating the Data state ========================
function UpdateDataState(){
 
  setData([...Data,allValues])
  setsuccess(true)
  setTimeout(() => {
    setsuccess(false)
  }, 1000);

// after form submission empty all input values
let inputs=[...document.querySelectorAll('input')]
  inputs.map((i)=>{
    if(i.checked){
      i.checked=false
    }
    i.value=''
           
  })
}
//==================storing data in localstorage==================
useEffect(()=>{
    window.localStorage.setItem('feedback',JSON.stringify(Data))
  },[Data])

  

  return (
     <div className='h-screen bg-slate-100'>
      <div className='ml-10 mr-10 h-5/6 py-8 '>
        <NavBar/>

      <h1 className='text-blue-700'>Aromatic Bar</h1>
      <span className='text-sm'>We are committed to providing you with the best
dining experience possible, so we welcome your comments. Please fill
out this questionnaire. Thank you.</span>

      <div className='bg-white h-full '>
       <div className='grid grid-cols-2 ml-10'>
{/* ===================TEXT FIELD ========================= */}
        <div className='my-4'>
          <div>Text Field</div>
          <input type='text' placeholder='Hello |' 
          name='text'
          className='text border-2 w-3/4 focus:border-2 focus:border-purple-400 outline-none focus:shadow-md focus:shadow-purple-200'
          onChange={(e)=>{
            handlechange(e)
          }}
          />
          {AllfieldRequired?'':<p className='p text-rose-600'>{errors.text}</p>}
          </div>
{/* ===================EMAIL FIELD ========================= */}

          <div className='my-4'>
          <div>Email Field</div>
          
          <input type='mail'
          name='email'
          className='mail border-2 w-3/4 p-0 focus:border-2 focus:border-purple-400 outline-none focus:shadow-md focus:shadow-purple-200'
          onChange={(e)=>{
            handlechange(e)
          }}
          />
          {AllfieldRequired?'':<p className='p text-rose-600'>{errors.email}</p>}
          </div>
{/* ===================PHONE FIELD ========================= */}

          <div className='my-4'>
          <div>Phone Field</div>
          <input id="number" type='number' 
          name='phone'
          className='number border-2 w-3/4 focus:border-2 focus:border-purple-400 outline-none focus:shadow-md focus:shadow-purple-200'
          onChange={(e)=>{
            handlechange(e)
          }}
          />
          {AllfieldRequired?'':<p className='p text-rose-600'>{errors.phone}</p>}
          </div>
{/* ===================RADIO FIELD===================== */}
          <div className='my-4'>
          <div>Radio Field</div>
          <div className='flex w-64 justify-items-center justify-evenly items-center'>

              <div>
                <input id='excellent'type='radio' name='vote' value='Excellent' className='border-2 border-violet-400 w-6'
                onChange={(e)=>{
                  handlechange(e)
                  handleRadiochange(e)
                  
                }}
                />
                <label htmlFor='excellent'>Excellent</label>
              </div>

              <div>
                <input id='good'type='radio' name='vote' value='Good' className='border-2 border-violet-400 w-6 '
                  onChange={(e)=>{
                  handlechange(e)
                  handleRadiochange(e)
                  }}
                />
                <label htmlFor='good'>Good</label>
              </div>

              <div>
                <input id='fair'type='radio' name='vote' value='Fair' className='border-2 border-violet-400 w-6'
                  onChange={(e)=>{
                  handlechange(e)
                  handleRadiochange(e)
                  }}
                />
                <label htmlFor='fair'>Fair</label>
              </div>

              <div>
                <input id='bad'type='radio' name='vote' value='Bad' className='border-2 border-violet-400 w-6 '
                  onChange={(e)=>{
                  handlechange(e)
                  handleRadiochange(e)
                  }}
                />
                <label htmlFor='bad'>Bad</label>
              </div>

              </div>
              {AllfieldRequired?'':<p className='p text-rose-600'>{errors.radio}</p>}
          </div>
{/* =======================NAME============================ */}
          <div className='mt-10'>
          <div>Name <span className='text-rose-600'>*</span></div>
          <input type='text' 
          placeholder='Name' 
          name='name'
          className='name border-2 w-3/4 focus:border-2 focus:border-purple-400 outline-none focus:shadow-md focus:shadow-purple-200'
           onChange={(e)=>{
            handlechange(e)
          }}
          />
          {AllfieldRequired?'':<p className='p text-rose-600'>{errors.name}</p>}
          </div>
        </div>

        {AllfieldRequired?<div className='text-rose-600 ml-10 AllRequired'>All Fields Required</div>:''}

        {success?<Alert className='w-3/4 relative top-24  mr-auto ml-auto' severity="success">Thank you for completing the information</Alert>:''}


        <button type='submit' 
        className=' p-1.5 btn absolute top-60 bg-green-700 w-20 text-white'
        onClick={()=>{
          handlesubmit()
        }}
        >submit</button>
        </div>
    </div>
   </div>
  )
}




