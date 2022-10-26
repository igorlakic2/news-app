import { Button } from "@mui/material";
import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";

const Product = ({ url, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img src={url} alt="product" className="img" />
      <h3 className="title">{title}</h3>
      <p>Cena: {price} RSD</p>
      <Button
        className="addBtn"
        onClick={() => dispatch(addToCart({ url, title, price }))}
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
