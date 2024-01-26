import React, { useState } from "react";

export default function (props) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [text, setText] = useState("Select Field Type");
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const handleStudent = () => {
        props.setFieldType("Text Box");
        setText("Text Box");
        setDropdownOpen(false);
    };

    const handleEmployee = () => {
        props.setFieldType("Dropdown");
        setText("Dropdown");
        setDropdownOpen(false);
    };

    const handleBusiness = () => {
        props.setFieldType("Date Picker");
        setText("Date Picker");
        setDropdownOpen(false);
    };
    return (
        <div className=" w-1/6 flex pl-2 pr-2 pb-2 flex-col-reverse">
            <div className="flex place-content-center h-12 bg-black items-center p-1">
                <div className="relative group ">
                    <button
                        id="dropdown-button"
                        className="z-1 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-grey-500"
                        onClick={toggleDropdown}
                    >
                        <span className="mr-2">{text}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-2 -mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        id="dropdown-menu"
                        className={`${isDropdownOpen ? 'absolute' : 'hidden'
                            } right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
                    >
                        <button
                            onClick={handleStudent}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                        >
                            Text Box
                        </button>
                        <button
                            onClick={handleEmployee}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                        >
                            Dropdown
                        </button>
                        <button
                            onClick={handleBusiness}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                        >
                            Date Picker
                        </button>
                    </div>
                </div>
            </div>
          
        </div>

    )
}