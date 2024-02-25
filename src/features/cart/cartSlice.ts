import { createSlice } from "@reduxjs/toolkit";
import CartIterface from "../../interface/cartInterface";

interface State {
  cart: {
    cart: CartIterface[];
  };
}

interface InitialState {
  cart: CartIterface[];
}

const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      console.log(action.payload);
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item;
      if (item?.quantity !== undefined) {
        item.quantity = item.quantity - 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
      console.log(item?.quantity);

      if (item?.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item?.quantity !== undefined) {
        item.quantity = item?.quantity + 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
  },
});
export const getCart = (state: State) => state.cart.cart;
export const getTotalCartPrice = (state: State): number =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

  export const getCurrentQuantityById = (id:number)=>{
    return function(state:State){
      return  state.cart.cart.find((item:CartIterface) => item.pizzaId === id)?.quantity ?? 0;
    }
  }

export const {
  addItem,
  deleteItem,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
