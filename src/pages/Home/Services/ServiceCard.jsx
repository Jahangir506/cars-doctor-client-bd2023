import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service || {};
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
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-circle">
                <BsArrowRight className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
