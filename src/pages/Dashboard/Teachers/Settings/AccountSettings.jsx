import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import InputComponent from "../../../../styledComponents/InputComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const AccountSettings = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <div>
      <TitleComponent title="Account Settings" />
      <p>
        Welcome to your account settings page. Here, you can update your login
        credentials and adjust institution-specific settings to personalize your
        experience.
      </p>
      <h2 className="mt-10 mb-2 text-md font-bold">Change Password</h2>
      <p>
        To ensure the security of your account, you can change your password by
        entering your old password and then setting a new one.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="old-password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Old Password
          </label>
          <div className="mt-2">
            <InputComponent placeholder="********" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="new-password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            New password
          </label>
          <div className="mt-2">
            <InputComponent placeholder="********" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="confirm-password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Confirm password
          </label>
          <div className="mt-2">
            <InputComponent placeholder="********" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 border-b border-gray-900/10 pb-10">
        <ButtonFilled text="Save Changes" />
      </div>

      <div className="border-b border-gray-900/10 pb-10">
        <h2 className="mt-10 mb-2 text-md font-bold">
          Set Two-Factor Authentication
        </h2>
        <p>
          Enhance the security of your account by enabling Two-Factor
          Authentication (2FA). This will require an additional verification
          step whenever you log in.
        </p>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="2fa-toggle"
            className="text-sm font-medium text-gray-700 my-6"
          >
            Enable Two-Factor Authentication:
          </label>

          <div className="relative">
            <input
              id="2fa-toggle"
              type="checkbox"
              checked={isEnabled}
              onChange={handleToggle}
              className="sr-only"
            />
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 cursor-pointer 
            ${isEnabled ? "bg-green-500" : "bg-gray-300"}`}
              onClick={handleToggle}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
              ${isEnabled ? "translate-x-6" : "translate-x-1"}`}
              ></div>
            </div>
          </div>

          <span
            className={`text-sm font-medium ${
              isEnabled ? "text-green-500" : "text-gray-500"
            }`}
          >
            {isEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>
      <div>
        <h2 className="mt-10 mb-2 text-md font-bold"></h2>
      </div>
      <h2 className="mt-10 mb-2 text-md font-bold"></h2>
      <h2 className="mt-10 mb-2 text-md font-bold"></h2>
      <h2 className="mt-10 mb-2 text-md font-bold"></h2>
    </div>
  );
};

export default AccountSettings;
