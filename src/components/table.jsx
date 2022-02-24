import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { NavBar } from './NavBar'

export const Table = () => {

  //fetching data from localstorage
let getStoredData=JSON.parse(window.localStorage.getItem('feedback'))

const data=[]

getStoredData.map((i)=>{
  let a=Object.values(i)
  if(a.includes('')){
    console.log('yes',a,i)
    i=null
  }
  else{
    data.push({
      Formname:'Aroamtic',
      textfield:`${i.text}`,
      phonefield:`${i.phone}`,
      emailfield:`${i.email}`,
      radiobutton:`${i.vote}`,
      name:`${i.name}`,
  })
  }

})

  const columns = [{  
    name: 'FormName',  
    selector: row=>row.Formname ,
   },{  
   name: 'TextField',  
   selector: row=>row.textfield 
   },
  {
    name: 'PhoneField',  
    selector: row=>row.phonefield
  },
  {
    name: 'EmailField',  
    selector: row=>row.emailfield
  },
  {
    name: 'RadioButton',  
    selector: row=>row.radiobutton
  },
  {
    name: 'Name',  
    selector: row=>row.name
  },
  ]  
    
  
  
  return (
    <div className='bg-slate-50 h-screen'> 
    <div className='ml-10 mr-10 h-5/6 py-8 '>
      <NavBar/>
      <h1 className='text-2xl mt-4 mb-4'>All Feedback</h1>
      <DataTable
      columns={columns}
      data={data}  
      />

    </div>

    </div>
  )
}
