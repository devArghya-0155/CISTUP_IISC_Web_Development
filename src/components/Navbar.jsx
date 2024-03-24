// About
// Media News Purchase
// Social Media Contact Us
import { Link } from "react-scroll";
import { Stack } from "@mui/material";

// import Logo from "../assets/Logo.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"0"}
      className={styles.navbar}
    >
      <Link smooth duration={750} spy to="main">
        {/* <img src={Logo} style={{ height: "40px" }} /> */}
        <button className={styles.navLogo}>
          <div>
            C<i>i</i>STUP
          </div>
          {/* <div>IISc BANGALORE</div> */}
        </button>
      </Link>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"32px"}
        className={styles.navItems}
      >
        <Link smooth duration={750} spy to="about">
          <button>About</button>
        </Link>
        <Link smooth duration={750} spy to="upload">
          <button>Upload</button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
