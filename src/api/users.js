import client from './client';

const endpoint = '/users?delay=3';
const endpoint1 = '/users';

const getUsers = () => client.get(endpoint);

const getUser = () => client.get(endpoint1);

export default {
    getUsers,
    getUser,
};

