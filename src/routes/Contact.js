import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import From from "../component/From";
function Contact(){
    return(
        <div>
            <Navbar/>
            <Hero2 heading = "CONTACT" text="Lets have a chat"/>
            <From />
            <Footer/>
        </div>
    )
}

export default Contact;
