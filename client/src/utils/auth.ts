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

export { saveUser, getUser, removeUser, isUserLoggedIn };
