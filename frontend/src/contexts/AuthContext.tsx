import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login, logOut, register, me } from "../utils/api";

type AuthContext = {
  userLogin: (args:Userlogin) => Promise<void>;
  userRegister: (args:UserRegister) => Promise<void>;
  userLogOut: () => Promise<void>;
  data: UserData;
  logged: Boolean;
  loading: Boolean;
  error: String | null;
  modal: ModalState;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

type ContextProps = {
  children: React.ReactNode;
}

type Userlogin = {
  email: string;
  password: string;
}

type UserRegister = {
  userName: string;
  email: string;
  password: string;
  typeOption: string;
}


type UserData = {
  id: string;
  username: string;
}

type ModalState = {
  login: boolean;
  register: boolean;
}

export const AuthContext = createContext({} as AuthContext);

export const AuthStorage = ({children}:ContextProps) => {
  const [data, setData] = useState<UserData>({id: '', username: ''});
  const [logged, setLogged] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);
  const [modal, setModal] = useState<ModalState>({login: false, register: false});

  const userLogin = async({email, password}:Userlogin) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = login({email, password});
      const res = await fetch(url, options);
      if(!res.ok) throw new Error('Invalid login');
      const json = await res.json();
      const {id , username} = json.user;
      setData(prevState => ({...prevState, id, username}));
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
  
  const userRegister = async ({userName, email, password, typeOption}:UserRegister)=> {
    try{
      setError(null);
      setLoading(true);
      const {url, options} = register({userName, email, password, typeOption});
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