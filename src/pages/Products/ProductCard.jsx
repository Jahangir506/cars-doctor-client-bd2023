
const ProductCard = ({ product }) => {
  
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img  alt="Shoes" className="w-full h-[25vh]" />
        </figure>
        <div className="card-body  items-center">
          <h2 className="card-title">gdfgdgfdg</h2>
          <p className=" text-orange-500">Price: </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
