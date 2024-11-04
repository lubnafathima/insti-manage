import SubTitleComponent from "../../../../../styledComponents/SubTitleComponent";
import ButtonFilled from "../../../../../styledComponents/ButtonFilled";
import TableComponent from "../../../../../styledComponents/TableComponent";

const tableHeader = ["Subject", "Subject Teacher", "Edit/Remove", "Action"];

const tableData = [
  ["Mathematics", "Mr. Smith", "Edit", "Delete"],
  ["Science", "Mrs. Clark", "Edit", "Delete"],
  ["History", "Mr. Brown", "Edit", "Delete"],
];

const AddClass = ({ onCancel }) => {

  return (
    <form className="space-y-4">
      <div className="max-h-96 overflow-y-auto scrollbar-custom p-4">
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="gradeLevel"
          >
            Grade Level
          </label>
          <input
            type="text"
            id="gradeLevel"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="10"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="section">
            Section
          </label>
          <input
            type="email"
            id="section"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="A"
          />
        </div>
        <div className="mt-4">
          <SubTitleComponent title="Assign Class Teacher" />
          <input
            type="number"
            id="classTeacher"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Dropdown list of available teachers"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center gap-2">
            <SubTitleComponent title="Assign Subject Teacher" />
            <ButtonFilled text="Add" />
          </div>
          <TableComponent tableHeader={tableHeader} tableData={tableData} />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center gap-2">
            <SubTitleComponent title="Assign Student" />
            <div className="flex gap-2">
              <ButtonFilled text="Add" />
              <ButtonFilled text="Import (excel/csv)" />
            </div>
          </div>
          <div></div>
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

export default AddClass;
