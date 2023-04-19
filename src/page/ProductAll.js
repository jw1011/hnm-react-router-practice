import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const [productList, setProductList] = useState([]);
const ProductAll = () => {
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
