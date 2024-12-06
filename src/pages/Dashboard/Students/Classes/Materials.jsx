import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const materialsData = [
  {
    subject: "Maths",
    materials: [
      {
        title: "Algebra Notes",
        type: "PDF",
        link: "#",
        description: "Download the full notes for algebra.",
      },
      {
        title: "Calculus Presentation",
        type: "PPT",
        link: "#",
        description: "Download the PPT slides for calculus.",
      },
      {
        title: "Geometry Lecture",
        type: "Video",
        link: "#",
        description: "Watch the recorded lecture for geometry.",
      },
    ],
  },
  {
    subject: "Science",
    materials: [
      {
        title: "Physics Lab Guide",
        type: "PDF",
        link: "#",
        description: "Download the lab guide for physics.",
      },
      {
        title: "Chemistry Presentation",
        type: "PPT",
        link: "#",
        description: "Download the PPT slides for chemistry.",
      },
      {
        title: "Biology Experiment Video",
        type: "Video",
        link: "#",
        description: "Watch the experiment video for biology.",
      },
    ],
  },
  {
    subject: "History",
    materials: [
      {
        title: "WWII Documentary",
        type: "Video",
        link: "#",
        description: "Watch the documentary on WWII.",
      },
      {
        title: "Ancient Civilizations PDF",
        type: "PDF",
        link: "#",
        description: "Download the document on ancient civilizations.",
      },
      {
        title: "World War I Timeline",
        type: "PDF",
        link: "#",
        description: "Download the PDF with the timeline of World War I.",
      },
    ],
  },
  {
    subject: "English",
    materials: [
      {
        title: "Shakespeare Analysis PDF",
        type: "PDF",
        link: "#",
        description: "Download the analysis of Shakespeare's works.",
      },
      {
        title: "Poetry Workshop Presentation",
        type: "PPT",
        link: "#",
        description: "Download the workshop slides on poetry.",
      },
      {
        title: "Grammar Exercises PDF",
        type: "PDF",
        link: "#",
        description: "Download grammar exercises to practice.",
      },
    ],
  },
  {
    subject: "Art",
    materials: [
      {
        title: "Art Techniques Guide",
        type: "PDF",
        link: "#",
        description: "Download the guide on basic art techniques.",
      },
      {
        title: "Portrait Drawing Presentation",
        type: "PPT",
        link: "#",
        description: "Download the presentation on portrait drawing.",
      },
    ],
  },
  {
    subject: "Music",
    materials: [
      {
        title: "Music Theory PDF",
        type: "PDF",
        link: "#",
        description: "Download the music theory notes.",
      },
      {
        title: "Instrumental Practice Video",
        type: "Video",
        link: "#",
        description: "Watch the instrumental practice video.",
      },
      {
        title: "Music Composition Assignment",
        type: "PDF",
        link: "#",
        description: "Download the assignment on music composition.",
      },
    ],
  },
];

const Materials = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const handleDownloadClick = (material) => {
    setSelectedMaterial(material);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMaterial(null);
  };

  return (
    <div className="container mx-auto p-4">
      <TitleComponent title="Materials" />
      <div className="mt-8">
        {materialsData.map((classData, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {classData.subject}
            </h2>

            <div className="space-y-4">
              {classData.materials.map((material, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-md font-semibold text-gray-900">
                        {material.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {material.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        Type: {material.type}
                      </p>
                    </div>
                    <ButtonFilled
                      text="Download"
                      onClick={() => handleDownloadClick(material)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedMaterial && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Download: {selectedMaterial.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              You are about to download the material for{" "}
              {selectedMaterial.subject}.
            </p>

            <div className="flex justify-between space-x-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Cancel
              </button>
              <a
                href={selectedMaterial.link}
                download
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Materials;
