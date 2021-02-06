// Styling
import { DeleteButtonStyled } from "../../styles";
import { deleteProduct } from "../../store/actions";
import { useDispatch } from "react-redux";

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled>
      <button
        type="submit"
        class="btn btn-outline-danger"
        onClick={() => dispatch(deleteProduct(props.productId))}
      >
        Delete
      </button>
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
