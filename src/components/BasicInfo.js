import React from 'react';

function BasicInfo({ formData, setFormData }) {
  return (
    <div className="basic-info-container">
      <h1>Full Name</h1>
      <input
        type="text"
        placeholder="Steve Jobs"
        value={formData.fullName}
        onChange={(event) =>
          setFormData({ ...formData, fullName: event.target.value })
        }
      />
      <h1>Display Name</h1>
      <input
        type="text"
        placeholder="Steve"
        value={formData.displayName}
        onChange={(event) =>
          setFormData({ ...formData, displayName: event.target.value })
        }
      />
    </div>
  );
}

export default BasicInfo;
