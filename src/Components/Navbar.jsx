import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='knight-navbar'>
            <div className="logo">
                <img src="/images/knightlogo.png" alt="" />
            </div>
            <div className="icon">
                <ul>
                    <li>
                        <NavLink to='./'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./menu">
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./franchise">
                            Franchise
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
