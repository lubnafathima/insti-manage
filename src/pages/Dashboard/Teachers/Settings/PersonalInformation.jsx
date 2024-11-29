import InputComponent from "../../../../styledComponents/InputComponent";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const PersonalInformation = () => {
  return (
    <>
      <div className="w-full min-h-60 bg-slate-300 rounded-xl shadow-sm flex justify-between items-end py-4 px-12 mb-4">
        <div className="flex flex-col justify-end items-start">
          <div className="min-w-20 min-h-20 text-2xl font-bold bg-blue-600 text-white p-2 rounded-full flex items-center justify-center shadow-md">
            E
          </div>
          <TitleComponent title="Emma Johnson" />
          <p className="mt-[-1rem] text-sm text-gray-600">
            emma.johnson@school.edu
          </p>
        </div>
        <div></div>
      </div>
      <div className="border-b border-gray-900/10 py-12">
        <TitleComponent title="Personal Information" />
        <p className="mt-[-.5rem] text-sm/6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <div className="flex justify-center items-end">
              <UserCircleIcon
                aria-hidden="true"
                className="h-40 w-40 text-gray-300"
              />
              <button
                type="button"
                className="rounded-full bg-blue-500 text-white p-1 ml-[-3rem] mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <InputComponent />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <InputComponent />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <InputComponent />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="text"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <InputComponent />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Street address
            </label>
            <div className="mt-2">
              <InputComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <ButtonFilled text="Save" />
      </div>
    </>
  );
};

export default PersonalInformation;
