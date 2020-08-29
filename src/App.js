import React from 'react';
import './App.css';
import fakeData from './fakeData/fakeUser'
import UserAll from './component/userAll/UserAll';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from './component/Card/UserCard'
import Card from 'react-bootstrap/Card'

function App() {
  // console.log(fakeData);
  const [users, setUser] = useState([])
  const [userCount,setUserCount] = useState([])

  useEffect(() => {
    setUser(fakeData.results)
  })

  const handelAddUser = (user) => {
    const newUser = [...userCount, user] 
    setUserCount(newUser)
  }

  return (
    <div className='bg-dark'>
      

      <Card
            bg="light"
            text="dark"
            className="text-center"
            style={{ margin: "10px" }}
          >
            <Card.Body>
              <Card.Title><h1>Practices Assignment</h1></Card.Title>
              <Card.Text><h2>Users: {users.length}</h2></Card.Text>
              
            </Card.Body>
          </Card>

      <UserCard userCount={userCount} ></UserCard>
      <UserAll User={users}  handelAddUser={handelAddUser}></UserAll>
      
    </div>
  );
}

export default App;
