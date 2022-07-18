import React, {useState} from "react";

function AddEmployee(){

    

    
    return(
        <div className="container">

            <h1 style={{paddingLeft: "5px"}}>New Employee</h1>
            <input type="text" placeholder="Enter your name and surname" onChange={(e)=>setSurname(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter your name and surname" onChange={(e)=>setName(e.target.value)}/><br></br>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>

            <button style={{width: "150px", height: "30px"}} >Add Employee</button>
        </div>
    )
}

export default AddEmployee;
