import { Button } from "@mui/material";
import React from "react";
import "./product.css";

const Product = ({ url, title, price }) => {
  return (
    <div className="card">
      <img src={url} alt="product" className="img" />
      <h3 className="title">{title}</h3>
      <p>Cena: {price} RSD</p>
      <Button
        className="addBtn"
        onClick={
          () => {}
          //   dispatch(
          //     addBeerToCart(
          //       name,
          //       price,
          //       id,
          //       beerIf.length > 0 ? beerIf[0].quantity + 1 : 1
          //     )
          //   )
        }
      >
        DODAJ U KORPU{" "}
        <i
          className="fa-thin fa-cart-plus"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        ></i>
      </Button>
    </div>
  );
};

export default Product;
