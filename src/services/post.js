import axios from 'axios';
import { BACKEND_URL } from '../config';

const getPosts = async () => {
    let request = `${BACKEND_URL}/posts`;

    const response = await axios.get(request);

    return response.data;
};

const getPostById = async (id) => {
    let request = `${BACKEND_URL}/posts/${id}`;

    const response = await axios.get(request);

    return response.data;
};


export { getPosts, getPostById };
