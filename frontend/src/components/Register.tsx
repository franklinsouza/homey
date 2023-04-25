// @ts-nocheck
import { Facebook, Loader2, X } from "lucide-react";
import bg from '../assets/01-3.jpg';
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";

const Register = () => {
  const {     
    userRegister,
    loading,
    error,
    modal,
    setModal 
  } = useContext(AuthContext);
  const [userName, setUserName] = useState();
  const [emailField, setEmailField] = useState();
  const [passwordField, setPasswordField] = useState();
  const [typeOption, setTypeOption] = useState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(emailField && passwordField) {
      userRegister(userName, emailField, passwordField, typeOption);
    }
  }

  const handleClose = () => {
    setModal(prevState => ({ ...prevState, register: false }));
  }

  return(
    <div className={`fixed z-50 t-0 r-0 b-0 l-0 w-full h-full bg-black/50 flex items-center justify-center ${modal.register ? 'block' : 'hidden'}`}>
      <div className="grid sm:grid-cols-2 w-full max-w-[690px] bg-white m-4">
        <div style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-center items-center justify-start relative hidden sm:flex after:w-full after:h-full after:bg-black/30 after:absolute">
          <span className="text-white text-3xl relative z-10 pl-5 font-light">
            Create an account
          </span>
        </div>
        <div className="py-6 px-7">
          <div className="flex justify-between items-center mb-7">
            <span className="font-bold">Register</span>
            <X 
              color="#000" 
              className="opacity-50 cursor-pointer" 
              size={17} 
              onClick={handleClose}
            />
          </div>

          <button className="flex items-center justify-center text-center w-full font-bold text-sm text-[#506dab] border border-[#506dab] p-2 rounded-md mb-3">
            <Facebook fill='#506dab' strokeWidth={0} size={17} className="mr-2"/>
            <span>Register with Facebook</span>
          </button>

          <button className="flex items-center justify-center text-center w-full font-bold text-sm border border-[#EFEFEF] bg-[#EFEFEF] p-2 rounded-md">
            <span>Register with Google</span>
          </button>

          <span className="font-bold text-sm text-center block my-5">
            Or register with Email
          </span>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" className="form-control border border-[#d8dce1] h-[42px] px-3 text-sm rounded-[4px_4px_0_0]" 
              required
              onChange={ e => setUserName(e.target.value)}
            />
            <input type="email" placeholder="Email" className="form-control border border-[#d8dce1] h-[42px] border-t-0 px-3 text-sm rounded-[0]" 
              required
              onChange={ e => setEmailField(e.target.value)}
            />
            <input type="password" placeholder="Password" className="form-control border border-[#d8dce1] h-[42px] border-t-0 px-3 text-sm rounded-[0]"
              required
              onChange={e => setPasswordField(e.target.value)}
            />
            <select 
              className="form-control border-t-0 border-[#d8dce1] rounded-[0_0_4px_4px]"
              onChange={e => setTypeOption(e.target.value)}
              required
            >
              <option value=''>
                Select
              </option>
              <option value='book'>
                I want to book
              </option>
              <option value='host'>
                I want to host
              </option>
            </select>
            {
              error &&
              <p className="text-sm mt-3 text-red-400">
                {error}
              </p>
            }

            <button className="bg-pink text-[#FFF] w-full py-2 font-semibold rounded-[5px] text-center my-4 flex items-center justify-center">
              {loading ? <Loader2 className="animate-spin"/> : 'Register'}
            </button>

            <p className="text-center text-sm">
              Do you have an account? <a href="#" className="text-pink">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;