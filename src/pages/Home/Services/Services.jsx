import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <>
      <div className="my-20">
        <div className="w-1/2 mx-auto">
          <h4 className="text-[#FF3811] font-bold text-2xl text-center">
            Service
          </h4>
          <h2 className="text-5xl font-bold mt-4 text-center">
            Our Service Area
          </h2>
          <p className="text-center py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            error ullam illum, officia mollitia facere modi tenetur aperiam cum,
            numquam odit autem ratione dolores nostrum. Ex vero quas
            exercitationem optio?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="btn btn-outline btn-warning">
           More Services
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
