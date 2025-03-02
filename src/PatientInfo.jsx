import React from "react";

function PatientInfo({ patient, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-red-600 hover:text-red-800 cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">
          <span className="text-blue-500">Patient Name:</span>{" "}
          {patient.firstName} {patient.lastName}
        </h2>
        
        <div className="flex items-center justify-between">
        <div>
        <h2 className="text-green-500">Initial Visit</h2>
          <p>
            <strong>Patient No:</strong> {patient.id}
          </p>
          <p>
            <strong>Age:</strong> {patient.age || "N/A"}
          </p>
          <p>
            <strong>Gender:</strong> {patient.gender || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {patient.address}
          </p>
          <p>
            <strong>Tel No:</strong> {patient.phone}
          </p>
        </div>

        <div>
          <p>
            <strong>Date:</strong> {patient.lastVisited} {patient.time}
          </p>
          <p>
            <strong>Diagnosis:</strong> {patient.diagnosis || "Not Recorded"}
          </p>
          <p>
            <strong>Treatment:</strong> {patient.treatment || "Not Recorded"}
          </p>
          <p>
            <strong>Attended By:</strong> {patient.attendedBy || "Unknown"}
          </p>
          <p>
            <strong>Payment Made:</strong> {patient.payment || "N/A"}
          </p>
        </div>
        </div>

        {/* Add Treatment Button (if patient already exists) */}
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition cursor-pointer">
          Add Treatment
        </button>
      </div>
    </div>
  );
}

export default PatientInfo;
