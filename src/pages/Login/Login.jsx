import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import login from "../../assets/images/login/login.svg";

const Login = () => {
  const {signIn} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email, password}
    console.log(user);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error=> {
      console.error(error.message);
    })
   
  };
  return (
    <>
      <div className="hero my-24">
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <div className="w-1/2 mt-8">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-zinc-700 ">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover dark:text-white">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#FF3811] hover:bg-[#e35c41]">
                  Login
                </button>
              </div>
            </form>
            <div className="px-4 mx-auto text-center space-y-4 pb-8">
              <p>Or Sign In With</p>
              <div className="flex justify-center gap-3 items-center">
                <p>Github</p>
                <p>Google</p>
                <p>Twitter</p>
              </div>
              <p>
                New to Car Doctors?
                <Link to="/signup">
                  <span className="text-[#FF3811] font-semibold"> Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
