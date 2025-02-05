import React from "react";
import "./Fetch.css";

export const Pagination = ({ product, currPage, setCurrPage }) => {
  const prodLength = product.length;
  const pageItems = 5;
  const pagesNo = Math.ceil(prodLength / pageItems);
  console.log(prodLength);

  const handlePagination = (n) => {
    setCurrPage(n);
  };
  const handleLeft=()=>{
    setCurrPage((prev)=>prev-1)
  };
  const handleRight=()=>{
    setCurrPage((prev)=>prev+1)
  };
  return (
    <div className="pagination-container">
        <button disabled={currPage===0} className="next" onClick={()=>{handleLeft()}}> ⬅</button>
      {[...Array(pagesNo).keys()].map((n) => {
        return (
          <div>
            
            <button
              className={"pagination" + (n === currPage ? " active" : " ")}
            // className={"pagination" + (n === currPage ? " active" : "")}

              onClick={() => handlePagination(n)}
              key={n}
            >
              {n+1}
            </button>
          </div>
        );
      })}
       <button disabled={currPage===pagesNo-1} className="next" onClick={()=>{handleRight()}}>➡</button>
    </div>
  );
};
