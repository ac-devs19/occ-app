import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "../api/axios";
import { setToken } from "../services/auth-storage";
import { Alert } from "react-native";
import { router } from "expo-router";

interface User {
  id: number;
  user_id_no: string;
  user_role: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  gender: string;
  birthday: string;
  contact_number: string;
  present_address: string;
  zip_code: string;
  password_change: number;
}

interface LoginData {
  user_id_no: string;
  password: string;
}

interface changePasswordData {
  current_password?: string;
  password: string;
  password_confirmation: string;
}

interface AuthContextType {
  user: User | null;
  appLoading: boolean;
  loading: boolean;
  login: (data: LoginData) => Promise<void>;
  changePassword: (data: changePasswordData) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
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

  const login = async (data: LoginData) => {
    setLoading(true);
    try {
      const response = await axios.post("/mobile/login", data);
      await setToken(response.data.token);
      await getUser();
    } catch (error: any) {
      if (error.response?.status === 422 || error.response?.status === 403) {
        Alert.alert("Error!", error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (data: changePasswordData) => {
    setLoading(true);
    try {
      await axios.post("/mobile/change-password", data);
      await getUser();
      router.back();
    } catch (error: any) {
      if (error.response?.status === 422) {
        if (error.response.data.errors.message) {
          Alert.alert("Error!", error.response.data.errors.message[0]);
        } else if (error.response.data.errors.password) {
          Alert.alert("Error!", error.response.data.errors.password[0]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.get("/mobile/logout");
      await setToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, appLoading, loading, login, changePassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
