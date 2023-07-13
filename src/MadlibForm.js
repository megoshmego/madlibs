import React from 'react';

const MadlibForm = ({ formData, handleInputChange, handleSubmit }) => {
  const { adjective1, adjective2, noun1, noun2, verb } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adjective 1:
        <input type="text" name="adjective1" value={adjective1} onChange={handleInputChange} />
      </label>
      {/* Repeat the above pattern for the other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};
  
export default MadlibForm;
