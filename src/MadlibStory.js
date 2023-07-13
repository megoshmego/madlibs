import React from 'react';

const MadlibStory = ({ formData, handleRestart }) => {
  const { adjective1, adjective2, noun1, noun2, verb } = formData;

  const generatedStory = `While Harper is hilarious, it was truly her ${adjective1} that led her to becoming the ${adjective2}, the best ${noun1} that ever lived.
    Mia was the silliest ${noun2} I knew, but most people didn't know she could also ${verb}, and was very ${adjective1}.
    Beetles the cat was as precious as ${noun2}, and as ${adjective2} as a lion! She was the best at ${verb}.`;

  return (
    <div>
      <p>{generatedStory}</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default MadlibStory;
