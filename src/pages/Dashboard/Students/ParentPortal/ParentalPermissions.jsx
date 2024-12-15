import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const permissionData = [
  {
    title: "Field Trip to Science Museum",
    status: "Approved",
    requestDate: "October 1, 2024",
    approvalDate: "October 2, 2024",
  },
  {
    title: "Participation in School Band",
    status: "Pending",
    requestDate: "September 29, 2024",
    approvalDate: null,
  },
];

const ParentalPermissions = () => {
  const [permissions, setPermissions] = useState(permissionData);

  const handleApproval = (index) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[index].status = "Approved";
    updatedPermissions[index].approvalDate = new Date().toLocaleDateString();
    setPermissions(updatedPermissions);
  };

  const handleRejection = (index) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[index].status = "Rejected";
    updatedPermissions[index].approvalDate = new Date().toLocaleDateString();
    setPermissions(updatedPermissions);
  };

  return (
    <div className="p-6">
      <TitleComponent title="Parental Permissions" />

      <div className="flex flex-col gap-4">
        {permissions.map((request, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-md font-semibold mb-2">{request.title}</h3>
            <p>
              <strong>Status:</strong>
              <span
                className={`ml-2 ${
                  request.status === "Approved"
                    ? "text-green-500"
                    : request.status === "Rejected"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {request.status}
              </span>
            </p>
            <p>
              <strong>Request Date:</strong> {request.requestDate}
            </p>
            {request.status !== "Pending" && (
              <p>
                <strong>Parent&#39;s Approval Date:</strong>{" "}
                {request.approvalDate}
              </p>
            )}

            {request.status === "Pending" && (
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => handleApproval(index)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleRejection(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentalPermissions;
