import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
