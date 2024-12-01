import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import CheckboxComponent from "../../../../styledComponents/CheckboxComponent";

const profileViewList = ["Students", "Parents", "Teachers"];

const communicationList = ["Only via School Email", "Via School Portal Only"];

const PrivacySettings = () => {
  const [isVisibility, setIsVisibility] = useState([]);
  const [isProfilePublicityEnabled, setIsProfilePublicityEnabled] =
    useState(false);
  const [isCommunication, setIsCommunication] = useState([]);
  const [isDataShared, setIsDataShared] = useState(false);

  const handleToggle = (state, setter) => {
    setter((prevState) => !prevState);
  };

  const handleCheckboxChange = (option, selectedItems, setter) => {
    setter((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div>
      <TitleComponent title="Privacy Settings" />

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Profile Visibility</h2>
        <p className="text-sm text-gray-500 mb-2">
          Customize your profile&#39;s visibility and privacy within the
          institution. Manage who can view your profile and control the level of
          accessibility.
        </p>
        <CheckboxComponent
          list={profileViewList}
          selectedItems={isVisibility}
          onChange={(option) =>
            handleCheckboxChange(option, isVisibility, setIsVisibility)
          }
        />
      </div>

      <div className="flex flex-col gap-2 border-b py-6">
        <h2 className="font-semibold text-md">Profile Publicity</h2>
        <p className="text-sm text-gray-500 mb-2">
          Decide whether your profile is publicly accessible within the
          institution.
        </p>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              id="profile-publicity-toggle"
              type="checkbox"
              checked={isProfilePublicityEnabled}
              onChange={() =>
                handleToggle(
                  isProfilePublicityEnabled,
                  setIsProfilePublicityEnabled
                )
              }
              className="sr-only"
            />
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 cursor-pointer 
            ${isProfilePublicityEnabled ? "bg-green-500" : "bg-gray-300"}`}
              onClick={() =>
                handleToggle(
                  isProfilePublicityEnabled,
                  setIsProfilePublicityEnabled
                )
              }
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
              ${isProfilePublicityEnabled ? "translate-x-6" : "translate-x-1"}`}
              ></div>
            </div>
            <p className="text-xs italic text-gray-400 mt-2">
              {isProfilePublicityEnabled
                ? "Your profile is visible to everyone within the institution."
                : "Your profile is hidden from public view."}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Communication Channels</h2>
        <p className="text-sm text-gray-500 mb-2">
          Customize your communication preferences within the institution.
          Choose which channels you prefer to be contacted through.
        </p>
        <CheckboxComponent
          list={communicationList}
          selectedItems={isCommunication}
          onChange={(option) =>
            handleCheckboxChange(option, isCommunication, setIsCommunication)
          }
        />
      </div>

      <div className="flex flex-col gap-2 border-b py-6">
        <h2 className="font-semibold text-md">Data Sharing Settings</h2>
        <p className="text-sm text-gray-500 mb-2">
          Control what academic or personal information is shared with others in
          the institution.
        </p>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              id="data-sharing-toggle"
              type="checkbox"
              checked={isDataShared}
              onChange={() => handleToggle(isDataShared, setIsDataShared)}
              className="sr-only"
            />
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 cursor-pointer 
            ${isDataShared ? "bg-green-500" : "bg-gray-300"}`}
              onClick={() => handleToggle(isDataShared, setIsDataShared)}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
              ${isDataShared ? "translate-x-6" : "translate-x-1"}`}
              ></div>
            </div>
            <p className="text-xs italic text-gray-400 mt-2">
              {isDataShared
                ? "Your data is shared within the institution."
                : "Your data is not shared."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
