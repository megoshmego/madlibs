import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';
import './App.css';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    adjective1: '',
    adjective2: '',
    noun1: '',
    noun2: '',
    verb: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setIsSubmitted(false);
    setFormData({
      adjective1: '',
      adjective2: '',
      noun1: '',
      noun2: '',
      verb: ''
    });
  };

  return (
    <div>
      {isSubmitted ? (
        <MadlibStory formData={formData} handleRestart={handleRestart} />
      ) : (
        <MadlibForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
