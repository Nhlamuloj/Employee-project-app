import React from "react";
import {FaEdit} from "react-icons/fa" 
import { BsFillTrashFill} from "react-icons/bs";


function Display(props){
    
    return(

        
        <div>
            
<div className='form'>
        <h1>Employee list</h1>
        
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Last name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {props.list.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>

                        <td>
                            <button ><FaEdit/>Edit</button> 
                            <button ><BsFillTrashFill/>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>
                
        </table>
        </div>
        </div>
    
    )
}
export default Display;