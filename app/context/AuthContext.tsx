import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
// import { decode } from "base-64";
// global.atob = decode;
import JWT from "expo-jwt";

// interface AuthProps {
//   authState?: { token: string | null; authenticated: boolean };
//   onRegister?: (email: string, password: string) => Promise<any>;
//   onLogin?: (email: string, password: string) => Promise<any>;
//   onLogout?: () => Promise<any>;
// }

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
const accessToken = "my-jwt";
const refreshToken = "my-jwt";
export const API_URL = "https://api.developbetterapps.com";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    console.log("stored");
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log("stored", token);

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
        });
      }
      setAuthState({
        token: "token",
        authenticated: true,
      });
    };

    loadToken();
  }, []);

  const register = async (email: string, password: string) => {
    try {
      return await axios.post(`${API_URL}/users`, { email, password });
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const login = async (username: string, password: string) => {
    try {
      var myHeaders = new Headers();
      // myHeaders.append("username", "273fe35a-d8fb-43d8-a262-7a012be974e5");
      // myHeaders.append("password", "");

      var formdata = new FormData();
      formdata.append("username", username);
      formdata.append("password", password);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };

      const res = await fetch(
        "http://10.0.2.2:8000/users/token/",
        requestOptions
      );
      const data = await res.json();

      if (res.status !== 200) {
        const errorData = data;
        throw new Error(errorData || "Login failed");
      } else if (res.status === 200) {
        console.log("file: AuthContext.tsx:40 ~ login ~ result:", data);
        console.log(data.access);
        // const key = "WfLCpuR84OnspdtjKdQBWSLCUNT2bKIt2gtH9RqVpSM";
        // const token =
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5ODUyNTQ5LCJpYXQiOjE2OTk4NTIyNDksImp0aSI6ImJiZDk0YWRhNGYyYzRlZjliOGQ2NmE5NmQxN2I0YjE3IiwidXNlcl9pZCI6MiwidXNlcm5hbWUiOiJkYXZlIiwiZW1haWwiOiJkYXZlQG1haWxpbmF0b3IuY29tIiwiaWQiOjJ9.9FbqVrf14F_cB8he-8_TTDJPDNFcQA979d0PhPSsIxU";
        // const decodedToken = JWT.decode(token, key);
        const decodedToken = jwtDecode(data.access);
        console.log(decodedToken);
        setAuthState({
          token: data.access,
          authenticated: true,
        });
        router.push("/(tabs)");
      }

      // console.log("file: AuthContext.tsx:40 ~ login ~ result:", data);

      // setAuthState({
      //   token: data.access,
      //   authenticated: true,
      // });

      // Assuming your token is directly in the response
      // const token = data.token;

      // Set the Authorization header
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Store the token in SecureStore or any other storage mechanism
      await SecureStore.setItemAsync(accessToken, data.access);
      await SecureStore.setItemAsync(refreshToken, data.refresh);

      return data;
    } catch (error: any) {
      console.log("error", error.message);
      alert("Invalid username or password");
      return { error: true, msg: error.message };
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);

    axios.defaults.headers.common["Authorization"] = "";

    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
