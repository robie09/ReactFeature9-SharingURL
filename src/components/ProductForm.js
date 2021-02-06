import { useState } from "react";
import { addproduct, updateProduct } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../products";

const ProductForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productSlug } = useParams();
  const foundProduct = useSelector((state) =>
    state.products.find((product) => product.slug === productSlug)
  );
  const [product, setProduct] = useState(
    foundProduct
      ? foundProduct
      : {
          name: "",
          description: "",
          price: "",
          image: "",
        }
  );

  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  const resetForm = () =>
    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (foundProduct) dispatch(updateProduct(product));
    else dispatch(addproduct(product));

    history.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{foundProduct ? "Update" : "Create"} Product</h1>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info ">Name</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Description</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Price</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Image</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        {foundProduct ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ProductForm;
