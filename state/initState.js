let state;
if (typeof window !== "undefined") {
  state = {};
  const stateOnLocalStorage = window.localStorage.getItem("state");
  if (stateOnLocalStorage == null) {
    window.localStorage.setItem("state", JSON.stringify({}));
    state.cart = {};
  } else {
    state = JSON.parse(window.localStorage.getItem("state"));
    if (!Object.keys(state).length) {
      state.cart = {};
    }
  }
} else {
  state = false;
}

export default {
  cart: state == false ? {} : state.cart,
  auth: { isUserLogin: false },
};
