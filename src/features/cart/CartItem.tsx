import { formatCurrency } from "../../utils/helpers";
type ItemsProps = {
  item: {
    pizzaId: string;
    name: string;
    quantity: number;
    totalPrice: number;
  };
};

function CartItem({ item }: ItemsProps) {
  const { pizzaId, name, quantity, totalPrice } = item;

  console.log(pizzaId);
  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
