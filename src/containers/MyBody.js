import React, { useState } from "react";
import { changeCity, changeUnit } from "../store/actions";
import { connect } from "react-redux";

import TrendGraph from "../components/TrendGraph";
import MyToggleButtonGroup from "../components/MyToggleButtonGroup";

const MyBody = (props) => {
  const [selection, setSelection] = useState(props.currentCity);

  const handleNewSelection = (event, newSelection) => {
    if (newSelection) {
      setSelection(newSelection);
      props.changeCity(newSelection);
    }
  };

  return (
    <div>
      <MyToggleButtonGroup selection handleChange={handleNewSelection} />

      <TrendGraph title={selection} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentCity: state.changeCity.city };
};

const mapDispatchToProps = {
  changeCity,
  changeUnit,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBody);
