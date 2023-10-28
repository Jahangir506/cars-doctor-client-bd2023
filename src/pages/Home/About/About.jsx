import aboutImg2 from "../../../assets/images/about_us/parts.jpg";
import aboutImg from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <>
      <div className="hero mt-24 mb-40">
        <div className="hero-content gap-16 flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src={aboutImg}
              alt=""
              className="w-3/4 h-[50vh] rounded-lg shadow-2xl"
            />
            <img
              src={aboutImg2}
              alt=""
              className="w-1/2 h-[35vh] absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
            />
          </div>
          <div className=" lg:w-1/3 space-y-5">
            <h4 className="text-[#FF3811] font-bold text-2xl">About Us</h4>
            <h2 className="text-5xl font-bold mt-4">
              We are qualified & of experience in this field
            </h2>
            <p className="py-4 opacity-75">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="pb-4 opacity-75">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
