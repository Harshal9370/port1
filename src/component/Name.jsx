import React from 'react'
import Harsh from '../asset/Harsh.png'
import './Navbar.css';

function Name() {
    return (
        <>
            <div className="con">
                <div className="info">
                    <h1 className='name'>
                        Hello, My Name is <br /><b>Harshal Patil</b>
                    </h1>
                </div>
                <div className="imgi">
                <img className='img1' src={Harsh} alt="" />
                </div>
            </div>
            
        </>
    )
}

export default Name
