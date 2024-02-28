import React from 'react';
import { FaDonate } from 'react-icons/fa';

const DonateButton: React.FC = () => {
    return (
        <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            <FaDonate className="mr-2" /> 
            Donate Now 
        </button>
    );
};

export default DonateButton;
