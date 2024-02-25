export default interface CartIterface {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  addIngredients?:[];
  removeIngredients?:[];
}
