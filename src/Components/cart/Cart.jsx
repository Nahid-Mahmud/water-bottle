import PropTypes from "prop-types";
const Cart = ({ cart, handleRomoveFromCart }) => {
  return (
    <div>
      <h4 className="text-center text-2xl my-3">Cart Item's: {cart.length} </h4>
      <div className="ml-5 flex flex-wrap gap-5">
        {cart.map((bottle, index) => (
          <div className="flex flex-col items-center w-fit gap-5 my-5 p-5 rounded bg-slate-400" key={index}>
            <p>{bottle.name}</p>{" "}
            <img className="h-36 w-28" src={bottle.img} alt="" />
            <button onClick={()=>handleRomoveFromCart(bottle.id)} className="btn btn-secondary">Remove Bottle</button>
          </div>
        ))}
      </div>
      {/* <div className="ml-5 flex gap-5 flex-wrap">
        {cart.map((bottle, index) => (
          <img key={index} className="h-28" src={bottle.img} alt="" />
        ))}
      </div> */}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRomoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
