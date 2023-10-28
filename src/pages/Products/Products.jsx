import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])
  return (
    <>
      <div className="my-20">
        <div className="w-1/2 mx-auto">
          <h4 className="text-[#FF3811] font-bold text-2xl text-center">
            Popular Products
          </h4>
          <h2 className="text-5xl font-bold mt-4 text-center">
            Browse Our Product
          </h2>
          <p className="text-center py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            error ullam illum, officia mollitia facere modi tenetur aperiam cum,
            numquam odit autem ratione dolores nostrum. Ex vero quas
            exercitationem optio?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-10">
        {products.map((product) => (
            <ProductCard key={product => product._id} product={product}></ProductCard>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="btn btn-outline btn-warning">More Products</button>
        </div>
      </div>
    </>
  );
};

export default Products;
