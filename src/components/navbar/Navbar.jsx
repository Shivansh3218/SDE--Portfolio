import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHub from "@mui/icons-material/GitHub";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dev Sama Portfolio
        </motion.span>
        <div className="social">
          <a href="https://github.com/Shivansh3218">
            <GitHub />
          </a>
          <a href="https://www.youtube.com/channel/UCicc2cwf78L6WXLB-BZ2hjg">
            <YouTubeIcon />
          </a>
          <a href="https://www.instagram.com/shivayy_29/">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/shivansh-rawat-78aa421b5/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
