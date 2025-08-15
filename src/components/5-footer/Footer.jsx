import React from 'react';
import  './footer.css';

const Footer = () => {
    return (
        <footer className='flex' id="users">
            <ul className='flex'>
                <li><a href="#Home">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#users">Users</a></li>
            </ul>

            <p>&copy; 2025 <span>Skimo</span> All Rights Reserved.</p>



        </footer>
    );
}

export default Footer;
