import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
//import axios from 'axios';

import User from '../User';


import usersApi from '../api/users';
import Loader from '../components/Loader';



const HomeScreen = () => {

    const [users, setUsers] = useState(null);
    
    const [loading, setLoading] = useState(false);


    useEffect(() => {
       
        fetchUsers();
        
    }, [])

    const fetchUsers = async () => {
        setLoading(true);
        const response = await usersApi.getUsers();
        
        // console.log("api data recieved");
        // console.log(response.data.data);

        setUsers(response.data.data);
    
        //hiding loader at the end of api call
        setLoading(false);
    }
    
    return (
        <React.Fragment>
            {
                loading ?
                (<Loader />)
                    :
             (<>
                <h7>Welcome to Users Profile</h7>
                    <Row>
                        {users&&users.map((val) => (
                            <Col key={val.id} sm={12} md={6} xl={4} lg={3} >
                                <User user={val} />
                            </Col>
                        ))}

                    </Row>
            </>)
            }
            
            
        </React.Fragment >
           
    );
    
    
}

export default HomeScreen;