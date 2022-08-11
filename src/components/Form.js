import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import WorkInfo from './WorkInfo';
import PlanInfo from './PlanInfo';
import Completed from './Completed';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    example: '',
  });

  const FormTitles = [
    'Welcome! First things first...',
    "Let's set up a home for all your work",
    'How are your planning to use Eden?',
    '',
  ];

  const FormDescription = [
    'You can always change them later.',
    'You can always create another workspace later.',
    "We'll streamline your setup experience accordingly.",
    '',
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <WorkInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <PlanInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Completed formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div>
        <a className="brand" href="/">
          <img src="./logo.png" alt="logo" />
          Eden
        </a>
      </div>
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? '25%'
                : page === 1
                ? '50%'
                : page === 2
                ? '75%'
                : '100%',
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
          <p>{FormDescription[page]}</p>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert('FORM SUBMITTED');
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1
              ? 'Launch Eden'
              : 'Create Workspace'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
