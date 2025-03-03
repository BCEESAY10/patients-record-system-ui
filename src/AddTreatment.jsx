import React, { useState } from "react";

function AddTreatment({ patient, onClose, onUpdatePatient }) {
  const [formData, setFormData] = useState({
    diagnosis: "",
    treatment: "",
    payment: "",
    attendedBy: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get current date & time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Create new visit object
    const newVisit = {
      date: formattedDate,
      time: formattedTime,
      ...formData,
    };

    // Update patient record
    const updatedPatient = {
      ...patient,
      lastVisited: formattedDate,
      date: formattedDate,
      time: formattedTime,
      diagnosis: formData.diagnosis,
      treatment: formData.treatment,
      attendedBy: formData.attendedBy,
      payment: formData.payment,
      visits: Array.isArray(patient.visits) ? [...patient.visits, newVisit] : [newVisit], // Store visit history
    };

    onUpdatePatient(updatedPatient);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 text-blue-700">Add Treatment</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Diagnosis</label>
          <input 
            type="text" 
            name="diagnosis"
            value={formData.diagnosis || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
          />

          <label className="block mb-2">Treatment</label>
          <input 
            type="text" 
            name="treatment"
            value={formData.treatment || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
          />

          <label className="block mb-2">Payment (GMD)</label>
          <input 
            type="text" 
            name="payment"
            value={formData.payment || 0}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
          />

          <label className="block mb-2">Attended By</label>
          <select
              name="attendedBy"
              value={formData.attendedBy}
              onChange={handleChange}
              className="border p-2 rounded cursor-pointer mb-4"
            >
              <option value="">Select Dentist</option>
              <option value="Ahmad">Ahmad</option>
              <option value="Musa">Musa</option>
            </select>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition cursor-pointer"
          >
            Save Treatment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTreatment;
