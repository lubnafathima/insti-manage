import SubTitleComponent from "../../../../../styledComponents/SubTitleComponent";

const AddSupport = ({ onCancel }) => {

  return (
    <form className="space-y-4">
      <div className="max-h-96 overflow-y-auto scrollbar-custom p-4">
        <div className="">
          <label className="block text-sm font-medium mb-1" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="e.g., 'Server Down'"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="priority">
            Priority
          </label>
          <input
            type="email"
            id="priority"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Dropdown (High, Medium, Low)"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="category">
            Category
          </label>
          <input
            type="number"
            id="category"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Dropdown (e.g., Technical, Account, Billing, Other)"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Type something..."
          />
        </div>
        <div className="border-t my-8"></div>
        <SubTitleComponent title="Upload Attachment" />
        <p className="mt-4 border-2 p-4 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100 rounded">+</p>
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
