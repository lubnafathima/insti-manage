import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import Logo from "../assets/logo/logo.png";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SignIn = () => {
  const { setRole } = useRole();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        switch (response.status) {
          case 404:
            throw new Error("User not found. Please check your email.");
          case 401:
            throw new Error("Incorrect password. Please try again.");
          case 400:
            throw new Error(data.message || "Please fill in all required fields.");
          case 429:
            throw new Error("Too many attempts. Please try again later.");
          default:
            throw new Error(data.message || "An error occurred during sign-in.");
        }
      }

      // Store the JWT token in localStorage
      localStorage.setItem('token', data.token);
      setRole(data?.user?.role.toLowerCase());
      console.log('data',data?.user?.role.toLowerCase() )

      // Navigate based on user role
      switch (data?.user?.role.toLowerCase()) {
        case "admin":
          navigate("/admin/home");
          break;
        case "institutes":
          navigate("/institutes/home");
          break;
        case "teachers":
          navigate("/teachers/home");
          break;
        case "students":
          console.log("students switch case applied")
          navigate("/students/home");
          break;
        case "parents":
          navigate("/parents/home");
          break;
        default:
          navigate("/sign-in");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorIcon = (errorMessage) => {
    if (errorMessage.includes("User not found")) return "🔍";
    if (errorMessage.includes("password")) return "🔒";
    if (errorMessage.includes("Too many attempts")) return "⏳";
    return "⚠️";
  };

  return (
    <div className="bg-slate-50 w-full h-screen flex flex-col justify-center items-center md:p-10 p-6 font-[Helvetica] tracking-wide">
      <div className="bg-white w-full sm:w-96 rounded-xl shadow-md p-10 border">
        <img src={Logo} alt="InstiManage Logo" className="h-6 w-auto" />
        <h1 className="text-4xl font-semibold my-8">Sign In</h1>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription className="flex items-center gap-2">
                <span>{getErrorIcon(error)}</span>
                <span>{error}</span>
              </AlertDescription>
            </Alert>
          )}
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border rounded p-2 bg-gray-50 ${
                error && error.includes("email") ? "border-red-500" : ""
              }`}
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-2">
              <label htmlFor="password">Password</label>
              <Link
                to="/forgot-password"
                className="text-sm underline hover:no-underline transition-all duration-300 ease-in-out"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`border rounded p-2 bg-gray-50 ${
                error && error.includes("password") ? "border-red-500" : ""
              }`}
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className={`text-sm rounded font-semibold tracking-wider p-2 text-white 
              ${isLoading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA]"
              } 
              text-center transition-colors duration-300`}
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          <p className="text-sm text-center text-slate-600">
            Don&#39;t have an account?{" "}
            <Link to="/sign-up" className="underline text-black">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;