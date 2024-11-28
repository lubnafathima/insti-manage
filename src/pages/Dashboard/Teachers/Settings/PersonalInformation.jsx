import InputComponent from "../../../../styledComponents/InputComponent";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const PersonalInformation = () => {
  return (
    <>
      <div className="w-full min-h-60 bg-blue-200 rounded-xl shadow-sm flex justify-between items-end py-4 px-12 mb-4">
        <div className="flex flex-col justify-end items-start">
          <div className="min-w-20 min-h-20 text-2xl font-bold bg-green-600 text-white p-2 rounded-full flex items-center justify-center shadow-md">
            E
          </div>
          <TitleComponent title="Emma Johnson" />
          <p className="mt-[-1rem] text-sm text-gray-600">
            emma.johnson@school.edu
          </p>
        </div>
        <div>
          <ButtonFilled text="Save" />
        </div>
      </div>
      <div>
        <InputComponent placeholder="" />
      </div>
    </>
  );
};

export default PersonalInformation;
