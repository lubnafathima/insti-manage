import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";
import { useRole } from "../context/RoleContext";
import Logo from "../assets/logo/logo.png";

const SignIn = () => {
  const { setRole } = useRole();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // const userIdInput = userId;
    // const passwordInput = password;

    const roles = ["admin", "institutes", "parents", "students", "teachers"];
    let userRole = null;

    try {
      for (const role of roles) {
        const userCollectionRef = collection(db, role);
        const snapshot = await getDocs(userCollectionRef);

        snapshot.docs.forEach((doc) => {
          const userData = doc.data();

          if (userData.userId === userId && userData.password === password)
            userRole = role;
        });

        if (userRole) {
          setRole(userRole);
          break;
        }
      }

      if (userRole) {
        switch (userRole) {
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
            navigate("/students/home");
            break;
          case "parents":
            navigate("/parents/home");
            break;
          default:
            navigate("/sign-in");
        }
      } else {
        alert("No role found for this user or invalid credentials");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-slate-50 w-full h-screen flex flex-col justify-center items-center md:p-10 p-6 font-[Helvetica] tracking-wide">
      <div className="bg-white w-full sm:w-96 rounded-xl shadow-md p-10 border">
        <img src={Logo} alt="InstiManage Logo" className="h-6 w-auto" />
        <h1 className="text-4xl font-semibold my-8">Sign In</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>User ID</label>
            <input
              type="text"
              placeholder="Enter your User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border rounded p-2 bg-gray-50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-2">
              <label>Password</label>
              <Link
                to=""
                className="text-sm underline hover:no-underline transition-all duration-300 ease-in-out"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="type"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded p-2 bg-gray-50"
            />
          </div>
          <button
            className="text-sm rounded font-semibold tracking-wider p-2 text-white bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA] text-center"
            onClick={handleSignIn}
          >
            Sign In
          </button>
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
