import React from 'react';
import Card from 'react-bootstrap/Card'
import Columns from 'react-columns'

const UserCard = (props) => {
    const user = props.userCount

    let allU = user.map(user => {
        const {name,picture,gender,salary} = user
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
            
              <Card.Text>Gender: ({gender})</Card.Text>
              <Card.Text>Salary: ({salary})</Card.Text>
              
            </Card.Body>
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


    let totalSalary = 0;
    for (let i = 0; i < user.length; i++) {
        let salary = user[i].salary;
        let numSalary = Number(salary);
        totalSalary += numSalary;
    }
    return (
        <div className='bg-dark'>
            {/* <h2>Added Users: {user.length}</h2> */}
            {/* <h3>Added Users Salary: {totalSalary}</h3> */}

            <Card
            bg="light"
            text="dark"
            className="text-center"
            style={{ margin: "10px" }}
          >
            <Card.Body>
              <Card.Title><h2>Added Users: {user.length}</h2> </Card.Title>
              <Card.Text> <h3>Added Users Salary: {totalSalary}</h3></Card.Text>
              
            </Card.Body>
          </Card>
            <Columns queries={queries}>{allU}</Columns>
        </div>
    );
};

export default UserCard;