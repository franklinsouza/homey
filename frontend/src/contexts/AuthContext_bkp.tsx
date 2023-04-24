import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login, logOut, register, me } from "../utils/api";

type ContextProps = {
  children: React.ReactNode
}

export const AuthContext = createContext();

export const AuthStorage = ({children}: ContextProps) => {
  const [userData, setUserData] = useState(null);
  const [userStatus, setUserStatus] = useState(null);

  const [reqLoadStatus, setReqLoadStatus] = useState(false);
  const [login, setLogin] = useState(null)

  const [errorLogin, setErrorLogin] = useState(null);
  const [errorRegister, setErrorRegister] = useState(null);

  const [loginStatus, setLoginStatus] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);

  const userLogin = async (email, password) => {
    try {
      setErrorLogin(null);
      setReqLoadStatus(true);
      const { url, options } = login({email, password});
      const res = await fetch(url, options);

      console.log('test');

      if(res.ok) {
        const json = await res.json();
        window.localStorage.setItem('expTime', json.exp);
        setUserData(json.user);
        setLoginStatus(false);
        toast.success("Logged Successfully", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }else {
        throw new Error('AuthenticationError');
      }
    }catch(error){
      setErrorLogin('The email or password provided is incorrect.');
    }finally {
      setReqLoadStatus(false);
    }
  } 

  const userLogOut = async () => {
    const {url, options} = logOut();
    const res = await fetch(url, options);
    
    if(res.ok) {
      setUserData(null);
    }else {
      throw new Error('There was a problem while logging out.');
    }
  }

  const userRegister = async (username, email, password, typeOption) => {
    try {
      setErrorRegister(null);
      setReqLoadStatus(true);
      const {url, options} = register({username, email, password, typeOption});
      const res = await fetch(url, options);

      if(res.ok) {
        const json = await res.json();
        setErrorRegister(null);
        setRegisterStatus(false);
        userLogin(email, password);
        toast.success("Registered Successfully", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }else {
        throw new Error('ValidationError');
      }
    }catch(error){
      setErrorRegister('The email provided is invalid');
    }finally {
      setReqLoadStatus(false);
    }
  }

  useEffect(() => {
    const fetchMe = async () => {
      const { url, options } = me();
      const res = await fetch(url, options);
      const json = await res.json();
      console.log(res);
      setUserData(json.user);
      setLogin(true);
    };

    fetchMe();
  }, []);

  return(
    <AuthContext.Provider 
      value={{
        reqLoadStatus,
        userLogin, 
        setLoginStatus,
        loginStatus,
        errorLogin,
        userRegister,
        setRegisterStatus,
        registerStatus,
        errorRegister,
        userLogOut, 
        userData, 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}