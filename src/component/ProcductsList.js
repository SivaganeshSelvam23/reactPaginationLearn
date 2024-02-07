import React from "react";

function ProcductsList({ productsList }) {
  return (
    <div>
      <ul>
        {productsList.length > 0 &&
          productsList.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default ProcductsList;
