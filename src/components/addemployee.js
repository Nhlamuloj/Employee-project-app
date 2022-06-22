
import React, {useState} from 'react';
import '../components/css/AddEmployee.css'
function AddEmployee(){

    const[firstnme,setName] = useState('')
    const[lastname, setLastname] =useState("");
    const[email, setEmail] =useState("");

    return(
        <div className='container'>
            <h1>New Employee</h1>
            <label>First name</label><input type="text" placeholder='Enter your first name' onChange={(e)=>setName(e.target.value)}/>
            <label>Last name</label> <input type="text" placeholder='Enter your last name' onChange={(e)=>setLastname(e.target.value)} />
            <label>Email</label><input type="email" placeholder='Enter your last name' onChange={(e)=>setEmail(e.target.value)}/>

            <button className='btn' onClick={AddEmployee} >Add Employee</button>
            

            
        </div>
    )
}
export default AddEmployee;