import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./components/Dashboard/Layout";
// ADMIN
import AdminHome from "./pages/Dashboard/Admin/Home";
import Institutes from "./pages/Dashboard/Admin/Institutes";
import Settings from "./pages/Dashboard/Admin/Settings";
import Help from "./pages/Dashboard/Admin/Help";
import Reports from "./pages/Dashboard/Admin/Analytics/Reports";
import Payments from "./pages/Dashboard/Admin/Analytics/Payments";
import Activities from "./pages/Dashboard/Admin/Analytics/Activities";
// INSTITUTE
import InstituteHome from "./pages/Dashboard/Institute/Home";
// TEACHER
import TeacherHome from "./pages/Dashboard/Teacher/Home";
// STUDENT
import StudentHome from "./pages/Dashboard/Student/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route path="home" element={<AdminHome />} />
        <Route path="institutes" element={<Institutes />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<Help />} />
        <Route path="reports" element={<Reports />} />
        <Route path="payments" element={<Payments />} />
        <Route path="activities" element={<Activities />} />
      </Route>
    </Routes>
  );
}

export default App;
