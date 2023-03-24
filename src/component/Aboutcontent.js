import { Link } from "react-router-dom";
import "./Aboutcontent.css"
import Reac1 from "../img/IMG-20220107-WA0016.jpg"
import Reac2 from "../img/react2.webp"

function Aboutcontent(){
    return(
        <div className="about">
            <div className="left">
                <h1> Who Am I?</h1>
                <p> Im a react Front-end developer. I create
                 responsive secure websites for my clients</p>

            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
            </div>
            
            <div className="right">
                <div className="img-container">
                  <div className="img-stack top">
                   <img src={Reac1} className="img" alt="true"/>
                  </div>
                  <div className="img-stack bottom">
                   <img src={Reac2} className="img" alt="true"/>
                  </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutcontent;
