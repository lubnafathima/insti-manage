import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./components/Dashboard/Layout";
import Home from "./pages/Dashboard/Home";
import Institutes from "./pages/Dashboard/Institutes";
import Settings from "./pages/Dashboard/Settings";
import Help from "./pages/Dashboard/Help";
import Reports from "./pages/Dashboard/Analytics/Reports";
import Payments from "./pages/Dashboard/Analytics/Payments";
import Activities from "./pages/Dashboard/Analytics/Activities";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route path="home" element={<Home />} />
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
