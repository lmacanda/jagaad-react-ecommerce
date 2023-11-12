import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  
  
  
  font-family: "Poppins", sans-serif;
  
 
  padding: 0 1%;
  margin-top: 2rem;

  ul {
    padding: 0;
    line-height: 30px;
    
  }


  h2 {
    color: rgba(159, 159, 159, 1);
    weight: 500;
    font-size: 1rem;
  }

  form {
    display: flex;
    align-items: baseline;
    gap: 1%;
  }

  input { 
    border: none;
    border-bottom: 1px solid rgba(159, 159, 159, 1);
  }

     

  

  .footer-address {
    margin-bottom: 2rem;
    color: rgba(159, 159, 159, 1);
    font-size: 1rem;
    font-weigth: 500;
    
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .footer-links ul {
    list-style: none;
  }

  .footer-links ul li a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .footer-help {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .footer-help ul {
    list-style: none;
  }

  .footer-help ul li a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .footer-newsletter {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .footer-newsletter input {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer-newsletter button {
    padding: 0.5rem;
    background-color: #fff;
    color: black;
    font-size: 0.8rem;
    font-weight: 500;
    border: none;
    border-bottom: 1px solid rgba(159, 159, 159, 1);
    cursor: pointer;
  }

  .footer-copywright {
    margin-bottom: 2rem;
  }

    @media screen and (min-width: 600px) and (max-width: 1920px) {
     
      justify-content: space-between;
        flex-direction: row;
        padding: 3% 5%;

     

        ul {
          line-height: 46px;
        }

        .footer-address {
          align-self: center;
        }
        `;

const Copyright = styled.div`
  margin: 0 1%;
  border-top: 1px solid rgba(159, 159, 159, 0.2);

  @media screen and (min-width: 1200px) and (max-width: 1920px) {
    margin: 0 5%;
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <div className="footer-address">
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className="footer-links">
          <h2>Links</h2>
          <ul>
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
        </div>
        <div className="footer-help">
          <h2>Help</h2>
          <ul>
            <li>
              <a>Payment Options</a>
            </li>
            <li>
              <a>Returns</a>
            </li>
            <li>
              <a>Privacy Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h2>Newsletter</h2>
          <form>
            <input type="text" placeholder="Enter your email Address" />
            <button>Subscribe</button>
          </form>
        </div>
      </Container>
      <Copyright>
        <p className="footer-copywright">
          2022 Meubel House. All rights reverved
        </p>
      </Copyright>
    </>
  );
};

export default Footer;
