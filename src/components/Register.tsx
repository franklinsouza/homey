import { Facebook, X } from "lucide-react";
import bg from '../assets/01-3.jpg';

type RegisterProps = {
  registerStatus: boolean,
  changeStatus: object
}

const Register = ({registerStatus, changeStatus}:RegisterProps) => {
  return(
    <div className={`fixed z-50 t-0 r-0 b-0 l-0 w-full h-full bg-black/50 flex items-center justify-center ${registerStatus ? 'block' : 'hidden'}`}>
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
              onClick={() => {changeStatus( previus => !previus)}}
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

          <form className="flex flex-col">
            <input type="text" placeholder="Username or Email" className="form-control border border-[#d8dce1] h-[42px] px-3 text-sm rounded-[4px_4px_0_0]"/>
            <input type="text" placeholder="Password" className="form-control border border-[#d8dce1] h-[42px] border-t-0 px-3 text-sm rounded-[0_0_4px_4px] mb-4"/>

            <button className="bg-pink text-[#FFF] w-full py-2 font-semibold rounded-[5px] text-center">
              Register
            </button>

            <p className="text-center text-sm mt-4">
              Do you have an account? <a href="#" className="text-pink">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;