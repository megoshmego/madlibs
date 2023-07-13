import React from 'react';

const MadlibStory = ({ formData, handleRestart }) => {
  // Destructure the form data
  const { adjective1, adjective2, noun1, noun2, verb } = formData;

  // Array of story templates
  const storyTemplates = [
    `While Harper is hilarious, it was truly her ${adjective1} that led her to becoming the ${adjective2}, the best ${noun1} that ever lived.`,
    `Mia was the silliest ${noun2} I knew, but most people didn't know she could also ${verb}, and was very ${adjective1}.`,
    `Beetles the cat was as precious as ${noun2}, and as ${adjective2} as a lion! She was the best at ${verb}.`,
  ];

  // Generate a random index between 0 and the length of the storyTemplates array
  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  
  // Use the random index to select a story template
  const storyTemplate = storyTemplates[randomIndex];
  
  // Replace the placeholders in the selected story template with the form data
  const generatedStory = storyTemplate
    .replace('${adjective1}', adjective1)
    .replace('${adjective2}', adjective2)
    .replace('${noun1}', noun1)
    .replace('${noun2}', noun2)
    .replace('${verb}', verb);

  return (
    <div>
      {/* Render the generated story */}
      <p>{generatedStory}</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default MadlibStory;
