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
        <div>
          {/* Render the story with the form entries */}
          <p>
            While Harper is hilarious, it was truly her {adjective1} that led her to becoming the {adjective2}, the best {noun1} that ever lived.
          </p>
          <p>
            Mia was the silliest {noun2} I knew, but most people didn't know she could also {verb}, and was very {adjective1}.
          </p>
          <p>
            Beetles the cat was as precious as {noun2}, and as {adjective2} as a lion! She was the best at {verb}.
          </p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Form fields go here */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
  
  const handleRestart = () => {
    setIsSubmitted(false);
    setAdjective1('');
    setAdjective2('');
    setNoun1('');
    setNoun2('');
    setVerb('');
  };
  
export default App;



