import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

function AuditForm() {
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [dateAudit, setDateAudit] = useState(null);
  const [dateClose, setDateClose] = useState(null);
  const [user, setUser] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const userToken = localStorage.getItem('userToken');
      await axios.post('http://your-api-url/audit', {
        title,
        area,
        dateAudit,
        dateClose,
        user,
        day,
        year,
      }, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      alert('Audit submitted successfully');
      navigate('/audit-results');
    } catch (error) {
      alert('Submission Failed: Error submitting audit');
    }
  };

  return (
    <div>
      <h1>Audit Form</h1>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Select 
        options={[{label: 'Area 1', value: 'area1'}, {label: 'Area 2', value: 'area2'}]} 
        onChange={(option) => setArea(option.value)} 
        placeholder="Select Area" 
      />
      <DatePicker selected={dateAudit} onChange={(date) => setDateAudit(date)} placeholderText="Select Audit Date" />
      <DatePicker selected={dateClose} onChange={(date) => setDateClose(date)} placeholderText="Select Close Date" />
      <input placeholder="User Auditor" value={user} onChange={(e) => setUser(e.target.value)} />
      <input placeholder="Day" value={day} onChange={(e) => setDay(e.target.value)} />
      <input placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AuditForm;