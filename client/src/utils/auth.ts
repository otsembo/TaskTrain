const saveUser =  (uid: number) => {
    localStorage.setItem('uid', uid.toString());
}

const getUser = () => {
    const uid = localStorage.getItem('uid');
    return uid ? parseInt(uid) : null;
}

const removeUser = () => {
    localStorage.removeItem('uid');
}

const isUserLoggedIn = (): boolean => {
    //return !!getUser();
    return true;
}

const storeToken = (token: string) => {
    localStorage.setItem('token', token);
}

const getToken = (): string | null => {
    return localStorage.getItem('token');
}

export { saveUser, getUser, removeUser, isUserLoggedIn, storeToken, getToken };
