import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

 function Display({ items,handleDelete, handleEdit,}) {
  const [name, setName] = useState(items.name);
  const [lastname, setLastName] = useState(items.lastname);
  const [email, setEmail] = useState(items.email);

  const handleChange = (e) => {
    e.preventDefault();
    if (items.complete === true) {
      setName(items.name);
      setLastName(items.lastname);
      setEmail(items.email)
    } else {
      items.title = "";
      setNewTitle(e.target.value);
      items.lastName = "";
      setLastName(e.target.value);
      items.email = "";
      setEmail(e.target.value);
    }
    console.log(handleChange())
  };
  return (
    
    <div className="todo">
      
      <input
        style={{ textDecoration: items.completed && "line-through" }}
        type="text"
        value={items.name === "" ? name : items.name}
        className="list"
        onChange={handleChange}
      />
        <input
        
        type="text"
        value={items.lastname === "" ? lastname : items.lastname}
        className="list"
        onChange={handleChange}
      />
        <input
       
        type="text"
        value={items.email === "" ? email : items.email}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-edit"
          onClick={() => handleEdit(items,name,lastname,email)} >
        <EditIcon id="i" />

        </button>
        <button className="button-delete" onClick={() => handleDelete(items.id)}>
        <DeleteIcon id="i" />
        </button>

      </div>
    </div>
  );
}
export default Display();