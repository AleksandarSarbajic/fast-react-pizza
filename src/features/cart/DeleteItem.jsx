import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
