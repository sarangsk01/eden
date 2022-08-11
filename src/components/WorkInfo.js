import React from 'react';

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="work-info-container">
      <h1>Workspace Name</h1>
      <input
        className="name"
        type="text"
        placeholder="Eden"
        value={formData.workspaceName}
        onChange={(e) => {
          setFormData({ ...formData, workspaceName: e.target.value });
        }}
      />
      <h1>Workspace URL(optional)</h1>
      <div className="url-main">
        <input
          className="random"
          type="text"
          placeholder="www.eden.com/"
          value={formData.workspaceUrl}
          onChange={(e) => {
            setFormData({ ...formData, workspaceUrl: e.target.value });
          }}
          disabled
        />
        <input
          className="url"
          type="text"
          placeholder="Example"
          value={formData.example}
          onChange={(e) => {
            setFormData({ ...formData, example: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
