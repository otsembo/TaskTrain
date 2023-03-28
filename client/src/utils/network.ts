import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     }
});

const register = (data: any): Promise<any> => {
    return instance.post('/users', data);
}

const login = (data: any): Promise<any> => {
    return instance.post('/users/login', data);
}

const logout = (): Promise<any> => {
    return instance.delete('/users/logout');
}

const addTask = (data: any): Promise<any> => {
    return instance.post('/todos', data);
}

const getTasks = (): Promise<any> => {
    return instance.get('/todos');
}

const updateTask = (id: string, data: any): Promise<any> => {
    return instance.put(`/todos/${id}`, data);
}

const deleteTask = (id: string): Promise<any> => {
    return instance.delete(`/todos/${id}`);
}

export default { register, login, logout, addTask, getTasks, updateTask, deleteTask }