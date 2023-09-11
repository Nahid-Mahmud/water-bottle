
import PropTypes from 'prop-types';

const Bottle = (props) => {
  const { bottle, handleBuyNowButtonClick } = props;
  const {  name,  img, price, seller, } =
    bottle;
  // console.log(handleBuyNowButtonClick);
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="">Price : {price}$</h3>
        <p>Seller: {seller}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleBuyNowButtonClick(bottle)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

Bottle.propTypes ={
  bottle:PropTypes.object.isRequired,
  handleBuyNowButtonClick :PropTypes.func.isRequired,
}

export default Bottle;
