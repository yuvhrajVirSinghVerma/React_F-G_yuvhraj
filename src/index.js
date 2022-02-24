import ReactDom from 'react-dom'
import './global.css'
import {App} from './App'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDom.render(

<Router>
<App/>
</Router>

,document.getElementById('root'))
