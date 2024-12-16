import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const Appearance = () => {
  // State for managing appearance preferences
  const [appearance, setAppearance] = useState({
    theme: "Dark",
    primaryColor: "#1E40AF", // Blue
    fontSize: "Medium",
    layout: "Grid",
  });

  // Handle changes to preferences
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppearance((prevAppearance) => ({
      ...prevAppearance,
      [name]: value,
    }));
  };

  const handleColorChange = (e) => {
    setAppearance((prevAppearance) => ({
      ...prevAppearance,
      primaryColor: e.target.value,
    }));
  };

  return (
    <div className="p-6">
      <TitleComponent title="Appearance Settings" />

      {/* Appearance Preferences Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Theme Selection */}
        <div className="flex justify-between items-center">
          <label htmlFor="theme" className="text-lg font-medium">
            Theme:
          </label>
          <select
            id="theme"
            name="theme"
            value={appearance.theme}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="System Default">System Default</option>
          </select>
        </div>

        {/* Primary Color Selection */}
        <div className="flex justify-between items-center">
          <label htmlFor="primaryColor" className="text-lg font-medium">
            Primary Color:
          </label>
          <input
            type="color"
            id="primaryColor"
            name="primaryColor"
            value={appearance.primaryColor}
            onChange={handleColorChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Font Size Selection */}
        <div className="flex justify-between items-center">
          <label htmlFor="fontSize" className="text-lg font-medium">
            Font Size:
          </label>
          <select
            id="fontSize"
            name="fontSize"
            value={appearance.fontSize}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        {/* Layout View Selection */}
        <div className="flex justify-between items-center">
          <label htmlFor="layout" className="text-lg font-medium">
            Layout:
          </label>
          <select
            id="layout"
            name="layout"
            value={appearance.layout}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Grid">Grid</option>
            <option value="List">List</option>
          </select>
        </div>

        {/* Save Preferences Button */}
        <button
          onClick={() => alert("Preferences saved successfully!")}
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 w-full"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Appearance;
