import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { setToken } from "../services/auth-storage";
import { Alert } from "react-native";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [appLoading, setAppLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const { data } = await axios.get("/mobile/user");
      setUser(data);
    } finally {
      setTimeout(() => {
        setAppLoading(false);
      }, 5000);
    }
  };

  const login = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/mobile/login", data);
      await setToken(response.data.token);
      await getUser();
    } catch (error) {
      if (error.response?.status === 422) {
        Alert.alert("Error!", error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.get("/mobile/logout");
      setToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, appLoading, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
