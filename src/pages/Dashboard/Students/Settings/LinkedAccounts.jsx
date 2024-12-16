import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const LinkedAccounts = () => {
  // State for managing account link status
  const [accounts, setAccounts] = useState({
    google: { linked: true, email: "john.smith@gmail.com" },
    microsoft: { linked: false, email: "john.smith@microsoft.com" },
    facebook: { linked: false },
    twitter: { linked: false },
  });

  // Handle link/unlink actions
  const toggleLink = (platform) => {
    setAccounts((prevAccounts) => ({
      ...prevAccounts,
      [platform]: {
        ...prevAccounts[platform],
        linked: !prevAccounts[platform].linked,
      },
    }));
  };

  return (
    <div className="p-6">
      <TitleComponent title="Linked Accounts" />

      {/* Linked Accounts Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Google Account Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Google Account:</h3>
            <p>{accounts.google.linked ? accounts.google.email : "Not Linked"}</p>
          </div>
          <button
            onClick={() => toggleLink("google")}
            className={`${
              accounts.google.linked ? "bg-red-500" : "bg-green-500"
            } text-white p-2 rounded-md hover:bg-opacity-80`}
          >
            {accounts.google.linked ? "Unlink" : "Link"}
          </button>
        </div>

        {/* Microsoft Account Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Microsoft Account:</h3>
            <p>{accounts.microsoft.linked ? accounts.microsoft.email : "Not Linked"}</p>
          </div>
          <button
            onClick={() => toggleLink("microsoft")}
            className={`${
              accounts.microsoft.linked ? "bg-red-500" : "bg-green-500"
            } text-white p-2 rounded-md hover:bg-opacity-80`}
          >
            {accounts.microsoft.linked ? "Unlink" : "Link"}
          </button>
        </div>

        {/* Facebook Account Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Facebook Account:</h3>
            <p>{accounts.facebook.linked ? "Linked" : "Not Linked"}</p>
          </div>
          <button
            onClick={() => toggleLink("facebook")}
            className={`${
              accounts.facebook.linked ? "bg-red-500" : "bg-green-500"
            } text-white p-2 rounded-md hover:bg-opacity-80`}
          >
            {accounts.facebook.linked ? "Unlink" : "Link"}
          </button>
        </div>

        {/* Twitter Account Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Twitter Account:</h3>
            <p>{accounts.twitter.linked ? "Linked" : "Not Linked"}</p>
          </div>
          <button
            onClick={() => toggleLink("twitter")}
            className={`${
              accounts.twitter.linked ? "bg-red-500" : "bg-green-500"
            } text-white p-2 rounded-md hover:bg-opacity-80`}
          >
            {accounts.twitter.linked ? "Unlink" : "Link"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedAccounts;
