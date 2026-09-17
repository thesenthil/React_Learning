import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Categories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const menProducts = products.filter(
    (product) => product.category === "men's clothing"
  );

  const womenProducts = products.filter(
    (product) => product.category === "women's clothing"
  );

  return (
    <div className="px-10 lg:px-24 py-20 bg-[#f7f8f0]">
      <div className="text-center">
        <p className="text-sm tracking-[0.25em] text-[#707b45]">
          SHOP BY CATEGORY
        </p>

        <h1 className="mt-4 text-5xl font-medium text-[#292d20]">
          Categories
        </h1>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-medium text-[#292d20]">
          Men
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {menProducts.map((product) => (
            <Card
              key={product.id}
              name={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-medium text-[#292d20]">
          Women
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {womenProducts.map((product) => (
            <Card
              key={product.id}
              name={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Categories;