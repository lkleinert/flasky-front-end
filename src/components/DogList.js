import React from "react";
import Dog from "./Dog";

const DogList = ({ dogs }) => {
  return (
    <ul>
      <h2>Dog Count: 3</h2>
      {dogs.map((dog, index) => {
        return <Dog key={index + 1} name={dog.name} chipNum={dog.chipNumber} />;
      })}
    </ul>
  );
};

export default DogList;
