import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

const SignUp = () => {
  return (
    <div className="bg-slate-50 w-full h-screen flex flex-col justify-center items-center md:p-10 p-6 font-[Helvetica] tracking-wide">
      <div className="bg-white w-full sm:w-96 rounded-xl shadow-md p-10 border">
        <img src={Logo} alt="InstiManage Logo" className="h-6 w-auto" />
        <h1 className="text-4xl font-semibold my-8">Sign up</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>Full name</label>
            <input type="text" placeholder="John Smith" className="border rounded p-2 bg-gray-50" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" className="border rounded p-2 bg-gray-50" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input type="password" placeholder="********" className="border rounded p-2 bg-gray-50" />
          </div>
          <button className="text-sm rounded font-semibold tracking-wider p-2 text-white bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA]">Sign Up</button>
          <p className="text-sm text-center text-slate-600">
            Already have an account? <Link to="/sign-in" className="underline text-black">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
