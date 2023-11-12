import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 3%;
  margin-bottom: 0.8rem;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(250, 244, 244, 1);
  border: 1px solid rgba(250, 244, 244, 1);
  cursor: pointer;

  &:focus {
    background-color: rgba(251, 235, 181, 1);
    border: 1px solid rgba(251, 235, 181, 1);
  `;

const SizeButtons = ({ productId, products }) => {
  const product = products.find((p) => p.id === productId);
  const availableSizes = product.sizes || [];
  console.log(availableSizes);

  const [selectedSize, setSelectedSize] = useState(availableSizes[0] || "");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <p className="selected-product-size-text">Size: {selectedSize}</p>
      <Container>
        {availableSizes.map((size, index) => (
          <Button
            key={index}
            size={size}
            selected={selectedSize === size}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </Button>
        ))}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(SizeButtons);
