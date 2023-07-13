import React from "react";

const MadlibForm = ({ formData, handleInputChange, handleSubmit }) => {
  const { adjective1, adjective2, noun1, noun2, verb } = formData;

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Adjective 1:
          <input
            type="text"
            name="adjective1"
            value={adjective1}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Adjective 2:
          <input
            type="text"
            name="adjective2"
            value={adjective2}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Noun 1:
          <input
            type="text"
            name="noun1"
            value={noun1}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Noun 2:
          <input
            type="text"
            name="noun2"
            value={noun2}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Verb:
          <input
            type="text"
            name="verb"
            value={verb}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MadlibForm;
