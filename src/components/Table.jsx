import React from 'react';

const Table = ({ columns, data, onAction }) => {
    return (
        <div className="overflow-x-auto border border-gray-400">
            <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-gray-200 sticky top-0">
                    <tr>
                        {columns.map((col, idx) => (
                            <th
                                key={idx}
                                className="px-4 py-2 border border-gray-400 font-bold text-gray-700"
                            >
                                {col.header}
                            </th>
                        ))}
                        <th className="px-4 py-2 border border-gray-400 font-bold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-blue-50 transition-colors">
                                {columns.map((col, cIdx) => (
                                    <td key={cIdx} className="px-4 py-1.5 border border-gray-300">
                                        {row[col.accessor]}
                                    </td>
                                ))}
                                <td className="px-4 py-1.5 border border-gray-300">
                                    <button
                                        onClick={() => onAction(row)}
                                        className="text-blue-600 hover:underline font-bold"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length + 1}
                                className="px-4 py-10 text-center text-gray-500 italic"
                            >
                                No records found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
