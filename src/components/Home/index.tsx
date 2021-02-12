import './style.css'
import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../Header';

export const Home =()=>{
    return(
        <>
        <Header/>
            <div className="slider">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1 className="animate__animated animate__backInUp">
                     HELLO AND WELCOME TO MY WORLD S P A C E - X
                     <br/>
                     Developed By Muhammad Asghar 
            </h1>
            
            <p className="animate__animated animate__backInUp">
            SpaceX was formed by entrepreneur Elon Musk in the hopes of revolutionizing the aerospace industry and making affordable spaceflight a reality. The company entered the arena with the Falcon 1 rocket, a two-stage liquid-fueled craft designed to send small satellites into orbit
            </p>
            <div className="btn-div">
            <Link className="launch-btn-link" to="/launch" >
            <button className="launch-btn">
                Launches
                </button>
                </Link>
            </div>
            </div>
            
            
            </>
    )
}