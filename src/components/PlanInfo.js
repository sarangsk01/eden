import React from 'react';

function PlanInfo({ formData, setFormData }) {
  return (
    <div className="plan-info-container">
      <div className="user">
        <img className="user-img" src="./user.png" alt="user" />
        <h1>For myself</h1>
        <p>
          Write better.Think
          <br /> more clearly.Stay <br />
          organized.
        </p>
      </div>
      <div className="team">
        <img className="team-img" src="./team.png" alt="user" />
        <h1>With my team</h1>
        <p>
          Wikis, docs, tasks & <br />
          projects, all in one <br />
          place.
        </p>
      </div>
    </div>
  );
}

export default PlanInfo;
