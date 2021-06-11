
import { useState, useEffect } from 'react';
import usersApi from '../api/users';



function ListingScreen() {
    
    const [Listings, setListings] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);
    
    const loadUsers = async () => {
        const response = await usersApi.getUsers();
        setListings(response.data);
        
    }




}