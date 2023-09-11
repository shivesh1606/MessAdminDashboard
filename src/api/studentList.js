import axios from 'axios';

export const getStudentList = async (token) => {
    const response = await axios.get('http://localhost:8000/user/users/', {
        headers: {
            'Authorization': `Token ${token}`
        }
    });
    console.log('data', response.data);
    console.log('text', response.text);
    return response.data;
}