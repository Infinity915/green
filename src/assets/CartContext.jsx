import React, { createContext, useReducer, useContext, useEffect } from "react";

// Create context
const CartContext = createContext();

// Reducer to manage cart state
function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return action.payload;
    case "ADD_TO_CART":
      // Add item to cart (check if it's already in the cart)
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];
    case "CHANGE_QTY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

// Provide context to the application
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const res = await fetch("http://localhost:3000/cart");
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: "SET_CART", payload: data });
      } else {
        console.error("Error fetching cart items.");
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  const addToCart = async (item) => {
    try {
      // Add item to the backend cart
      const res = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (res.ok) {
        const addedItem = await res.json();
        dispatch({ type: "ADD_TO_CART", payload: addedItem });
      } else {
        console.error("Error adding item to cart.");
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, dispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook to use the cart context
export const useCart = () => useContext(CartContext);
