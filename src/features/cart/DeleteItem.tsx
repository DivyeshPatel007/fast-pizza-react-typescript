import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';

import CartIterface from '../../interface/cartInterface';
import { deleteItem } from './cartSlice';



function DeleteItem({ pizzaId }:Pick<CartIterface,'pizzaId'>) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
