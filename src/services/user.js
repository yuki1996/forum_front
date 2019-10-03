import axios from 'axios';
import { BACKEND_URL } from '../config';

const getUsers = async () => {
    let request = `${BACKEND_URL}/users`;

    const response = await axios.get(request);

    return response.data;
};


const getUserById = async (id) => {
    let request = `${BACKEND_URL}/users/${id}`;

    const response = await axios.get(request);

    return response.data;
};

export { getUsers, getUserById };
