import client from './client';

const endpoint = '/users?delay=3';
const endpoint1 = '/users';

// https://reqres.in/api/users/2

//users lisr
const getUsers = () => client.get(endpoint);


//single user
const getUser = (id) => {
    // let resp = client.get(endpoint1 + "/" + `${id}`);

    client.get(endpoint1 + "/" + `${id}`);
    // console.log("api single get: ", resp)
}

export default {
    getUsers,
    getUser,
};

