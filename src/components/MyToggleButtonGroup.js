import React from "react";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
const MyToggleButtonGroup = ({ selection, handleChange }) => {
  return (
    <ToggleButtonGroup
      value={selection}
      exclusive
      onChange={handleChange}
      aria-label="text city"
    >
      <ToggleButton value="Temperature" aria-label="Temperature">
        Temperature
      </ToggleButton>
      <ToggleButton value="Precipitation" aria-label="Precipitation">
        Precipitation
      </ToggleButton>
      <ToggleButton value="Wind" aria-label="Wind">
        Wind
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default MyToggleButtonGroup;
