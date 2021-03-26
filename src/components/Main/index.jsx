import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.jpg'

export const MainPage = () => {
    return <div className="container">
                    <img src="/images/bg.jpg" alt=""></img>
        <h1>Let's do it</h1>

        <div className="mainBlock">
            <div>
                <input className="textIn" placeholder="Gonna do..."></input>
                <input type="date"></input>
                <button>Add</button>
            </div>
        </div>
    </div>
}
