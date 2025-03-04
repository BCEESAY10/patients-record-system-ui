import React, { useState, useEffect, useRef } from "react";
import AddTreatment from "./AddTreatment";
import { jsPDF } from "jspdf";

function PatientInfo({ patient, onClose, onUpdatePatient }) {
  const [isAddingTreatment, setIsAddingTreatment] = useState(false);
  const [visits, setVisits] = useState(patient.visits || []);
  const infoRef = useRef(null);

  // Ensure second visit only shows when there's new treatment
  useEffect(() => {
    if (patient.visits) {
      setVisits(patient.visits);
    }
  }, [patient.visits]);

  // Function to handle treatment submission
  const handleAddTreatment = (newVisit) => {
    setVisits([...visits, newVisit]);
    setIsAddingTreatment(false);
    onUpdatePatient(patient.id, newVisit); // Update parent state
  };

  // Function to download patient info as PDF
  const downloadPatientInfo = () => {
    const doc = new jsPDF();
    doc.text("Patient Information", 20, 10);
    doc.text(`Name: ${patient.firstName} ${patient.lastName}`, 20, 20);
    doc.text(`Patient No: ${patient.id}`, 20, 30);
    doc.text(`Age: ${patient.age}`, 20, 40);
    doc.text(`Gender: ${patient.gender}`, 20, 50);
    doc.text(`Address: ${patient.address}`, 20, 60);
    doc.text(`Tel No: ${patient.phone}`, 20, 70);
    doc.text(`Initial Visit Date: ${patient.date || patient.lastVisited}`, 20, 80);

    let y = 100;
    visits.forEach((visit, index) => {
      doc.text(`${index + 2}nd Visit`, 20, y);
      doc.text(`Date: ${visit.date} ${visit.time}`, 20, y + 10);
      doc.text(`Diagnosis: ${visit.diagnosis}`, 20, y + 20);
      doc.text(`Treatment: ${visit.treatment}`, 20, y + 30);
      doc.text(`Attended By: ${visit.attendedBy}`, 20, y + 40);
      doc.text(`Payment Made: ${visit.amountPaid}`, 20, y + 50);
      y += 60;
    });

    doc.save(`Patient_${patient.id}.pdf`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-700 bg-opacity-50">
      <div
        className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        ref={infoRef}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-red-600 hover:text-red-800 cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Download Button */}
        <button
          onClick={downloadPatientInfo}
          className="absolute top-3 left-3 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition cursor-pointer"
        >
          Download PDF
        </button>

        {/* Patient Info (Static) */}
        <h2 className="text-2xl font-bold mt-6">
          <span className="text-blue-500">Patient Name:</span> {patient.firstName} {patient.lastName}
        </h2>

        <div className="flex items-start justify-between gap-6">
          <div className="w-1/2">
            <h2 className="text-green-500">Initial Visit</h2>
            <p><strong>Patient No:</strong> {patient.id}</p>
            <p><strong>Age:</strong> {patient.age || "N/A"}</p>
            <p><strong>Gender:</strong> {patient.gender || "N/A"}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Tel No:</strong> {patient.phone}</p>
          </div>

          <div className="w-1/2">
            <p><strong>Date:</strong> {patient.date || patient.lastVisited} {"at"} {patient.time}</p>
            <p><strong>Diagnosis:</strong> {patient.diagnosis || "Not Recorded"}</p>
            <p><strong>Treatment:</strong> {patient.treatment || "Not Recorded"}</p>
            <p><strong>Attended By:</strong> {patient.attendedBy || "Unknown"}</p>
            <p><strong>Payment Made:</strong> {patient.amountPaid || "N/A"}</p>
          </div>
        </div>

        {/* Display Additional Visits Only If Exists */}
        {visits?.length > 0 && (
          <div className="mt-6">
            {(visits || []).map((visit, index) => (
              <div key={visit.id} className="mt-4 p-3 border rounded bg-gray-100">
                <h2 className="text-green-500">{`${index === 0 ? `${index + 2}nd Visit` : index === 1 ? `${index + 2}rd Visit` : `${index + 2}th Visit`}`} </h2>
                <p><strong>Date:</strong> {visit.date} {"at"} {visit.time}</p>
                <p><strong>Diagnosis:</strong> {visit.diagnosis}</p>
                <p><strong>Treatment:</strong> {visit.treatment}</p>
                <p><strong>Attended By:</strong> {visit.attendedBy}</p>
                <p><strong>Payment Made:</strong> {visit.payment}</p>
              </div>
            ))}
          </div>
        )}

        {/* Add Treatment Button */}
        <button
          onClick={() => setIsAddingTreatment(true)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition cursor-pointer"
        >
          Add Treatment
        </button>

        {/* Render AddTreatment Form */}
        {isAddingTreatment && (
          <AddTreatment 
            patient={patient} 
            onClose={() => setIsAddingTreatment(false)}
            onUpdatePatient={handleAddTreatment} // Handle new visit
          />
        )}
      </div>
    </div>
  );
}

export default PatientInfo;
