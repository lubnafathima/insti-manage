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
import InstitutesArchiveNotification from "./pages/Dashboard/Institutes/ArchiveNotification";
// 
import InstitutesSettings from "./pages/Dashboard/Institutes/Settings/Settings";
import InstitutesAccountSettings from "./pages/Dashboard/Institutes/Settings/AccountSettings";
import InstitutesUserManagement from "./pages/Dashboard/Institutes/Settings/UserManagement";
import InstitutesSubscriptionManagement from "./pages/Dashboard/Institutes/Settings/SubscriptionManagement";
import InstitutesSystemPreferences from "./pages/Dashboard/Institutes/Settings/SystemPreferences";
import InstitutesSecuritySettings from "./pages/Dashboard/Institutes/Settings/SecuritySettings";
// 
import InstitutesHelp from "./pages/Dashboard/Institutes/Help/Help";
import InstitutesContactUs from "./pages/Dashboard/Institutes/Help/ContactUs";
import InstitutesFAQ from "./pages/Dashboard/Institutes/Help/FAQ";
import InstitutesGuidedTutorials from "./pages/Dashboard/Institutes/Help/GuidedTutorials";
import InstitutesLiveChat from "./pages/Dashboard/Institutes/Help/LiveChat";
import InstitutesRecentTickets from "./pages/Dashboard/Institutes/Help/RecentTickets";
import InstitutesSubmitATicket from "./pages/Dashboard/Institutes/Help/SubmitATicket";
// TEACHERS
import TeachersHome from "./pages/Dashboard/Teachers/Home";
import TeachersClassManagement from "./pages/Dashboard/Teachers/ClassManagement";
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
          <Route path="archive" element={<InstitutesArchiveNotification />} />
          <Route path="settings">
            <Route index element={<InstitutesSettings />} />
            <Route
              path="account-settings"
              element={<InstitutesAccountSettings />}
            />
            <Route
              path="user-management"
              element={<InstitutesUserManagement />}
            />
            <Route
              path="subscription-management"
              element={<InstitutesSubscriptionManagement />}
            />
            <Route
              path="system-preferences"
              element={<InstitutesSystemPreferences />}
            />
            <Route
              path="security-settings"
              element={<InstitutesSecuritySettings />}
            />
          </Route>
          <Route path="help">
            <Route index element={<InstitutesHelp />} />
            <Route
              path="contact-us"
              element={<InstitutesContactUs />}
            />
            <Route
              path="faq"
              element={<InstitutesFAQ />}
            />
            <Route
              path="guided-tutorials"
              element={<InstitutesGuidedTutorials />}
            />
            <Route
              path="live-chat"
              element={<InstitutesLiveChat />}
            />
            <Route
              path="recent-tickets"
              element={<InstitutesRecentTickets />}
            />
            <Route
              path="submit-a-ticket"
              element={<InstitutesSubmitATicket />}
            />
          </Route>
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
          <Route path="class" element={<TeachersClassManagement />} />
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
