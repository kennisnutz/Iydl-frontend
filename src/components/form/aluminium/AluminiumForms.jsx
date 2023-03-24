import React from 'react';
import Page1 from './page1';
import Page2 from './page2';
import ConfirmationPage from './ConfirmationPage';

const AluminiumForms = ({ currentStep, formData, setFormData }) => {
  const showStep = (step) => {
    switch (step) {
      case 2:
        return <Page1 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Page2 formData={formData} setFormData={setFormData} />;
      case 4:
        return <ConfirmationPage formData={formData} />;
    }
  };
  return <div>{showStep(currentStep)}</div>;
};

export default AluminiumForms;
