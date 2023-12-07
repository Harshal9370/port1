import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className='container'>
                <ul >
                    <li className='logo'>Well Come</li>
                    <a href="##" className='Nav'><li>Home</li></a>
                    <a href="##" className='Nav'><li>About</li></a>
                    <a href="##" className='Nav'><li>Service</li></a>
                    <a href="##" className='Nav'><li>Contact</li></a>
                </ul>
                <div className='div2'>
                    <ul >
                        <li className='im'><a target='blank' href="https://www.instagram.com/harshal_patil_.143/?next=%2F"><i class="fa-brands fa-instagram "></i></a></li>
                        <li className='im'><a target='blank' href="https://www.instagram.com/harshal_patil_.143/?next=%2F"><i class="fa-brands fa-facebook-f"></i></a></li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
