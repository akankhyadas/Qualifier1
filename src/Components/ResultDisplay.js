import React from "react";

const ResultDisplay = ({ response, selectedOptions }) => {
  return (
    <div>
      {selectedOptions.includes("alphabets") && (
        <div>
          <h3>Alphabets</h3>
          <p>{response.alphabets.join(", ")}</p>
        </div>
      )}
      {selectedOptions.includes("numbers") && (
        <div>
          <h3>Numbers</h3>
          <p>{response.numbers.join(", ")}</p>
        </div>
      )}
      {selectedOptions.includes("highest_alphabet") && (
        <div>
          <h3>Highest Alphabet</h3>
          <p>{response.highest_alphabet.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;