import "./Hero.css";
import IntroImg from "../img/intro-bg.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import  Typewriter  from "typewriter-effect"; 
function Hero(){
    const [state] = useState({
        
        titleTwo: "I'm  HIMANSHI JAIN ",
        titlethree:"SoftWare Developer",

    });

    return(
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src= {IntroImg} alt="Intro-Img"/>
            </div>
            <div className="content">
                <h2>                
                <div className="titleTwo">{state.titleTwo} </div>
                <div className="titlethree">{state.titlethree} </div>
                </h2>
                <div className="titlefour">
                    <Typewriter options={{
                        autoStart : true,
                        loop : true,
                        delay : 40,
                        strings:[
                            "I'm a Web Developer",
                            "I'm Tech Enthusiast",
                            "I'm Software Developer"
                        ],

                    }}/>

                </div>
                
             <div className="button">
                <Link to="/Project" className="btn">PROJECT</Link>
                <Link to="/Contact" className="btn btn-light">CONTACT  ME</Link>
                <a href='CV.pdf' download='CV.pdf'>
                <button className="btn"> Download CV </button>
                </a>
             </div>
            </div>
        </div>
    )
}

export default Hero;
