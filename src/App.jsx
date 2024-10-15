import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./components/Dashboard/Layout";
import { RoleProtectedRoute } from "./routes/RoleProtectedRoute";
import { RoleProvider } from "./context/RoleContext";
// ADMIN
import AdminHome from "./pages/Dashboard/Admin/Home";
import Institutes from "./pages/Dashboard/Admin/Institutes";
import Settings from "./pages/Dashboard/Admin/Settings";
import Help from "./pages/Dashboard/Admin/Help";
import Reports from "./pages/Dashboard/Admin/Analytics/Reports";
import Payments from "./pages/Dashboard/Admin/Analytics/Payments";
import Activities from "./pages/Dashboard/Admin/Analytics/Activities";
// INSTITUTES
import InstitutesHome from "./pages/Dashboard/Institutes/Home";
import InstitutesTeacher from "./pages/Dashboard/Institutes/Teacher";
import InstitutesStudent from "./pages/Dashboard/Institutes/Student";
import InstitutesClass from "./pages/Dashboard/Institutes/Class";
import InstitutesParent from "./pages/Dashboard/Institutes/Parent";
import InstitutesSupport from "./pages/Dashboard/Institutes/Support";
import InstitutesSubscription from "./pages/Dashboard/Institutes/Subscription";
import InstitutesReports from "./pages/Dashboard/Institutes/Reports";
import InstitutesNotification from "./pages/Dashboard/Institutes/Notification";
import InstitutesSettings from "./pages/Dashboard/Institutes/Settings";
import InstitutesHelp from "./pages/Dashboard/Institutes/Help";
// TEACHERS
import TeachersHome from "./pages/Dashboard/Teachers/Home";
// STUDENTS
import StudentsHome from "./pages/Dashboard/Students/Home";
// PARENTS
import ParentsHome from "./pages/Dashboard/Parents/Home";

function App() {
  return (
    <RoleProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <RoleProtectedRoute roleRequired="admin">
              <Layout />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="home" element={<AdminHome />} />
          <Route path="institutes" element={<Institutes />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
          <Route path="reports" element={<Reports />} />
          <Route path="payments" element={<Payments />} />
          <Route path="activities" element={<Activities />} />
        </Route>
        {/* INSTITUTES */}
        <Route
          path="/institutes"
          element={
            <RoleProtectedRoute roleRequired="institutes">
              <Layout />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<InstitutesHome />} />
          <Route path="home" element={<InstitutesHome />} />
          <Route path="teacher" element={<InstitutesTeacher />} />
          <Route path="student" element={<InstitutesStudent />} />
          <Route path="class" element={<InstitutesClass />} />
          <Route path="parent" element={<InstitutesParent />} />
          <Route path="support" element={<InstitutesSupport />} />
          <Route path="subscription" element={<InstitutesSubscription />} />
          <Route path="reports" element={<InstitutesReports />} />
          <Route path="notification" element={<InstitutesNotification />} />
          <Route path="settings" element={<InstitutesSettings />} />
          <Route path="help" element={<InstitutesHelp />} />
        </Route>
        {/* TEACHERS */}
        <Route
          path="/teachers"
          element={
            <RoleProtectedRoute roleRequired="teachers">
              <Layout />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<TeachersHome />} />
          <Route path="home" element={<TeachersHome />} />
        </Route>
        {/* STUDENTS */}
        <Route
          path="/students"
          element={
            <RoleProtectedRoute roleRequired="students">
              <Layout />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<StudentsHome />} />
          <Route path="home" element={<StudentsHome />} />
        </Route>
        {/* PARENTS */}
        <Route
          path="/parents"
          element={
            <RoleProtectedRoute roleRequired="parents">
              <Layout />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<ParentsHome />} />
          <Route path="home" element={<ParentsHome />} />
        </Route>
      </Routes>
    </RoleProvider>
  );
}

export default App;
