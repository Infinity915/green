export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ITEMS":
        return { ...state, items: action.payload }; // Set items in state
  
      case "ADD_TO_CART":
        const itemExists = state.cart.find((item) => item.id === action.payload.id);
        if (itemExists) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, qty: 1 }],
          };
        }
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
  
      case "UPDATE_CART_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: action.payload.qty }
              : item
          ),
        };
  
      default:
        return state;
    }
  };
  