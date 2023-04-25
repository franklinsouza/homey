
// @ts-nocheck
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login, logOut, register, me } from "../utils/api";

type ContextProps = {
  children: React.ReactNode;
}

type userlogin = {
  email: string;
  password: string;
}

type userRegister = {
  username: string;
  email: string;
  password: string;
  typeOption: string
}

type userData = {
  id: string;
  username: string;
}

type modal = {
  login: boolean;
  register: boolean
}

type AuthContext = {
  userLogin: userlogin;
  userRegister: userRegister;
  loading: boolean;
  error: string | null;
  modal: modal;
  setModal: {
    login: boolean;
    register: boolean;
  }
  data: userData
}

export const AuthContext = createContext({} as AuthContext);

export const AuthStorage = ({children}: ContextProps) => {
  const [data, setData] = useState<userData>({id: '', username: ''});
  const [logged, setLogged] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<modal>({login: false, register: false});

  const userLogin = async({email, password}:userlogin) => {
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
  
  const userRegister = async ({username, email, password, typeOption}:userRegister):Promise<void> => {
    try{
      setError(null);
      setLoading(true);
      const {url, options} = register({username, email, password, typeOption});
      const res = await fetch(url, options);
      if(!res.ok) throw new Error('There was a problem creating your account.');
      await userLogin({email, password});
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
    if(!res.ok) throw new Error('There was a problem while logging out.');
    setData(prevState => ({...prevState, id:'', username: ''}));
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