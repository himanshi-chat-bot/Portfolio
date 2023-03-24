import { FaHome ,FaPhone,FaMailBulk, FaFacebook, FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer(){
return(

<div className="footer">
    <div className="footer-container">
        <div className="left">

        <div className="location">
        <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
        <div>

        <p> Vard No. 14 Bus Stand </p>
        <p> Mandsaur,Narayangarh </p>

        </div>

    </div>
     <div className="phone">
     <h4><FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}}/>
     9399296205 </h4>
     </div>
     <div className="email">
     <h4><FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}}/>
     himanshijain332@gmail.com </h4>
     </div>
     </div>
    
    <div className="right">
    <h4> About ME</h4>
    <p> i'm very ambitious Software Developer looking for a role in established 
        IT company with the opportunity to work with the latest technologies on 
        challenging and diverse Project.
    </p>
    
    <div className="social">
    <Link to="https://www.linkedin.com/in/himanshi-jain-184808214/">
        < FaLinkedin size={30} style={{color: "#fff", marginRight:"2rem"}} />
    </Link>
        </div>
    </div>
  </div>
  </div>
);
}
export default Footer;