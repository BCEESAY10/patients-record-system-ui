import React, { useState } from "react";
import { Search, Eye, Edit, Trash2 } from "lucide-react";
import AddPatient from "./AddPatient";
import PatientInfo from "./PatientInfo";

function Patients() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [patients, setPatients] = useState([
    {
      id: 1,
      firstName: "Lamin",
      lastName: "Tamba",
      age: 23,
      gender: "Male",
      address: "Batokunku",
      phone: "9898982",
      lastVisited: "2024-02-28",
      time: "20:34",
      diagnosis: "Tooth decay",
      treatment: "Penicillin 500",
      attendedBy: "Ahmad",
      payment: 12000
    },
    {
      id: 2,
      firstName: "Jainaba",
      lastName: "Sonko",
      age: 29,
      gender: "Female",
      address: "Kunkujang",
      phone: "3456780",
      lastVisited: "2024-02-20",
      time: "20:34",
      diagnosis: "Tooth decay",
      treatment: "Penicillin 500",
      attendedBy: "Ahmad",
      payment: 4000
    },
    {
      id: 3,
      firstName: "Alieu",
      lastName: "Jammeh",
      age: 66,
      gender: "Male",
      address: "Abuko",
      phone: "4567891",
      lastVisited: "2025-01-15",
      time: "20:34",
      diagnosis: "Tooth decay",
      treatment: "Penicillin 500",
      attendedBy: "Ahmad",
      payment: 3500
    },
  ]);

  // Add new patient to the list dynamically
  const addNewPatient = (newPatient) => {
    setPatients((prevPatients) => [
      ...prevPatients,
      { ...newPatient, patientNo: (prevPatients.length + 1).toString() },
    ]);
    setMessage({ type: "success", text: "Patient successfully added!" });
    setIsModalOpen(false);
    setTimeout(() => {
      setMessage({ type: "", text: "" });
    }, 3000);
  };

  // Filtered patient list based on search input
  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 mt-16">
      {/* Success/Error Message */}
      {message.text && (
        <div
          className={`mb-4 p-3 text-white text-center rounded-md ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Search and Add Button Section */}
      <div className="flex justify-between items-center mb-6">
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

        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
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
              <th className="p-3">Age</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Address</th>
              <th className="p-3">Telephone</th>
              <th className="p-3">Last Visited</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className="border-b hover:bg-gray-100 cursor-pointer"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{patient.firstName}</td>
                  <td className="p-3">{patient.lastName}</td>
                  <td className="p-3">{patient.age}</td>
                  <td className="p-3">{patient.gender}</td>
                  <td className="p-3">{patient.address}</td>
                  <td className="p-3">{patient.phone}</td>
                  <td className="p-3">{patient.date || patient.lastVisited}</td>
                  <td className="p-3 flex justify-center space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click from triggering
                        setSelectedPatient(patient);
                      }}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    >
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

      {/* Add Patient Modal (Opens when Add Patient button is clicked) */}
      <AddPatient
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPatient={addNewPatient}
      />

      {selectedPatient && (
        <PatientInfo
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}

export default Patients;
