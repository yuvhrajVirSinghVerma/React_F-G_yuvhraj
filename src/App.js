import React from 'react'
import { NavBar } from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import {Form} from'./components/Form'
import {Table} from'./components/table'
export const App = () => {
  return (
    <div className='h-screen bg-gray-200'>
      <div className='h-screen bg-gray-200 '>

        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/table' element={<Table/>}/>
        </Routes>
    </div>

    </div>
  )
}
