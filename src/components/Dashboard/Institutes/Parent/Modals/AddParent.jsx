import SubTitleComponent from "../../../../../styledComponents/SubTitleComponent";
import ButtonFilled from "../../../../../styledComponents/ButtonFilled";
import TableComponent from "../../../../../styledComponents/TableComponent";

const studentHeader = ["Student Name", "Grade", "Section", "Status", "Action"];

const studentData = [
  ["Jane Doe", "10th", "A", "Active", "Edit / Delete"],
  ["Luke Smith", "8th", "B", "Inactive", "Edit / Delete"],
];

const communicationHeader = ["Date", "Subject", "Teacher", "Notes"];

const communicationData = [
  [
    "05/09/2024",
    "Homework Query",
    "Mrs. Brown",
    "Parent asked for clarification on assignments.",
  ],
];

const AddParent = ({ onCancel }) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <form className="space-y-4">
      <div className="max-h-96 overflow-y-auto scrollbar-custom p-4">
        <div className="">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="10"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="alice.smith@school.com"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="number">
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="123-456-7890"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center gap-2">
            <SubTitleComponent title="Linked Students" />
            <ButtonFilled text="Add" />
          </div>
          <TableComponent
            studentHeader={studentHeader}
            studentData={studentData}
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center gap-2">
            <SubTitleComponent title="Parent-Teacher Communication" />
            <ButtonFilled text="Add" />
          </div>
          <TableComponent
            communicationHeader={communicationHeader}
            communicationData={communicationData}
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddParent;
