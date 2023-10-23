import React from 'react'

export default function HomepageInfo() {
    return (
        <div className='homepage_info'>
            <div className="info_item">
                <div className='info_item_title'>Frontend</div>
                <span>
                    JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, <br />
                    BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents </span>
            </div>
            <div className="info_item">
                <div className='info_item_title'>Backend</div>
                <span>
                    NodeJS, MySQL, MongoDB, PHP, Laravel
                </span>
            </div>
        </div>
    )
}
