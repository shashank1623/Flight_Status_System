import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Check if the user is already logged in
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setIsAuthenticated(true);
            setToken(savedToken);
        }
    }, []);

    const login = (newToken) => {
        const BearerToken = `Bearer ${newToken}`;
        localStorage.setItem('token', BearerToken);
        setToken(newToken);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
