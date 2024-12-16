import { useState } from "react";
import { FaCamera } from "react-icons/fa";  // Icon for profile picture upload
import TitleComponent from "../../../../styledComponents/TitleComponent";

const ProfileSettings = () => {
  // State for managing profile fields
  const [profileData, setProfileData] = useState({
    fullName: "John Smith",
    dateOfBirth: "2005-08-05",
    gender: "Male",
    email: "john.smith@studentportal.com",
    phoneNumber: "+1 555-555-1234",
    address: "123 Main St, Cityville, NY 10001",
    emergencyContact: "Jane Smith | +1 555-555-5678",
    profilePicture: "",  // To handle profile picture
  });

  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file upload for profile picture
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevState) => ({
          ...prevState,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Save changes and toggle edit mode
  const handleSaveChanges = () => {
    setIsEditing(false);
    // Save data logic (e.g., make an API call)
    console.log("Profile updated:", profileData);
  };

  return (
    <div className="p-6">
      <TitleComponent title="Profile Settings" />

      {/* Profile Form */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          {/* Profile Picture Section */}
          <div className="relative mb-6">
            <img
              src={profileData.profilePicture || "/default-avatar.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <label
              htmlFor="profilePicture"
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full cursor-pointer"
            >
              <FaCamera className="text-gray-500 text-xl" />
            </label>
            <input
              type="file"
              id="profilePicture"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Profile Fields */}
          <div className="w-full space-y-4">
            {/* Full Name */}
            <div className="flex items-center justify-between">
              <label htmlFor="fullName" className="text-lg font-medium">Full Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span className="text-lg">{profileData.fullName}</span>
              )}
            </div>

            {/* Date of Birth */}
            <div className="flex items-center justify-between">
              <label htmlFor="dateOfBirth" className="text-lg font-medium">Date of Birth:</label>
              {isEditing ? (
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={profileData.dateOfBirth}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span className="text-lg">{profileData.dateOfBirth}</span>
              )}
            </div>

            {/* Gender */}
            <div className="flex items-center justify-between">
              <label htmlFor="gender" className="text-lg font-medium">Gender:</label>
              {isEditing ? (
                <select
                  id="gender"
                  name="gender"
                  value={profileData.gender}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <span className="text-lg">{profileData.gender}</span>
              )}
            </div>

            {/* Contact Email */}
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="text-lg font-medium">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span className="text-lg">{profileData.email}</span>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-between">
              <label htmlFor="phoneNumber" className="text-lg font-medium">Phone Number:</label>
              {isEditing ? (
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span className="text-lg">{profileData.phoneNumber}</span>
              )}
            </div>

            {/* Address */}
            <div className="flex items-center justify-between">
              <label htmlFor="address" className="text-lg font-medium">Address:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span className="text-lg">{profileData.address}</span>
              )}
            </div>

            {/* Emergency Contact */}
            <div className="flex items-center justify-between">
              <label htmlFor="emergencyContact" className="text-lg font-medium">Emergency Contact:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={profileData.emergencyContact}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <span className="text-lg">{profileData.emergencyContact}</span>
              )}
            </div>
          </div>

          {/* Edit/Save Button */}
          <div className="mt-6 flex justify-end">
            {isEditing ? (
              <button
                onClick={handleSaveChanges}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
