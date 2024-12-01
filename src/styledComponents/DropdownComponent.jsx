import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropdownComponent = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left min-w-56">
        <div>
          <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {selectedOption || title}
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 min-w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none"
        >
          <div className="py-1">
            {options.map((option, index) => (
              <MenuItem key={index}>
                <a
                  href="#"
                  onClick={() => handleMenuItemClick(option)}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  {option}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </>
  );
};

export default DropdownComponent;
