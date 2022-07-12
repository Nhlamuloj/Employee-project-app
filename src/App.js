
import "./App.css";
import React ,{useState}from "react";

import Home from "./components/home";
import AddEmployee from "./components/AddEmployee";
import  {useEffect} from 'react';

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let addArray = [];
      querySnapshot.forEach((doc) => {
        addArray.push({ ...doc.data(), id: doc.id });
      });
      setitems(addArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (items, name) => {
    await updateDoc(doc(db, "items", items.id), { name: name });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };
  return (
    <div className="App">
      <div>
        <AddEmployee />
      </div>
      <div className="todo_container">
        {items.map((items) => (
          <Home
            key={items.id}
            todo={items}
            
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
