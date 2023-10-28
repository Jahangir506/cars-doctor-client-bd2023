import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service || {};
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="w-full h-[28vh]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-xl text-orange-500">Price: {price}</p>
            <button className="btn btn-circle">
              <BsArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
