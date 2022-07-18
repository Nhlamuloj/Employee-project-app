import "antd/dist/antd.css";
import './App.css';
import {Button, Table, Modal, Input} from "antd"
import {useState} from 'react'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import AddEmployee from "./addEmployee";

function App() {

  const [isEditing, setIsEditing] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [dataSource, setdataSource] = useState([
    {
     
      name: 'Nhlamulo',
      surname: 'Mahlabana',
      email: 'Nmahlabana@gmail.com'
    },
  
  
  
  ]);
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Last Name',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      key: 'action',
      title: 'Action',
      render: (record) => {
        return (
          <>
          <EditOutlined onClick={()=>{
            onEditEmployee(record)
          }}/>
          <DeleteOutlined onClick={()=>{
              onDeleteStudent(record)
          }} style={{color: 'red', marginLeft: 12}}/>
          </>
        )
      }
    }
  ]

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure you want top delete "+ record.name+"?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () =>{
        setdataSource(pre => {
          return pre.filter((employee) => employee.id !== record.id)
        });
      }
    })
    
  };

  const onAddEmployee = () => {
    const randomNum = parseInt(Math.random()*100)
    const newEmployee = {
      name: "Name of "+randomNum,
      address: "Address of "+ randomNum,
      email: "Email of "+ randomNum,
    }
    setdataSource(pre=>{
      return [...pre, newEmployee]
    })
  }


  const onEditEmployee = (record) => {
    setIsEditing(true);
    setEditingEmployee({...record});
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingEmployee(null)
  }

  //A function to add employee

  const addEmployee=(( name, surname, email)=>{
    setdataSource((items)=>[...items, {
      name:name,
      surname:surname,
      email:email
    }])
  })
  return (
    <div className="App">
      <div className="adding">
        <AddEmployee list={dataSource} add={addEmployee} />
      </div>
      <header className="App-header">
        <Button onClick={onAddEmployee}>Enter a Random Employee</Button>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        title="Edit Employee"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing()
        }}
        onOk={() => {
          setdataSource(pre=>{
            return pre.map(employee=>{
              if(employee.id === editingEmployee.id){
                return editingEmployee;
              }else{
                return employee;
              }
            })
          })
          resetEditing()
        }}
      >
        <Input value={editingEmployee?.name} onChange={(e) => {
          setEditingEmployee((pre)=>{
            return {...pre, name: e.target.value}
          })
        }}/>
        <Input value={editingEmployee?.surname} onChange={(e) => {
          setEditingEmployee((pre)=>{
            return {...pre, surname:e.target.value}
          })
        }}/>
        <Input value={editingEmployee?.email} onChange={(e) => {
          setEditingEmployee((pre)=>{
            return {...pre, email:e.target.value}
          })
        }}/>

      </Modal>
      </header>
    </div>
  );
}

export default App;
