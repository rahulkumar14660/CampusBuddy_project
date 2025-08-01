import React from 'react';

function EventFilters({ filters, onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="row g-2">
      <div className="col-md-6">
        <select name="category" className="form-select" value={filters.category} onChange={handleChange}>
          <option value="">All Categories</option>
          <option value="Workshop">Workshop</option>
          <option value="Seminar">Seminar</option>
          <option value="Competition">Competition</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="col-md-6">
        <select name="year" className="form-select" value={filters.year} onChange={handleChange}>
          <option value="">All Years</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>
      </div>
    </div>
  );
}

export default EventFilters;
