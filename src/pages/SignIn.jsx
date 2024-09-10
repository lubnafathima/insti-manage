import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

const SignIn = () => {
  return (
    <div className="bg-slate-50 w-full h-screen flex flex-col justify-center items-center md:p-10 p-6 font-[Helvetica] tracking-wide">
      <div className="bg-white w-full sm:w-96 rounded-xl shadow-md p-10 border">
        <img src={Logo} alt="InstiManage Logo" className="h-6 w-auto" />
        <h1 className="text-4xl font-semibold my-8">Sign In</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="border rounded p-2 bg-gray-50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-2">
              <label>Password</label>
              <Link to="" className="text-sm underline hover:no-underline transition-all ease-in">Forgot Password?</Link>
            </div>
            <input
              type="password"
              placeholder="********"
              className="border rounded p-2 bg-gray-50"
            />
          </div>
          <Link to="/dashboard/home" className="text-sm rounded font-semibold tracking-wider p-2 text-white bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA] text-center">
            Sign In
          </Link>
          <p className="text-sm text-center text-slate-600">
            Don&#39;t have an account?{" "}
            <Link to="/sign-up" className="underline text-black">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
