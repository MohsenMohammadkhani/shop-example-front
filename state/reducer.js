import initState from "./initState";

const appReducer = (state, action) => {
  let newState = initState;
  let productIDAdd;
  let newProduct = {};
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      productIDAdd = action.payload.productID;
      if (state.cart[productIDAdd] !== undefined) {
        state.cart[productIDAdd].count = state.cart[productIDAdd].count + 1;
      } else {
        newProduct[productIDAdd] = {
          ...action.payload,
        };
      }
      newState = { ...state, cart: { ...state.cart, ...newProduct } };
      break;

    case "SUBTRACT_PRODUCT_TO_CART":
      productIDAdd = action.payload.productID;
      if (state.cart[productIDAdd] !== undefined) {
        if (state.cart[productIDAdd].count == 1) {
          let cartFilter = Object.entries(state.cart).filter(([key, value]) => {
            if (key != productIDAdd) {
              return value;
            }
          });
          state.cart = Object.fromEntries(cartFilter);
        } else {
          state.cart[productIDAdd].count = state.cart[productIDAdd].count - 1;
        }
      }
      newState = { ...state, cart: { ...state.cart, ...newProduct } };
      break;

    case "USER_IS_LOGIN":
      newState = { ...state, auth: { isUserLogin: true } };
      break;
  }

  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
};

export default appReducer;
