
import './App.css';
import { useState } from 'react';
import Home from './components/Home';

function App(props) {

  const [Employee, setEmployee] = useState([])
  
    const removeEmployee =item =>{
      setEmployee([
        ...Employee.slice(0,item),
        ...Employee.slice(item +1, Employee.length)
      ])
    }
  

  const addEmployee=((name, lastname,email)=>{
    setEmployee((items)=>[...items, {
      name:name,
      lastname:lastname,
      email:email,
    }])
    console.log(Employee)
  })



  
  return(
    <Home list={Employee} add={addEmployee} deleteEmployee ={removeEmployee} />
  )
}

export default App;
