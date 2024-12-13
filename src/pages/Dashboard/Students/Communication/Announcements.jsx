import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableData = [
  ["New Exam Schedule Released", "October 1", "Midterm exams will be held from October 12 to October 16. Please check the schedule in the Exams section.", "/exam-schedule"],
  ["Holiday Announcement", "September 30", "The institution will remain closed on October 5th for a national holiday.", "/holiday-announcement"],
  ["Event Notice", "October 10", "Science Fair on October 25th. All students are encouraged to participate.", "/science-fair"],
  ["Library Renovation Update", "October 5", "The library will be closed for renovations from October 7th to October 14th. Alternative study spaces will be available.", "/library-renovation"],
  ["New Student Orientation", "October 15", "New students are invited to attend the orientation session on October 20th. Please RSVP online.", "/student-orientation"],
  ["Sports Day Announcement", "October 3", "The annual Sports Day will be held on November 1st. Students are encouraged to sign up for events.", "/sports-day"],
  ["Guest Lecture on AI", "October 12", "Join us for a guest lecture on Artificial Intelligence by Dr. John Doe on October 18th at 10 AM.", "/guest-lecture-ai"],
  ["Health and Safety Reminder", "October 2", "All students are reminded to follow the health and safety protocols during campus activities. Please stay safe.", "/health-safety"],
];

const Announcements = () => {
  return (
    <>
      <TitleComponent title="Latest Announcements" />
      <TableComponent
        tableHeader={["Announcement Title", "Announcement Date", "Brief Description", "View Full Announcement"]}
        tableData={tableData}
      />
    </>
  );
};

export default Announcements;
