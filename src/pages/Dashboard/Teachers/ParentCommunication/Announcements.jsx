import TitleComponent from "../../../../styledComponents/TitleComponent";

const Announcements = () => {
  return (
    <div>
      <TitleComponent title="Inbox" />
      <p>
        Features: <br />
        1. Compose new messages or announcements. <br />
        2. Select multiple recipients based on class, subject, or group (e.g.,
        all parents of Grade 5 students). <br />
        3. Use pre-made message templates for common communications like Exam
        Results, Behavior Updates, or Reminders. <br />
        4. Attach files or documents (e.g., exam results, reports). <br />
        Message Template Example:
        <br />
        Subject: Monthly Progress Report Body: <br />
        &#34;Dear Parent, I hope this message finds you well. Here is an update
        on [Student Name]&#39;s performance for the month of September. <br />
        Overall Grade: 85% <br />
        Attendance: 94% <br />
        Behavioral Notes: Positive attitude in class. <br />
        Feel free to reach out if you have any questions. <br />
        Best regards, <br />
        [Teacher Name]&#34;
      </p>
    </div>
  );
};

export default Announcements;
