import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";
import InputComponent from "../../../styledComponents/InputComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";
import Cards from "../../../styledComponents/Cards";

const notificationsOverview = [
  {
    id: 0,
    title: "Total Notifications",
    content: "50",
  },
  {
    id: 1,
    title: "Unread Notifications",
    content: "10",
  },
  {
    id: 2,
    title: "High-Priority Notifications",
    content: "5",
  },
  {
    id: 3,
    title: "New Notifications Today",
    content: "2",
  },
];

const tableHeader = [
  "Parent Name",
  "Email",
  "Phone Number",
  "Linked Students",
  "Status (sort)",
  "Actions",
];

const tableData = [
  [
    "John Doe",
    "john.doe@email.com",
    "123-456-7890",
    "Jane Doe (Class 10)",
    "Active",
    "View/Edit/Notify",
  ],
  [
    "Mary Smith",
    "mary.smith@email.com",
    "987-654-3210",
    "Mark Smith (Class 8), Luke Smith (Class 6)",
    "Active",
    "View/Edit/Notify",
  ],
  [
    "Alan Green",
    "-",
    "555-555-5555",
    "Emily Green (Class 9)",
    "Inactive",
    "View/Edit/Notify",
  ],
];

const Notification = () => {
  return (
    <div>
      <div>
        <TitleComponent title="Notifications Overview" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
          {notificationsOverview.map((data) => (
            <Cards key={data.id} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
      <InputComponent placeholder='search for specific notifications by keyword (e.g., "attendance", "fee payment reminder")' />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 mb-4 gap-2">
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="totalInvoices"
          >
            Total Invoices
          </label>
          <input
            type="text"
            id="totalInvoices"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="12"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="totalInvoices"
          >
            Total Invoices
          </label>
          <input
            type="text"
            id="totalInvoices"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="12"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="totalInvoices"
          >
            Total Invoices
          </label>
          <input
            type="text"
            id="totalInvoices"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="12"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="totalInvoices"
          >
            Total Invoices
          </label>
          <input
            type="text"
            id="totalInvoices"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="12"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="totalInvoices"
          >
            Total Invoices
          </label>
          <input
            type="text"
            id="totalInvoices"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="12"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="totalInvoices"
          >
            Total Invoices
          </label>
          <input
            type="text"
            id="totalInvoices"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="12"
          />
        </div> 
      </div>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default Notification;
