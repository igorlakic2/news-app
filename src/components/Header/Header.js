import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";
import { useAuth } from "../../routing/useAuth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const HeaderDiv = styled.div`
  background-color: #2558b8;
  padding: 15px 0 15px 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

const Header = ({ pages }) => {
  const { logout } = useAuth();
  const value = window.localStorage.getItem("user");
  /* eslint-disable */
  const url = window.location.href.split("/");
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <HeaderDiv>
      <nav>
        <div>
          <ul>
            {pages.map((page, id) => (
              <li
                key={id}
                className={
                  `/${url[url.length - 1]}` === page.path ? "active" : ""
                }
              >
                <Link to={page.path}>{page.label}</Link>
              </li>
            ))}
            {value && value !== "null" && (
              <li>
                <a onClick={logout} style={{ cursor: "pointer" }}>
                  Odjava
                </a>
              </li>
            )}
          </ul>
        </div>
        {value === "null" && (
          <div>
            <ul>
              <li
                className={`${url[url.length - 1]}` === "login" ? "active" : ""}
              >
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {cart.total > 0 && (
        <div className="cartIcon">
          <ShoppingCartIcon fontSize="large" />
          {cart.total}
        </div>
      )}
    </HeaderDiv>
  );
};

export default Header;
