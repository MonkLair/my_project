import React from 'react'
import "../../styles/Homepage.css"

export default function HomepageMain() {
    return (
        <div className='homepage'>
            <div className="main_block">
                <div className="main_item main_title">
                    <h1>Hi, my name is <span>Ilya</span></h1>
                    <span> a frontend developer </span>
                    <div className="main_text">
                        <p>with passion for learning and creating.</p>
                    </div>
                </div>
                <br />
                <div className="main_item main_button">
                    <input className='btn' type="button" value="Download CV" />
                </div>
            </div>
        </div>
    )
}
