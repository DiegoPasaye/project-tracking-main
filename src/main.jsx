import React from 'react'
import ReactDOM from 'react-dom/client'
import { Second } from './Second'
import { Navigation } from './Navigation'
import { First } from './First'
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navigation />
    <div className='down'>
      <First />
      <Second />
    </div>
  </>
)
