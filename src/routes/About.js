import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Aboutcontent from "../component/Aboutcontent";
function About(){
    return(
        <div>
            <Navbar/>
            <Hero2 heading="ABOUT." text="i'm friendly Front-End developer"/>        
            <Aboutcontent />
             <Footer/>
        </div>
    )
}

export default About;
