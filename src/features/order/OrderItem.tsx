/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatCurrency } from "../../utils/helpers";
interface Order {
  addIngredients: [];
  name: string;
  pizzaId: number;
  quantity: number;
  removeIngredients: [];
  totalPrice: number;
  unitPrice: number;
}

interface OrderItem {
  item: Order;
  isLoadingIngredients: boolean;
  ingredients: [];
}
function OrderItem({ item, isLoadingIngredients, ingredients }: OrderItem) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
