import React from 'react';

function DropDown({ filters = {}, onFilterChange = () => {} }) {
  const handleChange = (e) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="border rounded-4 p-3 mt-2 mb-4 mx-3 mx-md-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center">

        {/* Filter Dropdowns */}
        <div className="d-flex flex-wrap gap-3">
          <div>
            <label className="text-muted small mb-1">Year</label>
            <select className="form-select" name="year" value={filters.year || ''} onChange={handleChange}>
              <option value="">All Years</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div>
            <label className="text-muted small mb-1">Department</label>
            <select className="form-select" name="department" value={filters.department || ''} onChange={handleChange}>
              <option value="">All Departments</option>
              <option value="Computer Science Engineering">Computer Science Engineering</option>
              <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
            </select>
          </div>

          <div>
            <label className="text-muted small mb-1">Subject</label>
            <select className="form-select" name="subject" value={filters.subject || ''} onChange={handleChange}>
              <option value="">All Subjects</option>
              <option value="Data Structures">Data Structures</option>
              <option value="DBMS">DBMS</option>
              <option value="Operating Systems">Operating Systems</option>
              <option value="Computer Networks">Computer Networks</option>
              <option value="AI">AI</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;

