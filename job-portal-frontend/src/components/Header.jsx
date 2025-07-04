import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logoutAPI from "../services/logoutAPI";
const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      const response = await logoutAPI();
      if (!response) {
        console.log("Error in logout API");
      }
      navigate("/auth/login");
    } catch (err) {
      console.log("Error in logout API");
    }
  };
  const role = useSelector((store) => store.user.isAdmin);
  console.log("role is ", role);

  return (
    <header className="py-5">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img className="cursor-pointer" src={logo} alt="logo icon" />
        </Link>

        <ul className="flex gap-x-7 text-[10px] font-normal">
          {role && (
            <>
              <li className="text-white text-base font-medium hover:text-[#309689]">
                <Link to="/company-dashboard">Company Dashboard</Link>
              </li>
              <li className="text-white text-base font-medium hover:text-[#309689]">
                <Link to="/register-your-company">Register Company</Link>
              </li>
              <li className="text-white text-base font-medium hover:text-[#309689]">
                <Link to="/post-job">Post a Job</Link>
              </li>
            </>
          )}
          {!role && (
            <>
              <li className="text-white text-base font-medium hover:text-[#309689]">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white text-base font-medium hover:text-[#309689]">
                <Link to="/jobs">Jobs</Link>
              </li>
            </>
          )}
          <li className="text-white text-base font-medium hover:text-[#309689]">
            <Link to="/about-us">About Us</Link>
          </li>

          <li className="text-white text-base font-medium hover:text-[#309689]">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div>
          {!token ? (
            <>
              <Link to="/login" className="text-white text-base font-medium">
                Login
              </Link>
              <Link
                to="/register"
                className="py-3 px-5 inline-block bg-[#309689] rounded-lg text-white text-base font-medium ml-10"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="py-3 px-4 inline-block bg-[#309689] rounded-lg text-white text-base font-medium"
              >
                Logout
              </button>
              <Link
                to="/create-profile"
                className="py-3 px-4 inline-block bg-[#309689] rounded-lg text-white text-base font-medium ml-5"
              >
                Create Profile
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
