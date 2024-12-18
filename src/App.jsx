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
import TeachersClassSchedule from "./pages/Dashboard/Teachers/ClassSchedule";
//
import TeachersSubjectManagement from "./pages/Dashboard/Teachers/SubjectManagement/SubjectManagement";
import TeachersCurriculumManagement from "./pages/Dashboard/Teachers/SubjectManagement/CurriculumManagement";
import TeachersGradesAssessment from "./pages/Dashboard/Teachers/SubjectManagement/GradesAssessment";
import TeachersStudentProgress from "./pages/Dashboard/Teachers/SubjectManagement/StudentProgress";
import TeachersSubjectAnnouncements from "./pages/Dashboard/Teachers/SubjectManagement/SubjectAnnouncements";
import TeachersSubjectAssignments from "./pages/Dashboard/Teachers/SubjectManagement/SubjectAssignments";
import TeachersSubjectAttendance from "./pages/Dashboard/Teachers/SubjectManagement/SubjectAttendance";
import TeachersSubjectOverview from "./pages/Dashboard/Teachers/SubjectManagement/SubjectOverview";
import TeachersSubjectResources from "./pages/Dashboard/Teachers/SubjectManagement/SubjectResources";
//
import TeachersStudentReports from "./pages/Dashboard/Teachers/StudentReports/StudentReports";
import TeachersCustomReports from "./pages/Dashboard/Teachers/StudentReports/CustomReports";
import TeachersExport from "./pages/Dashboard/Teachers/StudentReports/Export";
import TeachersIndividualStudent from "./pages/Dashboard/Teachers/StudentReports/IndividualStudent";
import TeachersRecentReports from "./pages/Dashboard/Teachers/StudentReports/RecentReports";
import TeachersStudentOverview from "./pages/Dashboard/Teachers/StudentReports/StudentOverview";
import TeachersSubjectReports from "./pages/Dashboard/Teachers/StudentReports/SubjectReports";
//
import TeachersParentCommunication from "./pages/Dashboard/Teachers/ParentCommunication/ParentCommunication";
import TeachersAnnouncements from "./pages/Dashboard/Teachers/ParentCommunication/Announcements";
import TeachersInboxOutbox from "./pages/Dashboard/Teachers/ParentCommunication/InboxOutbox";
import TeachersRealTimeChat from "./pages/Dashboard/Teachers/ParentCommunication/RealTimeChat";
//
import TeachersAssignmentsExams from "./pages/Dashboard/Teachers/AssignmentsExams/AssignmentsExams";
import TeachersAssignmentsOverview from "./pages/Dashboard/Teachers/AssignmentsExams/AssignmentsOverview";
import TeachersCreateNewAssignment from "./pages/Dashboard/Teachers/AssignmentsExams/CreateNewAssignment";
import TeachersCreateNewExam from "./pages/Dashboard/Teachers/AssignmentsExams/CreateNewExam";
import TeachersExamOverview from "./pages/Dashboard/Teachers/AssignmentsExams/ExamOverview";
import TeachersSubmissions from "./pages/Dashboard/Teachers/AssignmentsExams/Submissions";
import TeachersNotifications from "./pages/Dashboard/Teachers/AssignmentsExams/Notifications";
import TeachersViewDetails from "./pages/Dashboard/Teachers/AssignmentsExams/ViewDetails";
//
import TeachersSettings from "./pages/Dashboard/Teachers/Settings/Settings";
import TeachersAccountSettings from "./pages/Dashboard/Teachers/Settings/AccountSettings";
import TeachersClassroomPreferences from "./pages/Dashboard/Teachers/Settings/ClassroomPreferences";
import TeachersIntegrations from "./pages/Dashboard/Teachers/Settings/Integrations";
import TeachersNotificationsSettings from "./pages/Dashboard/Teachers/Settings/NotificationsSettings";
import TeachersPersonalInformation from "./pages/Dashboard/Teachers/Settings/PersonalInformation";
import TeachersPrivacySettings from "./pages/Dashboard/Teachers/Settings/PrivacySettings";
import TeachersSecuritySettings from "./pages/Dashboard/Teachers/Settings/SecuritySettings";
import TeachersSupportHelp from "./pages/Dashboard/Teachers/Settings/SupportHelp";
// STUDENTS
import StudentsHome from "./pages/Dashboard/Students/Home";
//
import StudentClasses from "./pages/Dashboard/Students/Classes/Classes";
import StudentTimeTable from "./pages/Dashboard/Students/Classes/TimeTable";
import StudentClassOverview from "./pages/Dashboard/Students/Classes/ClassOverview";
import StudentClassAssignments from "./pages/Dashboard/Students/Classes/Assignments";
import StudentMaterials from "./pages/Dashboard/Students/Classes/Materials";
import StudentClassNotes from "./pages/Dashboard/Students/Classes/ClassNotes";
import StudentClassCommunication from "./pages/Dashboard/Students/Classes/Communication";
//
import StudentAssignments from "./pages/Dashboard/Students/Assignments/Assignments";
import StudentAssignmentsOverview from "./pages/Dashboard/Students/Assignments/AssignmentsOverview";
import StudentUpcomingDeadlines from "./pages/Dashboard/Students/Assignments/UpcomingDeadlines";
import StudentSubmission from "./pages/Dashboard/Students/Assignments/Submission";
import StudentAssignmentGrading from "./pages/Dashboard/Students/Assignments/Grading";
import StudentAssignmentArchive from "./pages/Dashboard/Students/Assignments/Archive";
import StudentAssignmentCalendarView from "./pages/Dashboard/Students/Assignments/CalendarView";
//
import StudentExams from "./pages/Dashboard/Students/Exams/Exams";
import StudentExamsOverview from "./pages/Dashboard/Students/Exams/ExamsOverview";
import StudentExamGrading from "./pages/Dashboard/Students/Exams/Grading";
import StudentExamArchive from "./pages/Dashboard/Students/Exams/Archive";
import StudentExamCalendarView from "./pages/Dashboard/Students/Exams/CalendarView";
//
import StudentGrades from "./pages/Dashboard/Students/Grades/Grades";
import StudentGradeOverview from "./pages/Dashboard/Students/Grades/GradeOverview";
import StudentDetailedGrade from "./pages/Dashboard/Students/Grades/DetailedGrade";
import StudentCumulativeGrade from "./pages/Dashboard/Students/Grades/CumulativeGrade";
import StudentGradeAnalysis from "./pages/Dashboard/Students/Grades/GradeAnalysis";
import StudentGradeFeedback from "./pages/Dashboard/Students/Grades/GradeFeedback";
import StudentGradeComparison from "./pages/Dashboard/Students/Grades/GradeComparison";
import StudentDownloadReport from "./pages/Dashboard/Students/Grades/DownloadReport";
//
import StudentAttendance from "./pages/Dashboard/Students/Attendance/Attendance";
import StudentAttendanceOverview from "./pages/Dashboard/Students/Attendance/AttendanceOverview";
import StudentAttendanceRecord from "./pages/Dashboard/Students/Attendance/AttendanceRecord";
import StudentAttendanceBySubject from "./pages/Dashboard/Students/Attendance/AttendanceBySubject";
import StudentAbsenceHistory from "./pages/Dashboard/Students/Attendance/AbsenceHistory";
import StudentAttendanceWarnings from "./pages/Dashboard/Students/Attendance/AttendanceWarnings";
import StudentAttendanceAnalysis from "./pages/Dashboard/Students/Attendance/AttendanceAnalysis";
import StudentAttendanceDownloadReport from "./pages/Dashboard/Students/Attendance/DownloadReport";
//
import StudentReports from "./pages/Dashboard/Students/Reports/Reports";
import StudentPerformanceSummary from "./pages/Dashboard/Students/Reports/PerformanceSummary";
import StudentGradeReport from "./pages/Dashboard/Students/Reports/GradeReport";
import StudentAssignmentPerformance from "./pages/Dashboard/Students/Reports/AssignmentPerformance";
import StudentExamPerformance from "./pages/Dashboard/Students/Reports/ExamPerformance";
import StudentAttendanceReport from "./pages/Dashboard/Students/Reports/AttendanceReport";
import StudentProgressTracking from "./pages/Dashboard/Students/Reports/ProgressTracking";
//
import StudentCommunication from "./pages/Dashboard/Students/Communication/Communication";
import StudentAnnouncements from "./pages/Dashboard/Students/Communication/Announcements";
import StudentContactTeachers from "./pages/Dashboard/Students/Communication/ContactTeachers";
import StudentClassDiscussions from "./pages/Dashboard/Students/Communication/ClassDiscussions";
import StudentSupportTickets from "./pages/Dashboard/Students/Communication/SupportTickets";
import StudentCommunicationNotifications from "./pages/Dashboard/Students/Communication/Notifications";
import StudentAttachments from "./pages/Dashboard/Students/Communication/Attachments";
import StudentCommunicationHistory from "./pages/Dashboard/Students/Communication/CommunicationHistory";
//
import StudentNotifications from "./pages/Dashboard/Students/Notifications/Notifications";
import StudentCategorizedNotifications from "./pages/Dashboard/Students/Notifications/CategorizedNotifications";
import StudentNotificationDetails from "./pages/Dashboard/Students/Notifications/NotificationDetails";
import StudentActionableNotifications from "./pages/Dashboard/Students/Notifications/ActionableNotifications";
import StudentReadNotifications from "./pages/Dashboard/Students/Notifications/ReadNotifications";
import StudentSearchNotifications from "./pages/Dashboard/Students/Notifications/SearchNotifications";
import StudentNotificationSettings from "./pages/Dashboard/Students/Notifications/NotificationSettings";
//
import StudentParentPortal from "./pages/Dashboard/Students/ParentPortal/ParentPortal";
import StudentParentInformation from "./pages/Dashboard/Students/ParentPortal/ParentInformation";
import StudentAcademicReports from "./pages/Dashboard/Students/ParentPortal/AcademicReports";
import StudentParentPortalProgressTracking from "./pages/Dashboard/Students/ParentPortal/ProgressTracking";
import StudentAttendanceReports from "./pages/Dashboard/Students/ParentPortal/AttendanceReports";
import StudentParentPortalCommunication from "./pages/Dashboard/Students/ParentPortal/Communication";
import StudentParentPortalNotifications from "./pages/Dashboard/Students/ParentPortal/Notifications";
import StudentMeetingSchedules from "./pages/Dashboard/Students/ParentPortal/MeetingSchedules";
import StudentParentalPermissions from "./pages/Dashboard/Students/ParentPortal/ParentalPermissions";
import StudentActivityLogs from "./pages/Dashboard/Students/ParentPortal/ActivityLogs";
//
import StudentSettings from "./pages/Dashboard/Students/Settings/Settings";
import StudentProfileSettings from "./pages/Dashboard/Students/Settings/ProfileSettings";
import StudentAccountSettings from "./pages/Dashboard/Students/Settings/AccountSettings";
import StudentSettingsNotification from "./pages/Dashboard/Students/Settings/NotificationSettings";
import StudentPrivacySettings from "./pages/Dashboard/Students/Settings/PrivacySettings";
import StudentSecurity from "./pages/Dashboard/Students/Settings/Security";
import StudentAcademicPreferences from "./pages/Dashboard/Students/Settings/AcademicPreferences";
import StudentCommunicationPreferences from "./pages/Dashboard/Students/Settings/CommunicationPreferences";
import StudentLinkedAccounts from "./pages/Dashboard/Students/Settings/LinkedAccounts";
import StudentAppearance from "./pages/Dashboard/Students/Settings/Appearance";
import StudentHelp from "./pages/Dashboard/Students/Settings/Help";
// PARENTS
import ParentsHome from "./pages/Dashboard/Parents/Home";
import ParentsStudentPerformance from "./pages/Dashboard/Parents/StudentPerformance";
import ParentsAttendance from "./pages/Dashboard/Parents/Attendance";
import ParentsAssignments from "./pages/Dashboard/Parents/Assignments";
import ParentsExams from "./pages/Dashboard/Parents/Exams";
import ParentsCommunications from "./pages/Dashboard/Parents/Communications";

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
            <Route path="contact-us" element={<InstitutesContactUs />} />
            <Route path="faq" element={<InstitutesFAQ />} />
            <Route
              path="guided-tutorials"
              element={<InstitutesGuidedTutorials />}
            />
            <Route path="live-chat" element={<InstitutesLiveChat />} />
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
          <Route path="schedule" element={<TeachersClassSchedule />} />
          <Route path="subject">
            <Route index element={<TeachersSubjectManagement />} />
            <Route
              path="curriculum"
              element={<TeachersCurriculumManagement />}
            />
            <Route path="grades" element={<TeachersGradesAssessment />} />
            <Route path="progress" element={<TeachersStudentProgress />} />
            <Route
              path="announcements"
              element={<TeachersSubjectAnnouncements />}
            />
            <Route
              path="assignments"
              element={<TeachersSubjectAssignments />}
            />
            <Route path="attendance" element={<TeachersSubjectAttendance />} />
            <Route path="overview" element={<TeachersSubjectOverview />} />
            <Route path="resources" element={<TeachersSubjectResources />} />
          </Route>
          <Route path="reports">
            <Route index element={<TeachersStudentReports />} />
            <Route path="custom-Reports" element={<TeachersCustomReports />} />
            <Route path="export" element={<TeachersExport />} />
            <Route path="student" element={<TeachersIndividualStudent />} />
            <Route path="recent-reports" element={<TeachersRecentReports />} />
            <Route
              path="student-overview"
              element={<TeachersStudentOverview />}
            />
            <Route
              path="subject-reports"
              element={<TeachersSubjectReports />}
            />
          </Route>
          <Route path="communication">
            <Route index element={<TeachersParentCommunication />} />
            <Route path="announcements" element={<TeachersAnnouncements />} />
            <Route path="mail" element={<TeachersInboxOutbox />} />
            <Route path="chat" element={<TeachersRealTimeChat />} />
          </Route>
          <Route path="assignments">
            <Route index element={<TeachersAssignmentsExams />} />
            <Route path="overview" element={<TeachersAssignmentsOverview />} />
            <Route
              path="new-assignment"
              element={<TeachersCreateNewAssignment />}
            />
            <Route path="new-exam" element={<TeachersCreateNewExam />} />
            <Route path="exam-overview" element={<TeachersExamOverview />} />
            <Route path="submissions" element={<TeachersSubmissions />} />
            <Route path="notifications" element={<TeachersNotifications />} />
            <Route path="view" element={<TeachersViewDetails />} />
          </Route>
          <Route path="settings">
            <Route index element={<TeachersSettings />} />
            <Route
              path="account-settings"
              element={<TeachersAccountSettings />}
            />
            <Route
              path="preferences"
              element={<TeachersClassroomPreferences />}
            />
            <Route path="integrations" element={<TeachersIntegrations />} />
            <Route
              path="notifications"
              element={<TeachersNotificationsSettings />}
            />
            <Route
              path="personal-information"
              element={<TeachersPersonalInformation />}
            />
            <Route path="privacy" element={<TeachersPrivacySettings />} />
            <Route path="security" element={<TeachersSecuritySettings />} />
            <Route path="support-help" element={<TeachersSupportHelp />} />
          </Route>
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
          <Route path="classes">
            <Route index element={<StudentClasses />} />
            <Route path="timetable" element={<StudentTimeTable />} />
            <Route path="class-overview" element={<StudentClassOverview />} />
            <Route path="assignments" element={<StudentClassAssignments />} />
            <Route path="materials" element={<StudentMaterials />} />
            <Route path="class-notes" element={<StudentClassNotes />} />
            <Route
              path="communication"
              element={<StudentClassCommunication />}
            />
          </Route>
          <Route path="assignments">
            <Route index element={<StudentAssignments />} />
            <Route
              path="assignments-overview"
              element={<StudentAssignmentsOverview />}
            />
            <Route
              path="upcoming-deadlines"
              element={<StudentUpcomingDeadlines />}
            />
            <Route path="submission" element={<StudentSubmission />} />
            <Route path="grading" element={<StudentAssignmentGrading />} />
            <Route path="archive" element={<StudentAssignmentArchive />} />
            <Route
              path="calendar-view"
              element={<StudentAssignmentCalendarView />}
            />
          </Route>
          <Route path="exams">
            <Route index element={<StudentExams />} />
            <Route path="exams-overview" element={<StudentExamsOverview />} />
            <Route path="exam-grading" element={<StudentExamGrading />} />
            <Route path="exam-archive" element={<StudentExamArchive />} />
            <Route
              path="exam-calendar-view"
              element={<StudentExamCalendarView />}
            />
            <Route
              path="exam-calendar-view"
              element={<StudentExamCalendarView />}
            />
          </Route>
          <Route path="grades">
            <Route index element={<StudentGrades />} />
            <Route path="grade-overview" element={<StudentGradeOverview />} />
            <Route path="detailed-grade" element={<StudentDetailedGrade />} />
            <Route
              path="cumulative-grade"
              element={<StudentCumulativeGrade />}
            />
            <Route path="grade-analysis" element={<StudentGradeAnalysis />} />
            <Route path="grade-feedback" element={<StudentGradeFeedback />} />
            <Route
              path="grade-comparison"
              element={<StudentGradeComparison />}
            />
            <Route path="download-report" element={<StudentDownloadReport />} />
          </Route>
          <Route path="attendance">
            <Route index element={<StudentAttendance />} />
            <Route
              path="attendance-overview"
              element={<StudentAttendanceOverview />}
            />
            <Route
              path="attendance-record"
              element={<StudentAttendanceRecord />}
            />
            <Route
              path="attendance-by-subject"
              element={<StudentAttendanceBySubject />}
            />
            <Route path="absence-history" element={<StudentAbsenceHistory />} />
            <Route
              path="attendance-warnings"
              element={<StudentAttendanceWarnings />}
            />
            <Route
              path="attendance-analysis"
              element={<StudentAttendanceAnalysis />}
            />
            <Route
              path="attendance-download-report"
              element={<StudentAttendanceDownloadReport />}
            />
          </Route>
          <Route path="reports">
            <Route index element={<StudentReports />} />
            <Route
              path="performance-summary"
              element={<StudentPerformanceSummary />}
            />
            <Route path="grade-Report" element={<StudentGradeReport />} />
            <Route
              path="assignment-performance"
              element={<StudentAssignmentPerformance />}
            />
            <Route
              path="exam-performance"
              element={<StudentExamPerformance />}
            />
            <Route
              path="attendance-report"
              element={<StudentAttendanceReport />}
            />
            <Route
              path="progress-tracking"
              element={<StudentProgressTracking />}
            />
          </Route>
          <Route path="communication">
            <Route index element={<StudentCommunication />} />
            <Route path="announcements" element={<StudentAnnouncements />} />
            <Route
              path="contact-teachers"
              element={<StudentContactTeachers />}
            />
            <Route
              path="class-discussions"
              element={<StudentClassDiscussions />}
            />
            <Route path="Support-tickets" element={<StudentSupportTickets />} />
            <Route
              path="notifications"
              element={<StudentCommunicationNotifications />}
            />
            <Route path="attachments" element={<StudentAttachments />} />
            <Route path="history" element={<StudentCommunicationHistory />} />
          </Route>
          <Route path="notifications">
            <Route index element={<StudentNotifications />} />
            <Route
              path="categorized-notifications"
              element={<StudentCategorizedNotifications />}
            />
            <Route
              path="notification-details"
              element={<StudentNotificationDetails />}
            />
            <Route
              path="actionable-notifications"
              element={<StudentActionableNotifications />}
            />
            <Route
              path="read-notifications"
              element={<StudentReadNotifications />}
            />
            <Route
              path="search-notifications"
              element={<StudentSearchNotifications />}
            />
            <Route
              path="notification-settings"
              element={<StudentNotificationSettings />}
            />
          </Route>
          <Route path="parent-portal">
            <Route index element={<StudentParentPortal />} />
            <Route
              path="parent-information"
              element={<StudentParentInformation />}
            />
            <Route
              path="academic-reports"
              element={<StudentAcademicReports />}
            />
            <Route
              path="progress-tracking"
              element={<StudentParentPortalProgressTracking />}
            />
            <Route
              path="attendance-reports"
              element={<StudentAttendanceReports />}
            />
            <Route
              path="communication"
              element={<StudentParentPortalCommunication />}
            />
            <Route
              path="notifications"
              element={<StudentParentPortalNotifications />}
            />
            <Route
              path="meeting-schedules"
              element={<StudentMeetingSchedules />}
            />
            <Route
              path="parental-permissions"
              element={<StudentParentalPermissions />}
            />
            <Route path="activity-logs" element={<StudentActivityLogs />} />
          </Route>
          <Route path="settings">
            <Route index element={<StudentSettings />} />
            <Route
              path="profile-settings"
              element={<StudentProfileSettings />}
            />
            <Route
              path="account-settings"
              element={<StudentAccountSettings />}
            />
            <Route
              path="notification-settings"
              element={<StudentSettingsNotification />}
            />
            <Route
              path="privacy-settings"
              element={<StudentPrivacySettings />}
            />
            <Route path="security" element={<StudentSecurity />} />
            <Route
              path="academic-preferences"
              element={<StudentAcademicPreferences />}
            />
            <Route
              path="communication-preferences"
              element={<StudentCommunicationPreferences />}
            />
            <Route path="linked-accounts" element={<StudentLinkedAccounts />} />
            <Route path="appearance" element={<StudentAppearance />} />
            <Route path="help" element={<StudentHelp />} />
          </Route>
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
          <Route
            path="student-performance"
            element={<ParentsStudentPerformance />}
          />
          <Route path="attendance" element={<ParentsAttendance />} />
          <Route path="assignments" element={<ParentsAssignments />} />
          <Route path="exams" element={<ParentsExams />} />
          <Route path="communication" element={<ParentsCommunications />} />
        </Route>
      </Routes>
    </RoleProvider>
  );
}

export default App;
