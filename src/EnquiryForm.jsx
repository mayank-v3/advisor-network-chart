import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    description: "",
    eventType: "Wedding",
    customEventType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzxVnUtCVof46SiyKaDQxQi_LUk9DHGK03MY2ps0IBxCn3wvVNVdZoFYXqXJLWkmNci1A/exec';
    const payload = new FormData();
    
    // Add form data to payload
    payload.append("Name", formData.name);
    payload.append("Number", formData.number);
    payload.append("Description", formData.description);
    payload.append("Type of Event", formData.eventType === "Other" ? formData.customEventType : formData.eventType);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: payload,
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: "",
        number: "",
        description: "",
        eventType: "Wedding",
        customEventType: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Type of Event</label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
        >
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {formData.eventType === "Other" && (
        <div className="mb-4">
          <label htmlFor="customEventType" className="block text-sm font-medium text-gray-700">Custom Event Type</label>
          <input
            type="text"
            id="customEventType"
            name="customEventType"
            value={formData.customEventType}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-4 w-full py-2 px-4 bg-indigo-500 text-white rounded-md ${isSubmitting ? "opacity-50" : "hover:bg-indigo-600"}`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default EnquiryForm;
