import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
    const {user} = useContext(AuthContext)
  const services = useLoaderData();
  const { _id, title, price, img } = services || {};
      
  const handleBookService = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        email, 
        img,
        date,
        services, title,
        services_id: _id,
        price: price,
    }
    console.log(booking);
    fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(booking)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire(
              'Good job!',
              'Service booking Successfully!',
              'success'
            )
        }
    })
  }

  return (
    <>
     
 
     
        <div className="">
        <h2 className="text-center text-4xl font-medium">Book Services: {title} </h2>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shadow-2xl bg-base-100">
              <form onSubmit={handleBookService} className="card-body space-y-6">
                <div className="flex gap-4">
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bbookinged"
                      required
                    />
                  </div>
                  <div className="form-control  w-full">
                    <input
                      type="date"
                      name="date"
                      className="input input-bbookinged"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bbookinged"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Due Amount"
                      defaultValue={'$'+ price}
                      className="input input-bbookinged"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <textarea
                    className="textarea textarea-warning"
                    placeholder="Your Message"
                    type="text"
                    name="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="booking Confirm" className="btn btn-block btn-warning" />
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default CheckOut;
