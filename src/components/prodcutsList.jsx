import React from "react";

const ProductsList = (props) => {
  const onClickDelete = (productId) => {
    const newProductsList = [...props.products];
    const prodIndex = newProductsList.findIndex(
      (prod) => prod.id === productId
    );
    newProductsList.splice(prodIndex, 1);
    props.setProducts(newProductsList);
  };

  const onClickProd = (product) => {
    props.setSelectedProduct(product);
    props.setViewProduct(true);
  };

  return (
    <div className="productSContainer">
      {props.products.map((product, index) => {
        return (
          <div
            className="productContainer"
            key={index}
            onClick={() => onClickProd(product)}
          >
            <div className="productImage">
              {/* <img src="https://lallahoriye.com.tirzee.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg"></img> */}
            </div>
            <div className="productDetails">
              <div>{product.name}</div>
              <div>{product.description}</div>
            </div>
            <button
              className="button delete"
              onClick={() => onClickDelete(product.id)}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsList;
