import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const Attachments = () => {
  const [attachments, setAttachments] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).map((file) => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    }));
    setAttachments((prev) => [...prev, ...fileArray]);
  };

  const removeFile = (fileName) => {
    setAttachments(attachments.filter((file) => file.name !== fileName));
  };

  return (
    <div className="container mx-auto p-6">
      <TitleComponent title="Attachments" />

      <div className="mb-6">
        <label className="bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700">
          Attach a File
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {attachments.length > 0 ? (
          attachments.map((file, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <div className="mb-2">
                {file.type.startsWith("image") ? (
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ) : file.type === "application/pdf" ? (
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-300 rounded-lg">
                    <span className="text-gray-600">PDF</span>
                  </div>
                ) : file.type.includes("word") ||
                  file.type.includes("excel") ? (
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-300 rounded-lg">
                    <span className="text-gray-600">Doc</span>
                  </div>
                ) : (
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-300 rounded-lg">
                    <span className="text-gray-600">File</span>
                  </div>
                )}
              </div>
              <div className="text-center text-sm text-gray-800">
                {file.name}
              </div>
              <button
                onClick={() => removeFile(file.name)}
                className="mt-2 text-red-600 hover:text-red-800 text-xs"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="w-full text-center text-gray-500">
            No files attached yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Attachments;
