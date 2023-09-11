import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import {
  adToLocalStorage,
  getStoredCardFromLocalStorage,
  remveFromLocalSorage,
} from "../../utitlities/localstorege";
import Cart from "../cart/Cart";

const Bottles = () => {
  // useState for storing api data
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  // fetching data using useEffect
  useEffect(() => {
    fetch("../../../public/bottles.json") //fetch url here
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart form local storage
  useEffect(() => {
    // console.log(bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCardFromLocalStorage();
      // console.log(storedCart, bottles);
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        savedCart.push(bottle);
        // console.log(savedCart);
        setCart(savedCart);
      }
    }
  }, [bottles]);

  // Click event function for Buy now button
  const handleBuyNowButtonClick = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    adToLocalStorage(bottle.id);
  };

  const handleRomoveFromCart = (id) => {
    //visual remove
    const remainingcart = cart.filter(bottle => bottle.id !== id)
    setCart(remainingcart)
    // remove from local store
    remveFromLocalSorage(id)
  };

  return (
    <div>
      <p className="text-lg text-center"> Availabe Bottles  : {bottles.length}</p>

      <Cart handleRomoveFromCart={handleRomoveFromCart} cart={cart}></Cart>
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col mx-auto gap-5 max-w-[90vw] my-5">
        {bottles.map((bottle) => {
          return (
            <Bottle
              handleBuyNowButtonClick={handleBuyNowButtonClick}
              key={bottle.id}
              bottle={bottle}
            ></Bottle>
          );
        })}
      </div>
    </div>
  );
};
// const clearAllfromLocalStorage = () => localStorage.clear();
export default Bottles;
