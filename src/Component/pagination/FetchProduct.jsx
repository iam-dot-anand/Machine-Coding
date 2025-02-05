import React, { useEffect, useState }  from "react";
import "./Fetch.css";
import { Pagination } from "./Pagination";

export const FetchProduct = () => {
  const [product, setProduct] = useState([]);
  const [currPage, setCurrPage]=useState(0);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // data.product.length = 20;
    setProduct(data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
//   console.log({product});

    const pageItems=5;
    const start=currPage*pageItems;
    const end=start+pageItems;

  return (
    <div className="container">
      <h1>Pagination</h1>
      <div className="product-container">

      {product.slice(start,end).map((currVal, index) => {
        return (
          <div>
            <div key={index} className="product">
              <img alt="" src={currVal.thumbnail} className="product-img" />
              <p>{currVal.title}</p>
            </div>
          </div>
        );
      })}
      </div>
      <Pagination product={product} currPage={currPage} setCurrPage={setCurrPage}/>
    </div>
  );
};
