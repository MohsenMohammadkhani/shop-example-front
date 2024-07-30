let state;
if (typeof window !== "undefined") {
  state = {};
  if (window.localStorage.getItem("state") == null) {
    window.localStorage.setItem("state", JSON.stringify({}));
    state.cart = {};
  } else {
    state = JSON.parse(window.localStorage.getItem("state"));
  }
} else {
  state = false;
}

export default {
  cart: state == false ? {} : state.cart,
};
