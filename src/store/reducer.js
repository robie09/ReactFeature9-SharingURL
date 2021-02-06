import slugify from "slugify";
import ProductsData from "../products";

const initialState = {
  products: ProductsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      const slug = slugify(action.payload.newProduct.name, { lower: true });
      action.payload.newProduct.id = slug;
      action.payload.newProduct.id =
        state.products[state.products.length] - (1).id + 1;
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };

    //break;
    case "DELETE_PRODUCT":
      const UndeletedProduct = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: UndeletedProduct,
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) => {
          if (action.payload.updatedProduct.id === product.id)
            return action.payload.updatedProduct;
          else return product;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
