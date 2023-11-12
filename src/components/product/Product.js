import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Hero from "../hero/Hero";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin: 0 5rem;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #000;
  }

  .product-name {
    font-size: 1rem;
    font-weight: 600;
  }

  .product-price {
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const Product = ({ products }) => {
  return (
    <>
      <Hero />
      <Container>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product">
              <img
                src={product.images[4]}
                alt={product.name}
                style={product.style}
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">RS. {product.price}</p>
            </div>
          </Link>
        ))}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(Product);
