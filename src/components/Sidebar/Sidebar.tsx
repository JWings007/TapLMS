import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const pathname = useLocation();
  const navigate = useNavigate();

  return (
    <motion.div
      className={`h-screen fixed py-8 px-5 flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <img src={logo} alt="Logo" className="w-10" />
      </div>
      <div className="w-full">
        <ul className="flex flex-col items-start gap-5">
          {[
            { icon: "fi fi-rr-house-chimney", path: "/" },
            { icon: "fi fi-rr-book-alt", path: "/learn" },
            {
              icon: "fi fi-rr-high-five-celebration-yes",
              path: "/friends",
            },
            { icon: "fi fi-rr-phone-call", path: "/contact" },
          ].map(({ icon, path }, index) => (
            <li key={index} className="w-full">
              <button
                className={`w-full flex justify-center items-center ${
                  path === pathname.pathname
                    ? "bg-black text-white"
                    : "bg-white"
                } p-4 rounded-full cursor-pointer`}
                onClick={() => navigate(path)}
              >
                <span>
                  <i
                    className={`${icon} flex items-center justify-center text-base`}
                  ></i>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`flex items-center justify-center bg-red-200 p-3 rounded-full`}
      >
        <span>
          <i className="fi fi-rr-power text-xl flex items-center justify-center"></i>
        </span>
      </button>
    </motion.div>
  );
}

export default Sidebar;
