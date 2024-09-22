import React, { useState } from "react";
import InputForm from "./Components/InputForm.js";
import MultiSelect from "./Components/MultiSelect";
import ResultDisplay from "./Components/ResultDisplay";

const App = () => {
  const [response, setResponse] = useState(null);
  const [showMultiSelect, setShowMultiSelect] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div>
      <h1>RA2111004020012</h1>
      <InputForm
        setResponse={setResponse}
        setShowMultiSelect={setShowMultiSelect}
      />
      {showMultiSelect && (
        <MultiSelect
          setSelectedOptions={(options) =>
            setSelectedOptions(options.map((option) => option.value))
          }
        />
      )}
      {response && (
        <ResultDisplay response={response} selectedOptions={selectedOptions} />
      )}
    </div>
  );
};

export default App;