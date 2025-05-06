'use client';
import { useEffect, useState } from 'react';
import { getPendingVendors, updateVendorStatus } from '../../../actions/vendorActions';

export default function VendorRequests() {
    const [vendors, setVendors] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getPendingVendors();
      setVendors(data);
    }
    load();
  }, []);

  const handleDecision = async (id, status) => {
    await updateVendorStatus(id, status);
    setVendors(vendors.filter(v => v.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Pending Vendor Requests</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((v) => (
            <tr key={v.id}>
              <td className="border px-4 py-2">{v.name}</td>
              <td className="border px-4 py-2">{v.email}</td>
              <td className="border px-4 py-2">{v.phone}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDecision(v.id, 'accepted')}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Approved
                </button>
                <button
                  onClick={() => handleDecision(v.id, 'rejected')}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
