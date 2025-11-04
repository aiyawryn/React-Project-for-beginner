import React, { useEffect, useState } from "react";
import "../style.css";
import axios from "axios";

export const Meals = () => {
  const [items, setItems] = useState([]);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <p className="meal-id">{`#${idMeal}`}</p>
        <section className="content">
          <p>{strMeal}</p>
        </section>
      </section>
    );
  });

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        //console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="items-container">{itemsList}</div>;
};
