import axios from 'axios';

export const getSTodaysData = async (token) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so we add 1
    const date = today.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${date}`;

    const response = await axios.get(`http://localhost:8000/user/checkin/?date=${formattedDate}`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    });
    console.log('data', response.data);
    console.log('text', response.text);
    return response.data;
}