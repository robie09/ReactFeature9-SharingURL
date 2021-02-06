import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

import { useSelector } from "react-redux";

import AddButton from "./buttons/AddButton";
import { BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductList = ({ deleteProduct }) => {
  const products = useSelector((state) => state.products);
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Link to="products/new">
        <BiAddToQueue className="float-right" size="3em" />
      </Link>
      <ListWrapper>{productList}</ListWrapper>
      <AddButton /> <br />
    </div>
  );
};

export default ProductList;
