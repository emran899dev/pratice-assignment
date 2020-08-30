import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Columns from 'react-columns'


const UserAll = (props) => {
  // console.log(props.User);
  const Users = props.User
  // const handelAddUser = props.handelAddUser
  let allUsers = Users.map(user => {
    const {name,picture,email,gender,salary,phone,dob} = user
    const fullName = `${user.name.title } ${user.name.first } ${user.name.last}`
    return (
      <Card
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Card.Title>Name: {fullName} </Card.Title>
          <Card.Img variant="top" src={picture.large} />

          <br />
          <br />
          <Card.Text>Email: ({email})</Card.Text>
          <Card.Text>Gender: ({gender})</Card.Text>
          <Card.Text>Salary: ({salary})</Card.Text>
          <Card.Text>Phone ({phone})</Card.Text>
         <Card.Text>Age ({dob.age})</Card.Text>
          
        </Card.Body>
        <Card.Footer>
                <Button variant="danger" className="px-5" onClick={() => props.handelAddUser( user )}><FontAwesomeIcon icon={faCoffee} /> Added User</Button>
            </Card.Footer>
      </Card>
    )
})

  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];

  // <Columns queries={queries}>{allUsers}</Columns>
    
        return (
        <div className='bg-dark'>
          <Card
            bg="light"
            text="dark"
            className="text-center"
            style={{ margin: "10px" }}
          >
            <Card.Body>
              <Card.Title><h2 className='text-success'>Show All Users</h2></Card.Title>
            </Card.Body>
          </Card>
            
            <Columns queries={queries}>{allUsers}</Columns>
        </div>
     );
};

export default UserAll;