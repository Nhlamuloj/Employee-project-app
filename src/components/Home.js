
import React,{useState} from 'react';



 function Home({ items, toggleComplete, handleDelete, handleEdit,}) {
  const [name, setName] = useState(items.name);
  const [lastname, setLastName] = useState(items.lastname);
  const [email,setEmail] = useState(items.email);

  const handleChange = (e) => {
    e.preventDefault();
    if (items.complete === true) {
      setName(items.name);
      setLastName(items.lastname);
      setEmail(items.email)
    } else {
      items.name = "";
      setName(e.target.value);
      items.lastname = "";
      setLastName(e.target.value);
      items.email = "";
      setEmail(e.target.value);
    }
  };
 return (
    
    <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item)=>{
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>Action</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
     
    );
}
export default  Home();