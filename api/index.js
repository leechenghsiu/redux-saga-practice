import axios from 'axios';

export const fetchData = async() => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  } catch(err) {
    console.log(err);
  }
}