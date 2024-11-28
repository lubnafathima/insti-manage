import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = [
  "Direction",
  "Student Name",
  "Parent Name",
  "Last Message",
  "Date",
  "Status",
  "Action",
];

const tableData = [
  [
    "Sent",
    "Jane Doe",
    "John Doe",
    "Please review the recent exam results",
    "09/20/2024",
    "Awaiting Reply",
    "View",
  ],
  [
    "Received",
    "Jessi Smith",
    "Mark Smith",
    "Reminder for upcoming parent meeting",
    "09/20/2024",
    "Replied",
    "View",
  ],
  [
    "Sent",
    "Paul Davis",
    "Jack Davis",
    "Progress update for September",
    "09/20/2024",
    "Read",
    "View",
  ],
];

const InboxOutbox = () => {
  return (
    <div>
      <TitleComponent title="Inbox" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      <p>
        Features:
        <br />
        Search or filter by student, class, or parent.
        <br />
        Chronological list of messages with timestamps and message status (e.g.,
        sent, read, replied).
        <br />
        Option to view or download conversation history for meetings or
        record-keeping.
        <br />
        Example Data:
        <br />
        Student: John Doe
        <br />
        Parent: Jane Doe
        <br />
        Message History:
        <br />
        09/10/2024: Sent &#39;Progress report for September&#39;
        <br />
        09/15/2024: Parent replied with questions about the exam.
        <br />
        09/16/2024: Teacher responded to clarify performance details.
        <br />
        Export/Archive Communication
        <br />
      </p>
    </div>
  );
};

export default InboxOutbox;
