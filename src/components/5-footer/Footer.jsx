import React from 'react';
import  './footer.css';

const Footer = () => {
    return (
        <footer className='flex'>
            <ul className='flex'>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Users</a></li>
            </ul>

            <p>&copy; 2025 <span>Skimo</span> All Rights Reserved.</p>



        </footer>
    );
}

export default Footer;
