import axios from 'axios';

const baseURL = 'http://localhost:5000/api/tasks';

const taskApi = axios.create({
    baseURL
})

export default taskApi;