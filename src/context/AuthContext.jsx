import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { AppRoutes } from "../constant/constant";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        await getUserInfo(token);
      } else {
        setUser(null);
      }
    };

    fetchUserData();
  }, [token]);

  const getUserInfo = async (currentUserToken) => {
    try {
      setLoading(true);
      const response = await axios.get(AppRoutes.getCurrentUser, {
        headers: {
          Authorization: `Bearer ${currentUserToken}`,
        },
      });
      setUser(response?.data?.data);
    } catch (err) {
      console.error(err.message);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
