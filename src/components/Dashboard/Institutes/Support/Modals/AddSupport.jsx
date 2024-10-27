import SubTitleComponent from "../../../../../styledComponents/SubTitleComponent";

const AddSupport = ({ onCancel }) => {
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
            placeholder="Ms. Alice Smith"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="alice.smith@school.com"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="+1 234 567 890"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="department"
          >
            Department
          </label>
          <input
            type="text"
            id="department"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Science"
          />
        </div>
        {/* Role Assignment Starts */}
        <div className="border-t my-8"></div>
        <SubTitleComponent title="Role Assignment" />
        <div className="mt-4 flex gap-2 items-center justify-start w-full">
          <label
            className="w-1/2 block text-sm font-medium mb-1"
            htmlFor="class_teacher"
          >
            Class Teacher
          </label>
          <input
            type="text"
            id="class_teacher"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="10A (select one class)"
          />
        </div>
        <div className="mt-4 flex gap-2 items-center justify-start w-full">
          <label
            className="w-1/2 block text-sm font-medium mb-1"
            htmlFor="subject_teacher"
          >
            Subject Teacher
          </label>
          <input
            type="text"
            id="subject_teacher"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Physics - 9A, 10B (select one/more class)"
          />
        </div>
        <div className="border-t my-8"></div>
        {/* Role Assignment Ends */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="date">
            Joining Date
          </label>
          <input
            type="text"
            id="date"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="01-Jul-2020"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="id">
            Teacher ID
          </label>
          <input
            type="text"
            id="id"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Auto-generated or custom input"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="qualifications"
          >
            Qualifications
          </label>
          <input
            type="text"
            id="qualifications"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="qualifications"
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

export default AddSupport;
