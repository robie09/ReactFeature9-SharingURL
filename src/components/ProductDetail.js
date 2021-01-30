// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
//import products from "../styles";
import { useParams, Redirect } from "react-router-dom";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );
  if (!product) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <p onClick={() => props.setProducts(null)}>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton product={product} deleteProduct={props.deleteProduct} />
    </DetailWrapper>
  );
};

export default ProductDetail;
