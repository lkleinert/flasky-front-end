import React from "react";

const Dog = ({ name, chipNum }) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Chip #: {chipNum}</span>
      <button>add chip</button>
    </li>
  );
};

export default Dog;
