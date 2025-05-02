import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("fetching products");
    setProducts(["Clothing", "Household"]);
  }, []); //add ,[] to make useEffect only run once on initial render

  return <div>ProductList</div>;
};

export default ProductList;
