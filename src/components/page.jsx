import React, { useState } from "react";
import TopBar from "./topBar";
import ActionBar from "./actionBar";
import ProductsList from "./prodcutsList";
import ProductView from "./productView";

const demoProducts = [
  {
    id: 1,
    name: "bla",
    description: "this is the description1",
    price: 1000,
    dateCreated: "11/8/2020",
  },
  {
    id: 2,
    name: "product 2",
    description: "this is the description2",
    price: 36000,
    dateCreated: "15/10/2020",
  },
  {
    id: 3,
    name: "product 3",
    description: "this is the description3",
    price: 500,
    dateCreated: "11/10/2020",
  },
  {
    id: 4,
    name: "product 4",
    description: "this is the description4",
    price: 100,
    dateCreated: "2/4/1998",
  },
];

const Page = () => {
  const [products, setProducts] = useState(demoProducts);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [viewProduct, setViewProduct] = useState(false);
  const [fillterdProds, setFillterdProds] = useState([]);

  const searchProduct = (value) => {
    const productsearch = value;
    const search = products.filter((product) => product.name === productsearch);
    if (search.length > 0) {
      setFillterdProds(search);
    }
    if (value.length === 0) {
      setFillterdProds(products);
    }
  };

  return (
    <div>
      <TopBar />
      <div style={{ padding: 20 }}>
        <ActionBar
          setViewProduct={setViewProduct}
          searchProduct={searchProduct}
        />
        <div className="container">
          <ProductsList
            products={fillterdProds.length === 0 ? products : fillterdProds}
            setSelectedProduct={setSelectedProduct}
            setProducts={setProducts}
            setViewProduct={setViewProduct}
          />
          {viewProduct && (
            <ProductView
              products={products}
              setProducts={setProducts}
              selectedProduct={selectedProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
