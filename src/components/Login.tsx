import { Facebook, X } from "lucide-react";
import bg from '../assets/01-3.jpg';

type LoginProps = {
  loginStatus: boolean,
  changeStatus: object
}

const Login = ({loginStatus, changeStatus}:LoginProps) => {
  return(
    <div className={`fixed z-50 t-0 r-0 b-0 l-0 w-full h-full bg-black/50 flex items-center justify-center ${loginStatus ? 'block' : 'hidden'}`}>
      <div className="grid sm:grid-cols-2 w-full max-w-[690px] bg-white m-4">
        <div style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-center items-center justify-start relative py-3 hidden sm:flex after:w-full after:h-full after:bg-black/30 after:absolute">
          <span className="text-white text-3xl relative z-10 pl-5 font-light">
            Welcome back<br /> 
            please log in
          </span>
        </div>
        <div className="py-6 px-7">
          <div className="flex justify-between items-center mb-7">
            <span className="font-bold">Login</span>
            <X 
              color="#000" 
              className="opacity-50 cursor-pointer" 
              size={17} 
              onClick={() => {changeStatus( previus => !previus)}}
            />
          </div>

          <button className="flex items-center justify-center text-center w-full font-bold text-sm text-[#506dab] border border-[#506dab] p-2 rounded-md mb-3">
            <Facebook fill='#506dab' strokeWidth={0} size={17} className="mr-2"/>
            <span>Login with Facebook</span>
          </button>

          <button className="flex items-center justify-center text-center w-full font-bold text-sm border border-[#EFEFEF] bg-[#EFEFEF] p-2 rounded-md">
            <span>Login with Google</span>
          </button>

          <span className="font-bold text-sm text-center block my-5">
            Log in
          </span>

          <form className="flex flex-col">
            <input type="text" placeholder="Username or Email" className="form-control border border-[#d8dce1] h-[42px] px-3 text-sm rounded-[4px_4px_0_0]"/>
            <input type="text" placeholder="Password" className="form-control border border-[#d8dce1] h-[42px] border-t-0 px-3 text-sm rounded-[0_0_4px_4px]"/>

            <div className="flex justify-between items-center my-4">
              <label className="text-sm flex items-center">
                <input type="checkbox" className="mr-2"/>
                Remember me
              </label>

              <a href="" className="text-sm">
                Forgot password?
              </a>
            </div>

            <button className="bg-pink text-[#FFF] w-full py-2 font-semibold rounded-[5px] text-center">
              Log In
            </button>

            <p className="text-center text-sm mt-4">
              Don't have an account? <a href="#" className="text-pink">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;