// Styling
import { IconContext } from "react-icons";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AddButton = (props) => {
  const dispatch = useDispatch();

  return (
    <IconContext.Provider
      value={{ color: "blue", className: "global-class-name" }}
    >
      <div></div>
    </IconContext.Provider>
  );
};

export default AddButton;
