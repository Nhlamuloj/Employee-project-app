import "antd/dist/antd.css";
import './App.css';
import { Table, Modal, Input} from "antd"
import {useState} from 'react'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import AddEmployee from "./addEmployee";

function App() {

  const [isEditing, setIsEditing] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [dataSource, setdataSource] = useState([
    {
    
      id: 1,
      name: 'nhlamulo',
      surname: 'Mahlabana',
      email: 'nmahlabana@email.com'
    },
    {
      id: 2,
      name: 'Tony',
      surname: 'Baloyi',
      email: 'Baloyi@email.com'
    },
    {
      id: 3,
      name: 'Remind',
      surname: 'Mabaso',
      email: 'rmabaso@email.com'
    },
  
    {
      id:4 ,
      name: 'Elmon MadALA',
      surname: 'Nyaka',
      email: 'enyaka@email.com'
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
      title: "Are you sure you want to delete",
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

  


  const onEditEmployee = (record) => {
    setIsEditing(true);
    setEditingEmployee({...record});
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingEmployee(null)
  }

  

  const addEmployee=((id, name, surname, email)=>{
    setdataSource((items)=>[...items, {
      id:id,
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
       <h1>Employee list</h1>
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