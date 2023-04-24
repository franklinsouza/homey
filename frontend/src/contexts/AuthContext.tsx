
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login, logOut, register, me } from "../utils/api";

type ContextProps = {
  children: React.ReactNode
}

export const AuthContext = createContext();

export const AuthStorage = ({children}: ContextProps) => {
  const [data, setData] = useState({});
  const [logged, setLogged] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({login: false, register: false});

  const userLogin = async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = login({email, password});
      const res = await fetch(url, options);
      if(!res.ok) throw new Error('Invalid login');
      const json = await res.json();
      const {id , username} = json.user;
      setData(prevData => ({...prevData, id, username}));
      setModal(prevState => ({...prevState, login: false}));
      toast.success("Logged Successfully", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }catch(error){
      setError('Invalid login');
      setLogged(false);
    }finally {
      setLoading(false);
    }
  }
  
  const userRegister = async (username, email, password, typeOption) => {
    try{
      setError(null);
      setLoading(true);
      const {url, options} = register({username, email, password, typeOption});
      const res = await fetch(url, options);
      if(!res.ok) throw new Error('There was a problem creating your account.');
      await userLogin(email, password);
      setModal(prevState => ({...prevState, register: false}));
      toast.success("Registered Successfully", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }catch(_){
      setError('There was a problem creating your account.');
      setLogged(false);
    }finally{
      setLoading(false);
    }
  }

  const userLogOut = async () => {
    const {url, options} = logOut();
    const res = await fetch(url, options);
    console.log(res);
    if(!res.ok) throw new Error('There was a problem while logging out.');
    setData({});
  }

  useEffect(() => {
    const autoLogin = async () => {
      const { url, options } = me();
      const res = await fetch(url, options);
      const json = await res.json();

      if(json.user) {
        const {id , username} = json.user;
        setData(prevData => ({...prevData, id, username}));
        setLogged(true);
      }
    };

    autoLogin();
  }, []);

  return(
    <AuthContext.Provider 
      value={{
        userLogin,
        userRegister, 
        userLogOut,
        data,
        logged,
        loading,
        error,
        modal,
        setModal
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}