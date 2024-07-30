import initState from "./initState";

const appReducer = (state, action) => {
  let newState = initState;
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      const productIDAdd = action.payload.productID;
      let newProduct = {};
      if (state.cart[productIDAdd] !== undefined) {
        state.cart[productIDAdd].count = state.cart[productIDAdd].count + 1;
      } else {
        newProduct[productIDAdd] = {
          ...action.payload,
        };
      }

      newState = { ...state, cart: { ...state.cart, ...newProduct } };
      break;
  }

  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
};

export default appReducer;
