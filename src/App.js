import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');
  const [adjective, setAdjective] = useState('');
  const [story, setStory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    generateStory();
  };

  const handleNounChange = (event) => {
    setNoun(event.target.value);
    generateStory();
  };

  const handleVerbChange = (event) => {
    setVerb(event.target.value);
    generateStory();
  };

  const handleAdjectiveChange = (event) => {
    setAdjective(event.target.value);
    generateStory();
  };

  const generateStory = () => {
    // Use the form inputs (noun, verb, adjective) to generate the story
    const generatedStory = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb}.`;
    setStory(generatedStory);
  };

  return (
    <div>
      {isSubmitted ? (
        <MadlibStory story={story} />
      ) : (
        <MadlibForm
          onSubmit={handleSubmit}
          onNounChange={handleNounChange}
          onVerbChange={handleVerbChange}
          onAdjectiveChange={handleAdjectiveChange}
        />
      )}
    </div>
  );
};

export default App;



