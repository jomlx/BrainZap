import '../styles/header.css';
import logo from '../assets/brain-logo.png';
import menuBtn from '../assets/burger-menu.png';
import React, { useState } from 'react';

function Header() {
    // control the sidebar visibilitiy
    const [isSlidebarOpen, setIsSlidebarOpen] = useState(false);
    // for toggle the burger-menu/menuBtn icon
    const isShow = () => {
        const sidebar = document.querySelector('.sidebar');
        if(isSlidebarOpen) {
            sidebar.style.right = '0';
        } else {
            sidebar.style.right = '-35%';
        }
        setIsSlidebarOpen(!isSlidebarOpen);
    }

    return(
        <header className='header'>
            <ul className='headerMenu'>
                    <li className='logo'>
                        <a href="#">
                            <h1>BrainZap 
                                <img src={logo} alt="" id='logo'/>
                            </h1>
                        </a>
                    </li>
                    <li className='toHide'><a href="#">Home</a></li>
                    <li className='toHide'><a href="#">About</a></li>
                    <li className='toHide'><a href="#">Help</a></li>
                    <li><a href=""><button>Sign In</button></a></li>
                    <li className='menuBtn'><img src={menuBtn} alt="" onClick={isShow}/></li>
                </ul>

            <ul className='sidebar' onClick={isShow}>
                    <li><h3>Menu</h3></li>   
                    <li><a href="#">Home</a></li>   
                    <li><a href="#">About</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
                
        </header>
    );
}

export default Header