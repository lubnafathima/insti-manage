import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";
import Cards from "../../../styledComponents/Cards";

const subscriptionData = [
  {
    id: 0,
    title: "Plan Name",
    content: "Premium Plan",
  },
  {
    id: 1,
    title: "Start Date",
    content: "2024-07-01",
  },
  {
    id: 2,
    title: "End Date",
    content: "2025-07-01",
  },
  {
    id: 3,
    title: "Status",
    content: "Active",
  },
];

const tableHeader = [
  "Payment Method",
  "Card/Account Details",
  "Status",
  "Default",
  "Actions",
];

const tableData = [
  [
    "Visa",
    "Visa ending in 1111",
    "Active",
    "Yes",
    "Edit, Remove",
  ],
  [
    "MasterCard",
    "MasterCard ending in 5555",
    "Active",
    "No",
    "Edit, Remove",
  ],
  [
    "PayPal",
    "finance@abc-college.com",
    "Linked",
    "No",
    "Edit, Remove",
  ],
  [
    "Chase Bank",
    "Chase Bank, Acct: 987654",
    "Active",
    "No",
    "Edit, Remove",
  ],
];

const Subscription = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center gap-2 mb-4">
        <div className="flex justify-center items-center gap-2">
          <TitleComponent title="Subscription Overview" />
          <ButtonFilled text="View" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p>Auto-renewal On</p>
          <p className="w-10 h-4 bg-slate-200 border-2 border-gray-300 rounded-full flex items-center">
            <p className="w-4 h-4 bg-green-500 rounded-full"></p>
          </p>
          <p>Manual</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        {subscriptionData.map((data) => (
          <Cards key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
      <TitleComponent title="Next Payment Due" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        <div className="">
          <label className="block text-sm font-medium mb-1" htmlFor="date">
            Date
          </label>
          <input
            type="text"
            id="date"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="2025-06-30"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium mb-1" htmlFor="amount">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="$1500"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="paymentMethod"
          >
            Payment Method
          </label>
          <input
            type="text"
            id="paymentMethod"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Visa ending in 1234"
          />
        </div>
        <div className="w-full flex items-end">
          <ButtonFilled text="Make Payment" />
        </div>
        <div className="">
          <ButtonFilled text="View Payment History" />
        </div>
      </div>
      <TitleComponent title="Invoice History" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
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
            htmlFor="unpaidInvoices"
          >
            Unpaid Invoices
          </label>
          <input
            type="text"
            id="unpaidInvoices"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="1"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="overdueInvoices"
          >
            Overdue Invoices
          </label>
          <input
            type="text"
            id="overdueInvoices"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="0"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="upcomingPayment"
          >
            Upcoming Payment
          </label>
          <input
            type="text"
            id="upcomingPayment"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="$1500 due on 2025-06-30"
          />
        </div>
      </div>
      <TitleComponent title="Payment Method" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        <ButtonFilled text="Add New Payment Method" />
        <ButtonFilled text="Edit Payment Method" />
        <ButtonFilled text="Remove Payment Method" />
      </div>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default Subscription;
