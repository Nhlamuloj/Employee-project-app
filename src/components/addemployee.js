import React,{useState} from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function AddEmployee() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail]= useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== ""||lastname !==""||email !=="") {
      await addDoc(collection(db, "items"), {
        name,
        lastname,
        email,
        completed: false,
      });
      setName("");
      setLastName("");
      setEmail("")
    }
  };
  return (
    
    <form onSubmit={handleSubmit}>
      
      <div className="input_container">
      <h1 className="title">Employee</h1>
        <input  className="addOn"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br></br>
        <input className="addOn"
          type="text"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        /><br></br>
        <input  className="addOn"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br></br>
          <button className="btnAdd">Add</button>
      </div>
      <div >
      
      </div>
    </form>
  );
}
export default  AddEmployee()