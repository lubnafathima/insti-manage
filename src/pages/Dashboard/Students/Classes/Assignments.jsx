import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const Assignments = () => {
  const assignmentsData = [
    {
      subject: "Maths",
      assignments: [
        {
          title: "Algebra Homework",
          dueDate: "2024-12-10",
          description: "Complete the problems on page 23.",
        },
        {
          title: "Calculus Assignment",
          dueDate: "2024-12-15",
          description: "Solve the integrals from chapter 4.",
        },
        {
          title: "Geometry Homework",
          dueDate: "2024-12-20",
          description: "Solve problems on triangle properties.",
        },
      ],
    },
    {
      subject: "Science",
      assignments: [
        {
          title: "Physics Lab Report",
          dueDate: "2024-12-12",
          description: "Submit the lab report from last week's experiment.",
        },
        {
          title: "Chemistry Assignment",
          dueDate: "2024-12-14",
          description: "Write a summary of the periodic table.",
        },
        {
          title: "Biology Paper",
          dueDate: "2024-12-18",
          description: "Write a 3-page paper on photosynthesis.",
        },
      ],
    },
    {
      subject: "History",
      assignments: [
        {
          title: "World War II Essay",
          dueDate: "2024-12-10",
          description: "Write a 5-page essay on WWII.",
        },
        {
          title: "Ancient Civilizations Project",
          dueDate: "2024-12-17",
          description: "Create a project on Ancient Egypt.",
        },
      ],
    },
    {
      subject: "English",
      assignments: [
        {
          title: "Shakespeare Analysis",
          dueDate: "2024-12-14",
          description: "Write an essay on Hamlet.",
        },
        {
          title: "Poetry Assignment",
          dueDate: "2024-12-16",
          description: "Analyze 3 poems from the Romantic era.",
        },
        {
          title: "Grammar Exercises",
          dueDate: "2024-12-18",
          description: "Complete exercises 1 to 10 in the grammar book.",
        },
      ],
    },
    {
      subject: "Art",
      assignments: [
        {
          title: "Portrait Drawing",
          dueDate: "2024-12-12",
          description: "Draw a self-portrait using charcoal.",
        },
        {
          title: "Abstract Art Project",
          dueDate: "2024-12-15",
          description: "Create an abstract art piece using mixed media.",
        },
      ],
    },
    {
      subject: "Music",
      assignments: [
        {
          title: "Music Theory Exercises",
          dueDate: "2024-12-13",
          description: "Complete the music theory worksheets.",
        },
        {
          title: "Instrument Practice",
          dueDate: "2024-12-18",
          description: "Submit a recording of your practice.",
        },
      ],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleSubmitClick = (assignment) => {
    setSelectedAssignment(assignment);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAssignment(null);
  };

  return (
    <div className="container mx-auto p-4">
      <TitleComponent title="Assignments" />
      <div className="mt-8">
        {assignmentsData.map((classData, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {classData.subject}
            </h2>
            <div className="space-y-4">
              {classData.assignments.map((assignment, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-md font-semibold text-gray-900">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {assignment.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        Due: {assignment.dueDate}
                      </p>
                    </div>
                    <ButtonFilled
                      text="Submit"
                      onClick={() => handleSubmitClick(assignment)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {modalOpen && selectedAssignment && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Submit: {selectedAssignment.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              You are submitting your assignment for{" "}
              {selectedAssignment.subject}.
            </p>
            <div className="mb-4">
              <label
                htmlFor="fileUpload"
                className="block text-sm font-medium text-gray-700"
              >
                Choose File
              </label>
              <input
                type="file"
                id="fileUpload"
                className="mt-1 block w-full border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
