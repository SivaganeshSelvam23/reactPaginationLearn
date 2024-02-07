import React from "react";

function Pagination({ productsList, page, selectedPage }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "5%",
      }}
    >
      <span
        style={{
          cursor: "pointer",
          display: page > 1 ? "block" : "none",
          fontSize: "30px",
        }}
        onClick={() => selectedPage(page - 1)}
      >
        ◀️
      </span>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          cursor: "pointer",
        }}
      >
        {[...Array(productsList.length / 10)].map((_, i) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                backgroundColor: page === i + 1 ? "blue" : "transparent",
                color: page === i + 1 ? "white" : "black",
                border: page === i + 1 ? "2px solid white" : "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => selectedPage(i + 1)}
              key={i}
            >
              <span>{i + 1}</span>
            </div>
          );
        })}
      </div>
      <span
        style={{
          cursor: "pointer",
          display: page < productsList.length / 10 ? "block" : "none",
          fontSize: "30px",
        }}
        onClick={() => selectedPage(page + 1)}
      >
        ▶️
      </span>
    </div>
  );
}

export default Pagination;
