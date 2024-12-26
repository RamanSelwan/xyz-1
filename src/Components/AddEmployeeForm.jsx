import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import apiConnecter from '../api/apiConnecter'; 

const AddEmployeeForm = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',
    email: '',
    phone: '',
    address: '',
    dateOfJoining: '',
    dateOfBirth: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const { name, position, department, salary, email, phone, address, dateOfJoining, dateOfBirth } = formData;
    if (!name || !position || !department || !salary || !email || !phone || !address || !dateOfJoining || !dateOfBirth) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await apiConnecter.createEmployee(formData);
      if (response.success) {
        toast.success("Employee created successfully!");
        onAdd(response.employee);
        onClose();
      } else {
        toast.error("Failed to create employee");
      }
    } catch (error) {
      toast.error("Error creating employee");
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="date"
            name="dateOfJoining"
            placeholder="Date of Joining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default AddEmployeeForm;