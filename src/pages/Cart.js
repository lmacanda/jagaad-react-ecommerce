import { connect } from "react-redux";

function Cart({ cart }) {
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        console.log(item.images);
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            {item.images && item.images[4] && (
              <img src={item.images[4]} alt={item.name} />
            )}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
