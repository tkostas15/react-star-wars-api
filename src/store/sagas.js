// login sagas
export const login = () => { localStorage.setItem('isAuthenticated', 'true'); };

export const logOut = () => { localStorage.setItem('isAuthenticated', 'false'); };