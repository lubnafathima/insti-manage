import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const categorizedData = {
  Academic: [
    [
      "Midterm Exam Results Released",
      "October 10, 2024",
      "Check your results in the Grades section",
      "/exam-results",
    ],
  ],
  Communication: [
    [
      "New Message from Ms. Roberts",
      "October 8, 2024",
      "Math Class Discussion",
      "/messages/ms-roberts",
    ],
  ],
  Events: [
    [
      "Science Fair on October 25th",
      "October 1, 2024",
      "Participate in this year's Science Fair!",
      "/science-fair",
    ],
  ],
  Reminders: [
    [
      "Assignment Due Tomorrow",
      "October 9, 2024",
      "Submit your History assignment by 5 PM",
      "/history-assignment",
    ],
  ],
  SystemUpdates: [
    [
      "Password Change Notification",
      "October 6, 2024",
      "You successfully changed your password",
      "/password-change",
    ],
  ],
};

const CategorizedNotifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCategoryChange = (e) => setCategoryFilter(e.target.value);

  const handlePriorityChange = (e) => setPriorityFilter(e.target.value);

  const handleDateChange = (type, e) => {
    setDateRange({
      ...dateRange,
      [type]: e.target.value,
    });
  };

  const applyFilters = () => {
    toggleModal();

    console.log("Filters applied:", {
      categoryFilter,
      priorityFilter,
      dateRange,
    });
  };

  const filteredData = categorizedData;

  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleComponent title="Categorized Notifications" />
        <ButtonFilled text="Filter" onClick={toggleModal} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Apply Filters</h2>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-lg font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                value={categoryFilter}
                onChange={handleCategoryChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Academic">Academic</option>
                <option value="Communication">Communication</option>
                <option value="Events">Events</option>
                <option value="Reminders">Reminders</option>
                <option value="SystemUpdates">System Updates</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="priority"
                className="block text-lg font-medium text-gray-700"
              >
                Priority
              </label>
              <select
                id="priority"
                value={priorityFilter}
                onChange={handlePriorityChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Priority</option>
                <option value="Important">Important</option>
                <option value="General">General</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Date Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  value={dateRange.startDate}
                  onChange={(e) => handleDateChange("startDate", e)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="date"
                  value={dateRange.endDate}
                  onChange={(e) => handleDateChange("endDate", e)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={applyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {Object.keys(filteredData).map((category) => (
        <div key={category} className="mt-6">
          <h3 className="text-md font-semibold">{category}</h3>
          <TableComponent
            tableHeader={[
              "Notification Title",
              "Date",
              "Brief Description",
              "View Full Notification",
            ]}
            tableData={filteredData[category]}
          />
        </div>
      ))}
    </div>
  );
};

export default CategorizedNotifications;
