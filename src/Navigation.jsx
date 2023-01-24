import React, {useState} from 'react'
import Logo from "./images/logo.svg"
import burger from "./images/icon-hamburger.svg"
import './styles.css'

export const Navigation = () => {
    const mobileContainer = document.querySelector(".mobileContainer")
    const [visible, setVisible] = useState(false)
    const mostrar = () =>{
        if(visible == false){
            mobileContainer.style.visibility = "visible"
            setVisible(visible = true)
        }else{
            mobileContainer.style.visibility = "hidden"
            setVisible(visible = false)
        }
    }
  return (
    <>
    <nav className='navigation'>
        <img src={Logo} alt="Logo icon" />
        <div className='pcNavigation'>
            <p>PRODUCT</p>
            <p>FEATURES</p>
            <p>PRICING</p>
            <span></span>
            <p className='login'>LOGIN</p>
        </div>
        <div className='burger'>
            <img onClick={mostrar} className='burgerIcon' src={burger} alt="" />
        </div>
    </nav>
    <div className='mobileContainer'>
        <p>PRODUCT</p>
        <p>FEATURES</p>
        <p>PRICING</p>
        <hr />
        <p className='login'>LOGIN</p>
    </div>
    </>
  )
}
