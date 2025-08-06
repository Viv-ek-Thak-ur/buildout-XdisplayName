import { useState } from "react";

export default function  Display(){

    const [firstName , setFirstName] = useState("");
    const [ lastName , setLastName] = useState("");
    const [fullName, setFullName] = useState("");

     const handleSubmit = () => {
    setFullName(`${firstName} ${lastName}`);
  };


    return(
        <>
        <div style={{display:"flex" , flexDirection : "column", alignItems:"flex-start", marginLeft :"2rem"}}> 
        <h1>Full Name Display</h1>
        <div>
        <label htmlFor="firstName">First Name : </label>
        <input name="firstName" onChange={(e)=>(setFirstName(e.target.value))}></input>
        </div>
        <div>
         <label htmlFor="lastName">Last Name : </label>
        <input name="lastName" onChange={(e)=>(setLastName(e.target.value))}></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {fullName ? <p>Full Name : {fullName}</p> : null}
        </div>
        </>
    )
}