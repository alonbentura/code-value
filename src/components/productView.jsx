import React, { useState } from "react";

const ProductView = (props) => {
  const [newProduct, setNewProduct] = useState({});

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickSave = () => {
    // const id = props.prodcuts.length + 1;
    const createAt = new Date();
    const newProductsList = [...props.products];
    const newProductToAdd = {
      ...newProduct,
      // id,
      createAt,
    };
    newProductsList.push(newProductToAdd);
    props.setProducts(newProductsList);
  };

  return (
    <div className="productView">
      <div>
        <img />
      </div>
      <div>
        <div>Name</div>
        <input
          name="name"
          maxLength="30"
          placeholder={props.selectedProduct.name}
          onChange={onChange}
        />
      </div>
      <div>
        <div>Description</div>
        <input
          name="description"
          maxLength="200"
          defaultValue={props.selectedProduct.description}
          onChange={onChange}
        />
      </div>
      <div>
        <div>Price</div>
        <input
          name="price"
          type="number"
          placeholder={props.selectedProduct.price}
          onChange={onChange}
        />
      </div>
      <button className="button save" onClick={() => onClickSave()}>
        save
      </button>
    </div>
  );
};
export default ProductView;
