import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import CartIterface from "../../interface/cartInterface";
import { getCart, getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const cart = useSelector<RootState, CartIterface[]>(getCart);
  const totalCartPrice = useSelector<RootState, number>(getTotalCartPrice);

  if (!cart.length) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cart.length} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
