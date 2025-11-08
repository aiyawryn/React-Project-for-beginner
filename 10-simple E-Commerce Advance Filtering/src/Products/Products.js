import React from "react";
import "./Products.css";
import Cards from "../components/Cards";

function Products({ result }) {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
}

export default Products;
