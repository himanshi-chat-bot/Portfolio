import { useEffect, useState } from "react";
import "./From.css";
function From(){
     const data = {name: "",email: "",subject: "", message: ""};
    const[inputData,setInputData] = useState(data);
    const[flag,setFlag] =useState(false)
    useEffect(()=>{
       console.log("register");
    },[flag])
     function handleData(e){
         setInputData({...inputData,[e.target.name]: e.target.value})
         console.log(inputData)
     }
    function handlesubmit(e){
      e.preventDefault();
      if(!inputData.name ||!inputData.email || !inputData.subject || !inputData.message)
      {
        alert("All fields are Mandatory")
      }
      else{
        setFlag(true)
      }
    }
    return(
        <>
        <pre> {(flag) ? <h2 className="ui-define" >hello {inputData.name},you've register sucessfully </h2> : ""}</pre>
        <form  className="container" onSubmit={handlesubmit}>
        <div className="form">

                <label>Your Name</label>
                <input type="text"  placeholder="Enter Your Name"  name="name" value={inputData.name} onChange={handleData}></input>
                <label>Email</label>
                <input type="email"  placeholder="Enter Your Email" name="email" value={inputData.email} onChange={handleData}></input>
                <label>Subject</label>
                <input type="text" placeholder="Enter Your Subject" name="subject" value={inputData.subject} onChange={handleData} ></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type Your Message Here"  name="message"  value={inputData.message} onChange={handleData}/>
                <button  type = 'submit' className="btn">Submit</button> 

        </div>
        </form>
        </>
    )
}

export default From;
