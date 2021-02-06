// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`products/${product.slug}`}>
        <img
          alt={product.name}
          src={product.image}
          // onClick={() => props.selectProduct(product.id)}
        />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton productId={product.id} />
      <UpdateButton slug={product.slug} />
    </ProductWrapper>
  );
};

export default ProductItem;
