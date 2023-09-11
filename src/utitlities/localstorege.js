//Check availabe cart item from local storage and return it for further use
const getStoredCardFromLocalStorage = () => {
  const storedCardString = localStorage.getItem("cart");
  if (storedCardString) {
    return JSON.parse(storedCardString);
  } else {
    return [];
  }
};

// after getting stored data or empty array , push new data to cart and pass it to  another function
const adToLocalStorage = (id) => {
  const cart = getStoredCardFromLocalStorage();
  cart.push(id);
  sateCartToLocalStorage(cart);
};

//getting final card and setting it to local storage

const sateCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
// const clearAllfromLocalStorage=() => localStorage.clear()

const remveFromLocalSorage = (id) => {
  const cart = getStoredCardFromLocalStorage();
  //removing every id
  const remainig = cart.filter((idx) => idx !== id);
  sateCartToLocalStorage(remainig);
};

export {
  adToLocalStorage,
  getStoredCardFromLocalStorage,
  remveFromLocalSorage,
};
