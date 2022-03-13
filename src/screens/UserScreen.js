import React, { useState, useEffect } from 'react';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import usersApi from '../api/users';


// const UserScreen = ({ match }) => {
  const UserScreen = (props) => {

  // console.log("Single data: ", match)
    console.log("user props: ", props)
 



    const [user, setUser] = useState(null);

 
    useEffect(() => {
    
      if (props.location.user) {
        setUser(props.location.user)
      }
   
     },[]);


   
  return (
    <>
     
      <Link className='btn btn-light my-3' to='/'>
       Home
      </Link>
      <h1>Latest Users</h1>

  {user&&
        
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
      }

    </>
  )
}

export default UserScreen;
