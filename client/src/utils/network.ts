import axios from 'axios';
import { getToken } from './auth';

const instance = () => axios.create({
    baseURL: 'https://task-train-rails.onrender.com',
    timeout: 60000,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
     }
});

const register = (data: any): Promise<any> => {
    return instance().post('/users', data);
}

const login = (data: any): Promise<any> => {
    return instance().post('/users/login', data);
}

const logout = (): Promise<any> => {
    return instance().delete('/users/logout');
}

const addTask = (data: any): Promise<any> => {
    return instance().post('/todos', data);
}

const getTasks = (): Promise<any> => {
    return instance().get('/todos');
}

const updateTask = (id: string, data: any): Promise<any> => {
    return instance().put(`/todos/${id}`, data);
}

const deleteTask = (id: string): Promise<any> => {
    return instance().delete(`/todos/${id}`);
}

export default { register, login, logout, addTask, getTasks, updateTask, deleteTask }