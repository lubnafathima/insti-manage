import { useState, useRef } from "react";

const ImageUpload = ({ onImageUpload, onCancelImageUpload }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageName(file.name);
      onImageUpload(imageUrl);
    }
  };

  const handleCancelUpload = () => {
    setImage(null);
    setImageName("");
    onCancelImageUpload();

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-4">
        {image && (
          <div className="relative my-4 py-4 border rounded-md w-full flex flex-col items-center justify-center">
            <img
              src={image}
              alt={imageName}
              className="w-24 h-24 object-cover rounded-full"
            />
            <p className="text-sm text-gray-600 mt-2">{imageName}</p>
            <button
              onClick={handleCancelUpload}
              className="absolute top-0 right-0 text-md font-semibold py-1 px-3 rounded"
            >
              x
            </button>
          </div>
        )}
        <label htmlFor="imageUpload" className="cursor-pointer">
          <div className="w-24 h-24 flex items-center justify-center text-center bg-[#0A66C2] text-white rounded-full hover:bg-[#3785d3] transition duration-200">
            Upload Photo
          </div>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </>
  );
};

export default ImageUpload;
