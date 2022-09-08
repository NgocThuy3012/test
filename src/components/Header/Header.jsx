import logo from "../../assets/img/logo.svg"
import "./header.css"
import {BsList} from "react-icons/bs"
import {BiX} from "react-icons/bi"
const menuItems=[
    {
        linkTo: '/Introduction',
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
            <div className="menu nav_pc">
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
            <div className="nav_bars-btn">
                    <label htmlFor="nav-mobile-input" className="nav_bars-btn-icon">
                        <BsList /> 
                    </label>
            </div>
                
                <input type="checkbox" hidden className="nav__input" id="nav-mobile-input"/>
                <label htmlFor="nav-mobile-input" className="nav_overlay"></label>
                {/* <div className="nav_overlay"></div> */}
                <div className="nav_mobile">
                    <div className="nav_mobile-icon">
                        <label htmlFor="nav-mobile-input">
                            <BiX />
                        </label>
                    </div>
                    {menuItems.map(({label})=>(
                        <div key={label} className='menu__item'>
                            <SidebarItem label={label}/>
                        </div>
                    ))}
                    <div className="nav-login">
                        {menuItems1.map(({label})=>(
                        <div key={label} className='menu__item'>
                            <SidebarItem label={label}/>
                        </div>
                    ))}</div>
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