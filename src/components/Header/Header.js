import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";
import { useAuth } from "../../routing/useAuth";

const HeaderDiv = styled.div`
  background-color: #2558b8;
  padding: 15px 0 15px 20px;
  display: flex;
  align-items: flex-end;

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

  console.log(url[url.length - 1]);

  return (
    <HeaderDiv>
      {/* <div style={{ width: "300px" }}>
        <Link to="/pocetna">
          <img src="/ostrog_logo.png" alt="Logo" width="70%" />
        </Link>
      </div> */}
      <nav>
        <div>
          <ul>
            {pages.map((page, id) => (
              <li
                key={id}
                // className={
                //   window.location.href.includes(page.path) ? "active" : ""
                // }
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
        <div>
          <ul>
            <li
              className={`${url[url.length - 1]}` === "prijava" ? "active" : ""}
            >
              <Link to="/prijava">Prijava</Link>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
