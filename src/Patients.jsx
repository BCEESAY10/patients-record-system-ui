import React, { useState } from "react";
import { Search, Eye, Edit, Trash2 } from "lucide-react"; // Importing icons

function Patients() {
  // Sample patient data (Replace with API data later)
  const [patients, setPatients] = useState([
    { id: 1, firstName: "John", lastName: "Doe", address: "123 Street", phone: "9876543210", lastVisited: "2024-02-28" },
    { id: 2, firstName: "Jane", lastName: "Smith", address: "456 Avenue", phone: "9123456780", lastVisited: "2024-02-20" },
    { id: 3, firstName: "Alice", lastName: "Johnson", address: "789 Road", phone: "9234567891", lastVisited: "2024-01-15" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filtered patient list based on search input
  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 mt-16">
      {/* Search and Add Button Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar with Icon */}
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search patient..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Add Patient Button */}
        <button className="ml-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
          + Add Patient
        </button>
      </div>

      {/* Patients Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="p-3">Patient No.</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Address</th>
              <th className="p-3">Telephone</th>
              <th className="p-3">Last Visited</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr key={patient.id} className="border-b hover:bg-gray-100 cursor-pointer">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{patient.firstName}</td>
                  <td className="p-3">{patient.lastName}</td>
                  <td className="p-3">{patient.address}</td>
                  <td className="p-3">{patient.phone}</td>
                  <td className="p-3">{patient.lastVisited}</td>
                  <td className="p-3 flex justify-center space-x-3">
                    <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                      <Eye size={20} />
                    </button>
                    <button className="text-green-500 hover:text-green-700 cursor-pointer">
                      <Edit size={20} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 p-4">
                  No patients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Patients;
