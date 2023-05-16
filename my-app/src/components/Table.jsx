import React from 'react'

const Table = () => {
    return (
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-6 py-2">Name</th>
              <th className="border px-4 py-2">Tracking Number</th>
              <th className="border px-4 py-2">Shipment Value</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows with data here */}
          </tbody>
        </table>
    );
};

export default Table