'use client'; // This tells Next.js that this is a client-side component

import { useState } from "react";

export default function ChooseCountry() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'Choose Country',
        flag: '' // No flag initially
    });

    // Toggle dropdown visibility on button click
    const handleToggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    // Close the dropdown menu when an option is clicked and set the selected country and flag
    const handleSelectOption = (countryName, flagUrl) => {
        setSelectedCountry({ name: countryName, flag: flagUrl });  // Set selected country and flag
        setIsDropdownVisible(false);  // Close dropdown
    };

    return (
        <div className="relative group">
            <span style={{ marginRight: '2px' }}>I'm located in </span>
            <button
                className="flex items-center bg-primary px-6 py-2 text-white rounded hover:bg-primary-accent focus:outline-none"
                style={{ background: 'rgba(4, 4, 4, 0.132)', color: 'black', display: 'inline-flex', alignItems: 'center' }}
                onClick={handleToggleDropdown}
            >
                {selectedCountry.flag && (
                    <img
                        src={selectedCountry.flag} // Display flag image
                        alt={`${selectedCountry.name} flag`}
                        className="mr-2 w-5 h-5"
                    />
                )}
                {selectedCountry.name}  {/* Display selected country */}
            </button>

            {/* Dropdown Menu */}
            {isDropdownVisible && (
                <ul
                    style={{
                        background: '',  // Dark gray background
                        width: '100%',
                    }}
                    className="absolute right-0 z-10 mt-2 bg-white border rounded-lg shadow-lg dark:bg-surface-dark"
                >
                    <li
                        style={{ cursor: 'pointer' }}
                        className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-300"
                        onClick={() => handleSelectOption('Egypt', '/egyptflag.png')}  // Set country to Egypt with flag
                    >
                        <img
                            src="/egyptflag.png" // Flag image for Egypt
                            alt="Egypt flag"
                            className="mr-2 w-5 h-5"
                        />
                        Egypt
                    </li>
                    <li
                        style={{ cursor: 'pointer' }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-300"
                        onClick={() => handleSelectOption('United Arab Emirates', '/uaeflag.png')}  // Set country to UAE with flag
                    >
                        <img
                            src="/uaeflag.png" // Flag image for UAE
                            alt="UAE flag"
                            className="mr-2 w-5 h-5"
                        />
                        United Arab Emirates
                    </li>
                    <li
                        style={{ cursor: 'pointer' }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-300"
                        onClick={() => handleSelectOption('Other', '')}  // Set country to Other without a flag
                    >
                        Other
                    </li>
                </ul>
            )}
        </div>
    );
}
