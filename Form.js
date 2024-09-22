import React, { useState } from "react";

const Form = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [response, setResponse] = useState(null);
  const [visibleSections, setVisibleSections] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://your-backend-url.herokuapp.com/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonInput,
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleVisibilityChange = (section) => {
    setVisibleSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          JSON Input:
          <input
            type="text"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <label>
            <input
              type="checkbox"
              checked={visibleSections.includes("numbers")}
              onChange={() => handleVisibilityChange("numbers")}
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={visibleSections.includes("alphabets")}
              onChange={() => handleVisibilityChange("alphabets")}
            />
            Alphabets
          </label>
          <label>
            <input
              type="checkbox"
              checked={visibleSections.includes("highest_alphabet")}
              onChange={() => handleVisibilityChange("highest_alphabet")}
            />
            Highest Alphabet
          </label>

          {visibleSections.includes("numbers") && (
            <div>
              <h3>Numbers</h3>
              <p>{response.numbers.join(", ")}</p>
            </div>
          )}
          {visibleSections.includes("alphabets") && (
            <div>
              <h3>Alphabets</h3>
              <p>{response.alphabets.join(", ")}</p>
            </div>
          )}
          {visibleSections.includes("highest_alphabet") && (
            <div>
              <h3>Highest Alphabet</h3>
              <p>{response.highest_alphabet.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
