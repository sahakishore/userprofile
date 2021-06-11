import React, { useState, useEffect } from 'react';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import usersApi from '../api/users';


const UserScreen = ({ match }) => {
 


    const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
 
      const response = await usersApi.getUser(`/${match.params.id}`);
      
      console.log("api data recieved");
      console.log(response.data.data);

      setUser(response.data.data);
  
    }
    fetchUser(); 
  });

    
  
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
       Home
      </Link>


      <h1>Latest Users</h1>

       <Card>
           {/* Image of User */}
           
          <Col md={6}>
            <Image src={user.avatar} alt={user.email} fluid />
            {/* <Image src={user.avatar} alt={user.name} fluid /> */}
          </Col>
          
           {/* Firstname of user */}
            
            <ListGroup variant='flush'>
                
              <ListGroup.Item>
                <Row>
                    <Col>Firstname</Col>
                    <Col>
                      <strong>{user.first_name}</strong>
                    </Col>
                </Row>
              </ListGroup.Item>
              
              {/* Lastname of user */}

              <ListGroup.Item>
                <Row>
                    <Col>Lastname</Col>
                    <Col>
                      <strong>{user.last_name}</strong>
                    </Col>
                </Row>
              </ListGroup.Item>
              
              {/* Email of User */}
              <ListGroup.Item>
                <Row>
                    <Col>Email</Col>
                    <Col>
                      <strong>{user.email}</strong>
                    </Col>
                </Row>
              </ListGroup.Item>
              
            </ListGroup>
          
        
      </Card>
    </>
  )
}

export default UserScreen;
