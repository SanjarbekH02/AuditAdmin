import React from 'react';
import Logo from '../../Images/logo.png'
import LogoutImg from '../../Images/logaut.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <a href="#" className="logo">
                    <img src={Logo} alt="logo" />
                </a>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className='nav-link' href=""><i class="ri-apps-line"></i> Dashbord</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href=""><i class="ri-profile-line"></i> Kurslarim</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href=""><i class="ri-chat-voice-line"> </i>Shikoyatlar</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href=""><i class="ri-add-circle-line"></i> Dars qo'shish</a>
                    </li>
                </ul>
            </div>
            <div className="logout">
                <img src={LogoutImg} alt="" className="logout-img" />
                <button className="logout-btn btn-red"><i class="ri-logout-circle-line"></i> Log out</button>
            </div>
        </div>
    );
}

export default Navbar;
