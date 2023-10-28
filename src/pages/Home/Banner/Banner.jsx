import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[70vh]">
          <img src={banner1} className="w-full rounded-lg" />
          <div className="absolute rounded-lg flex items-center h-full transform top-0 left-0 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-7 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-3">
                <button className="btn btn-warning">Discover More</button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute rounded-lg flex transform right-5 bottom-0 left-5">
            <div className="absolute rounded-lg flex transform gap-x-4 right-14  bottom-14">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[70vh]">
          <img src={banner2} className="w-full rounded-lg" />
          <div className="absolute rounded-lg flex items-center h-full transform top-0 left-0 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-7 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-3">
                <button className="btn btn-warning">Discover More</button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute rounded-lg flex transform gap-x-4 right-14  bottom-14">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[70vh]">
          <img src={banner3} className="w-full rounded-lg" />
          <div className="absolute rounded-lg flex items-center h-full transform top-0 left-0 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-7 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-3">
                <button className="btn btn-warning">Discover More</button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute rounded-lg flex transform gap-x-4 right-14  bottom-14">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[70vh]">
          <img src={banner4} className="w-full rounded-lg" />
          <div className="absolute rounded-lg flex items-center h-full transform top-0 left-0 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-7 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-3">
                <button className="btn btn-warning">Discover More</button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute rounded-lg flex transform gap-x-4 right-14  bottom-14">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
