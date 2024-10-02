import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to={"/"}
        className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transform transition duration-300 hover:scale-105'
      >
        <p className='blue-gradient_text '>JP</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-blue-400 " : "text-black "
          }
        >
          <p className='transform transition duration-300 hover:scale-105'>
            About
          </p>
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-black"
          }
        >
          <p className='transform transition duration-300 hover:scale-105'>
            Projects
          </p>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-black"
          }
        >
          <p className='transform transition duration-300 hover:scale-105'>
            Contact
          </p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
