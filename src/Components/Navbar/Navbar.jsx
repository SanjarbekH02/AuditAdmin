import React from 'react';
import Logo from '../../Images/logo.png'
import LogoutImg from '../../Images/logaut.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <a href="#" className="logo">
                    <img src={Logo} alt="logo" />
                </a>
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")} to={"/"}><i className="ri-apps-line"></i> Dashbord</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")} to={"/courses"}><i className="ri-profile-line"></i> Kurslarim</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")} to={"/complaint"}><i className="ri-chat-voice-line"> </i>Shikoyatlar</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")} to={"/add"}><i className="ri-add-circle-line"></i> Dars qo'shish</NavLink>
                    </li>
                </ul>
            </div>
            <div className="logout">
                <img src={LogoutImg} alt="" className="logout-img" />
                <button className="logout-btn btn-red"><i className="ri-logout-circle-line"></i> Log out</button>
            </div>
        </div>
    );
}

export default Navbar;
