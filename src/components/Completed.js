import React from 'react';

function Completed({ formData, setFormData }) {
  return (
    <div className="completed">
      <div className="circle">
        <img className="check" src="./check.png" alt="check" />
      </div>
      <h1>Congratulations,Eren!</h1>
      <p>You have completed onboarding, you can start using the Eden!</p>
    </div>
  );
}

export default Completed;
