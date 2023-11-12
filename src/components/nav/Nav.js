import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ICON1 from "../../images/nav/ICON1.svg";
import ICON2 from "../../images/nav/ICON2.svg";
import ICON3 from "../../images/nav/ICON3.svg";
import ICON4 from "../../images/nav/ICON4.svg";

const NavBar = styled.nav`

  display: flex;
  gap: 20%;
  justify-content: flex-end;
  align-items: center;
  margin: 0 8%;



  ul {
    display: flex;
    gap: 10%;    
    align-items: center;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    font-weight: 500;
  }

  li {
    padding: 10px;
  }

  img {
    width: 28px;
  }

  .link-list {
    gap: 15%;
  }


  @media screen and (max-width: 480px) {
    ul {
      display: none;    
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <ul className="link-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="icon-list">
        <li>
          <Link to="/dashboard">
            <img src={ICON1} alt="ICON1" />
          </Link>
        </li>
        <li>
          <img src={ICON2} alt="ICON2" />
        </li>
        <li>
          <img src={ICON3} alt="ICON3" />
        </li>
        <li>
          <Link to="/cart">
            <img src={ICON4} alt="ICON4" />
          </Link>
        </li>
      </ul>
    </NavBar>
  );
};

export default Nav;
