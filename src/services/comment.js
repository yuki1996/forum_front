import axios from 'axios';

import { BACKEND_URL } from '../config';

const getComments = async (postId) => {
    let request = `${BACKEND_URL}/comments?postId=${postId}`;

    const response = await axios.get(request);

    return response.data;
};
export { getComments };
