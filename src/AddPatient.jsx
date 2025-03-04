import React, { useState, useEffect } from "react";

function AddPatient({ isOpen, onClose, onAddPatient }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    patientNo: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    diagnosis: "",
    treatment: "",
    attendedBy: "",
    amountPaid: "",
    date: "",
    time: "",
  });

  // Set default date and time on modal open
  useEffect(() => {
    const now = new Date();
    setFormData((prev) => ({
      ...prev,
      date: now.toISOString().split("T")[0],
      time: now.toLocaleTimeString(),
    }));
  }, [isOpen]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit function to add a patient
  const handleSubmit = () => {
    onAddPatient(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-600 bg-opacity-30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Add New Patient
        </h2>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left side inputs */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600">Patient No.</label>
            <input
              type="text"
              name="patientNo"
              value={formData.patientNo || ""}
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />

            <label className="text-gray-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <label className="text-gray-600">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <label className="text-gray-600">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age ?? ""}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <label className="text-gray-600">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>

            <label className="text-gray-600">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <label className="text-gray-600">Telephone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone ?? ""}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          {/* Right side inputs */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600">Date</label>
            <input
              type="text"
              value={formData.date || ""}
              readOnly
              className="border p-2 rounded bg-gray-100"
            />

            <label className="text-gray-600">Time</label>
            <input
              type="text"
              value={formData.time || ""}
              readOnly
              className="border p-2 rounded bg-gray-100"
            />

            <label className="text-gray-600">Diagnosis</label>
            <input
              type="text"
              name="diagnosis"
              value={formData.diagnosis || ""}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <label className="text-gray-600">Treatment</label>
            <input
              type="text"
              name="treatment"
              value={formData.treatment || ""}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <label className="text-gray-600">Attended By</label>
            <select
              name="attendedBy"
              value={formData.attendedBy}
              onChange={handleChange}
              className="border p-2 rounded cursor-pointer"
            >
              <option value="">Select Dentist</option>
              <option value="Ahmad">Ahmad</option>
              <option value="Musa">Musa</option>
            </select>

            <label className="text-gray-600">Amount Paid</label>
            <input
              type="number"
              name="amountPaid"
              value={formData.amountPaid ?? ""}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-400 px-4 py-2 text-white rounded hover:bg-gray-500 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600 cursor-pointer"
          >
            Add Patient
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
