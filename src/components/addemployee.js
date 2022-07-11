
import React, {useState} from 'react';
import '../components/css/AddEmployee.css'
function AddEmployee(props){

    const[name,setName] = useState('')
    const[lastname, setLastname] =useState("");
    const[email, setEmail] =useState("");

  const add =async (e)=>{
    e.preventDefault();
    
    if(name ===""||lastname ===""||email ===""){
        
        return;
    }
    const newEmployee={
      name,
      lastname,
      email,
    }
    console.log(newEmployee);
  };

    return(
        <div className='container'>
            <div className='form'>
            <h1>New Employee</h1>
            <label>First name</label><input type="text" placeholder='Enter your first name' id="name" onChange={(e)=>setName(e.target.value)}/>
            <label>Last name</label> <input type="text" placeholder='Enter your lastname' id="lastname" onChange={(e)=>setLastname(e.target.value)} />
            <label>Email</label><input type="email" placeholder='Enter your email' id="email" onChange={(e)=>setEmail(e.target.value)}/><br></br>

            <button className='btn' onClick={add} >Add Employee</button>
            </div>
        </div>
    )
}
export default AddEmployee;