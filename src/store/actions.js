export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: { productId: productId },
  };
};

const CREATE_PRODUCT = "CREATE_PRODUCT";

export const addproduct = (newProduct) => {
  return {
    type: CREATE_PRODUCT,
    payload: { newProduct },
  };
};

const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const updateProduct = (updateProduct) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { updateProduct: updateProduct },
  };
};
