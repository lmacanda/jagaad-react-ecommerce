import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 3%;
  margin-bottom: 5%;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #816dfa;
  background-color: ${(props) => props.backgroundcolor};
  cursor: pointer;
`;

const ColorButtons = ({ productId, products }) => {
  const product = products.find((p) => p.id === productId);
  const availableColors = product.colors || [];

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <p className="selected-product-color-text">Color: {selectedColor}</p>
      <Container>
        {availableColors.map((color, index) => (
          <Button
            key={index}
            color={color}
            onClick={() => handleColorClick(color)}
            backgroundcolor={color}
          />
        ))}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(ColorButtons);
