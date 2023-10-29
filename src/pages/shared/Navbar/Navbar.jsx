import { CiSearch } from "react-icons/ci";
import { MdModeNight, MdOutlineWbSunny, MdShoppingBag } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useTheme } from "../../../hooks/useThemeMode";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = ()=> {
      logOut()
      .then()
      .catch(error=> {
        console.log(error);
      })
  }

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>
      </li>
     {user?.email ?  
     <>
      <li>
        <NavLink
          to="/bookings"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Bookings
        </NavLink>
      </li>
     <li>
       <button onClick={handleLogOut}
         to="/"
         className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "active" : ""
         }
       >
         Log Out
       </button>
     </li> 
     </>
     :
       <li>
       <NavLink
         to="/login"
         className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "active" : ""
         }
       >
         Login
       </NavLink>
     </li>
     }
    </>
  );
  const { changeTheme, mode } = useTheme();
  return (
    <>
      <div className="navbar h-28 mb-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="">
            <button className="hover:bg-[#ffe5e0] dark:hover:text-black rounded-md p-3 ">
              <MdShoppingBag className="text-xl" />
            </button>
          </Link>
          <Link to="">
            <button className="hover:bg-[#ffe5e0] dark:hover:text-black rounded-md p-3 ">
              <CiSearch className="text-xl" />
            </button>
          </Link>
          <Link to="">
            <button className="btn btn-outline btn-warning ml-4">
              Appointment
            </button>
          </Link>
          <button
            onClick={changeTheme}
            className="btn btn-circle btn-outline dark:bg-white dark:text-black ml-4  rounded-full"
          >
            {mode === "dark" ? (
              <MdOutlineWbSunny className=" text-lg" />
            ) : (
              <MdModeNight className="text-lg" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
