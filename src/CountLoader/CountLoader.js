import React from "react";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => {
  return {
    count: state.count,
    text: state.text,
  };
};
const GetDataFromReduxStore = connect(mapStateToProps)(CountLoader); // Instead export component on export default we have to export here as an second argument
function CountLoader(props) {
  return (
    <div>
      CountLoader : {props.count} {props.text}{" "}
    </div>
  );
}

export default GetDataFromReduxStore; // instead of export here regular argument have to export connect method here .
