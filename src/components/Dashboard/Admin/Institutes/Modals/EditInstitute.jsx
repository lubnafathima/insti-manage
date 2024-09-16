
const EditInstitute = ({ onCancel }) => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Institute Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter institute name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          id="location"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter location"
        />
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

export default EditInstitute;
