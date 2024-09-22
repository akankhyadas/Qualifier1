import React from "react";
import Select from "react-select";

const options = [
  { value: "alphabets", label: "Alphabets" },
  { value: "numbers", label: "Numbers" },
  { value: "highest_alphabet", label: "Highest Alphabet" },
];

const MultiSelect = ({ setSelectedOptions }) => {
  return <Select isMulti options={options} onChange={setSelectedOptions} />;
};

export default MultiSelect;