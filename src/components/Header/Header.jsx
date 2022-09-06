import logo from "../../assets/img/logo.svg"
import {useNavigate} from "react-router-dom"
import { useState } from "react"
const menuItems=[
    {
        linkTo: '/',
        label: 'Introduction'
    },
    {
        linkTo: '/solution',
        label: 'solution'
    },
    {
        linkTo: '/Rateplan',
        label: 'Rate plan'
    }
]
const menuItems1=[
    {
        linkTo: '/login',
        label: 'login'
    },
    {
        linkTo: '/Apply',
        label: 'Apply for free use'
    }
]
function Header() {
    
    return(
        <div className="box">
            <img className="logo" src={logo} alt=""/>
            <div className="menu">
                <div className="menu-item">
                    {menuItems.map(({label})=>(
                        <div key={label} className='menu__item'>
                            <SidebarItem label={label}/>
                        </div>
                    ))}
                </div>
                <div className="menu-item rectangle-662"></div>
                <div className="menu-item">
                    {menuItems1.map(({label})=>(
                        <div key={label} className='menu__item'>
                            <SidebarItem label={label}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
const SidebarItem = ({
    label
}) => {
    return (
        <div>            
            {label}
        </div>
    )
}
export default Header