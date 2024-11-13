import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";

const archiveHeader = [
  "Title",
  "Type",
  "Date",
  "Status",
  "Priority",
  "Actions",
];

const archiveData = [
  [
    "New Support Ticket Raised",
    "Support Ticket",
    "09/25/2024",
    "Unread",
    "High",
    "View",
  ],
  [
    "Monthly Fee Reminder",
    "Fee Payment Reminder",
    "09/23/2024",
    "Read",
    "Medium",
    "View",
  ],
  [
    "System Update Completed",
    "System Update",
    "09/22/2024",
    "Read",
    "Low",
    "View",
  ],
  [
    "Parent-Teacher Meeting",
    "Event Reminder",
    "09/20/2024",
    "Unread",
    "High",
    "View",
  ],
];

const ArchiveNotification = () => {
  return (
    <div>
      <TitleComponent title="Archived Notifications" />
      <ButtonFilled text="Restore" />
      <ButtonFilled text="Delete" />
      <ButtonFilled text="Mark as Read / Unread" />
      <TableComponent tableHeader={archiveHeader} tableData={archiveData} />
    </div>
  );
};

export default ArchiveNotification;
