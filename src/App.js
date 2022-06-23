import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/addemployee';
import Display from './components/displayName'
import { useState } from 'react';

function App() {


  
  return (
   <div className='container'>
    <AddEmployee/>
    <Display />
   </div>
    

  );
}

export default App;
