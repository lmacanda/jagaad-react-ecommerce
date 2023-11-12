// Hero.js
import React from "react";
import background from "../../images/hero.png";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  background: url(${background}) no-repeat center center/cover; );
 height: 316px;
 text-align: center;
 a {
    text-decoration: none;
    color: #000;
  }
`;
const Hero = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  let currentPageName = pathSegments[pathSegments.length - 1];
  console.log(currentPageName);
  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  if (!currentPageName) {
    return (
      <Container>
        <img className="logo" src={logo} alt="logo" />
        <h1>Home</h1>
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Your Best Store Online</Link>
        </nav>
      </Container>
    );
  }
  currentPageName = capitalizeFirstLetter(currentPageName);
  return (
    <Container>
      <img className="logo" src={logo} alt="logo" />
      <h1>{currentPageName}</h1>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        {" > "}
        <Link to={location.pathname}>{currentPageName}</Link>
      </nav>
    </Container>
  );
};
export default Hero;
