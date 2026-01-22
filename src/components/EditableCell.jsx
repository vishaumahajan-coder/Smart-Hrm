import React from 'react';

const EditableCell = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-yellow-50 px-1 border border-gray-300 focus:outline-none focus:border-blue-500"
        />
    );
};

export default EditableCell;
