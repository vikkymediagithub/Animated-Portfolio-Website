// import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

// Importing images dynamically
import instagramIcon from "/src/assets/instagram.png";
import facebookIcon from "/src/assets/facebook.png";
import dribbbleIcon from "/src/assets/dribbble.png";
import youtubeIcon from "/src/assets/youtube.png";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        {/* Animated Logo */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          Vikkymedia
        </motion.span>

        {/* Social Media Icons */}
        <div className="social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <img src={dribbbleIcon} alt="Dribbble" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
