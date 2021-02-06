import { Link } from "react-router-dom";

const UpdateButton = ({ slug }) => {
  return (
    // {`/products/${props.productSlug}/edit`}
    <Link to={`/products/${slug}/edit`}>
      <button type="submit" class="btn btn-outline-success">
        Update{" "}
      </button>
    </Link>
  );
};

export default UpdateButton;
