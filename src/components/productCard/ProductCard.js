import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import SizeButtons from "./SizeButtons";
import ColorButtons from "./ColorButtons";

import { connect, useDispatch } from "react-redux";

import { addToCart } from "../../redux/slices/cartSlice";

const Breadcumb = styled.div`
  nav {
    display: flex;
    gap: 1rem;
    margin: 2% 2%;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 0.8rem;
    font-weight: 400;
  }

  @media (min-width: 758px) {
    nav {
      margin: 4% 5%;
    }
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  .production-description-name {
    font-size: 3rem;
    font-weight: 400;
    margin-top: 0;
  }

  .product-description-price {
    font-size: 1.5rem;
    font-weight: 400;
    color: #9f9f9f;
    margin-bottom: 3%;
  }

  .product-description-rating {
    display: flex;
    gap: 1%;
    align-items: center;
    margin-bottom: 3%;
  }

  .product-description-rating-star {
    color: rgba(255, 218, 91, 1);
  }

  .product-description-rating-text {
    margin-left: 3%;
    color: rgba(159, 159, 159, 1);
    font-size: 0.8rem;
    font-weight: 400;
  }

  .product-description-text {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: normal;
  }

  .selected-product-color-text {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(159, 159, 159, 1);
    margin-bottom: 4%;
  }

  .product-card-info {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(159, 159, 159, 1);
    border-top: 1px solid rgba(159, 159, 159, 0.2);
    padding-top: 4%;
    list-style: none;
    padding-left: 0;
    line-height: 2rem;
  }

  .product-add-btn {
    display: flex;
    gap: 3%;
    margin-bottom: 10%;
  }

  .product-add-btn button {
    border-radius: 10px;
    border: 1px solid #9f9f9f;
    padding: 1rem 1.5rem;
    background-color: #fff;
    cursor: pointer;
  }

  .product-share-icons span {
    display: inline-flex;
    gap: 10%;
    color: black;
    width: 50%;
    margin-left: 3%;
  }
  @media (min-width: 758px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;

    .product-card {
      width: 50%;
    }

    .product-description {
      width: 30%;
    }

    .product-description-text {
      font-size: 0.8rem;
      font-weight: 400;
    }

    img {
      width: 150%;
      background-size: cover;
      background-color: #fff9e5;
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 4rem;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 76px;
    height: 80px;
    border-radius: 10px;
    background: #FFF9E5;
  }

  .product-image:last-child img {
    width: 423px;
    height: 500px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF9E5;
  }

`;

const ProductCard = ({ products }) => {
  const { id } = useParams(); // Use React Router to get the product ID
  const dispatch = useDispatch();
  console.log(useParams());

  // Find the product with the specified ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log(product);
  };

  return (
    <div className="product-card">
      <Breadcumb>
        <nav className="product-breadcrumb">
          <Link to="/">Home</Link> {">"}
          <Link to="/shop">Shop</Link> {">"} | <p>{product.name}</p>
        </nav>
      </Breadcumb>

      <Container>
        {/* Image */}
        <ImageContainer>
          {product.images.map((image, index) => (
            <div
              className="product-image"
              key={index}
              style={{
                gridColumn: index === 4 ? "2" : "1",
                gridRow: index === 4 ? "1 / span 4" : `auto`,
              }}
            >
              <img
                src={image}
                alt={`${index + 1}`}
              />
            </div>
          ))}
        </ImageContainer>

        {/* Product Description */}
        <div className="product-description">
          <h1 className="production-description-name">{product.name}</h1>
          <h3 className="product-description-price">${product.price}</h3>
          <div className="product-description-rating">
            {/* Render the star ratings here */}
            <AiFillStar className="product-description-rating-star" />
            <AiFillStar className="product-description-rating-star" />
            <AiFillStar className="product-description-rating-star" />
            <AiFillStar className="product-description-rating-star" />

            <span className="product-description-rating-text">
              | 5 Customer Reviews
            </span>
          </div>
          <p className="product-description-text">{product.description}</p>

          {/* Size Buttons */}
          <SizeButtons productId={product.id} />

          {/* Color Buttons */}
          <ColorButtons productId={product.id} />

          {/* Add to Cart Button */}
          <div className="product-add-btn">
            <button className="product-add-product"> - 1 + </button>
            <button className="product-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          {/* Product Details */}
          <ul className="product-card-info">
            <li>SKU: {product.sku}</li>
            <li>Category: {product.category}</li>
            <li>
              Tags: {Array.isArray(product.tags) ? product.tags.join(", ") : ""}
            </li>

            {/* Share Icons */}
            <div className="product-share-icons">
              {/* Include social media sharing icons here */}
              <li>
                Share:
                <span>
                  <FaFacebook />
                  <FaLinkedin />
                  <AiFillTwitterCircle />
                </span>
              </li>
            </div>
          </ul>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(ProductCard);
