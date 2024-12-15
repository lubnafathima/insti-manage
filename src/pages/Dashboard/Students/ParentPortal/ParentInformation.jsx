import { RxAvatar } from "react-icons/rx";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

// Sample data for parent information
const parentData = [
  {
    name: "John Doe (Father)",
    email: "john.doe@example.com",
    phone: "+1 123-456-7890",
    occupation: "Software Engineer",
  },
  {
    name: "Jane Doe (Mother)",
    email: "jane.doe@example.com",
    phone: "+1 987-654-3210",
    occupation: "Teacher",
  },
];

const ParentInformation = () => {
  return (
    <div className="p-6">
      <TitleComponent title="Parent Information" />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parentData.map((parent, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="relative bg-gray-200 h-48 flex justify-center items-center">
              <RxAvatar className="text-gray-600 text-6xl" />
            </div>

            <div className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Name:</span>
                  <span>{parent.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Occupation:</span>
                  <span>{parent.occupation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span>{parent.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Phone:</span>
                  <span>{parent.phone}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <ButtonFilled text="Edit Info" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentInformation;
