import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setResponse, setShowMultiSelect }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(input);
      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        setError("Invalid input format");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/bfhl",
        parsedInput
      );
      setResponse(response.data);
      setShowMultiSelect(true);
      setError("");
    } catch (err) {
      setError("Invalid JSON or network error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="4"
          cols="50"
          placeholder='Enter JSON e.g. {"data": ["A", "C", "z"]}'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputForm;