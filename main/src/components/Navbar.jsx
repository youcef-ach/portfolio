import { Flex, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Typography } from "antd";
import logo from "../assets/images/logo.png";
import "./navbar.css";

const { Text } = Typography;

const navItems = [
  {
    key: "Home",
    label: <a href="#home">Home</a>,
  },
  {
    key: "About",
    label: <a href="#about">About</a>,
  },
  {
    key: "Projects",
    label: <a href="#projects">Projects</a>,
  },
  {
    key: "Testimonials",
    label: <a href="#testimonials">Testimonials</a>,
  },
  {
    key: "Contact",
    label: <a href="#contact">Contact</a>,
  },
];

function Navbar() {
  return (
    <>
      <div className="headerShadow"></div>
      <Header className="header fullW">
        <Flex
          justify="space-between"
          align="center"
          className="fullW"
          style={{ overflow: "hidden" }}
          gap={300}
        >
          <div className="headerLogoContainer">
            <img src={logo} alt="logo" className="headerLogo" />
          </div>
          <Menu
            className="headerMenu"
            items={navItems}
            mode="horizontal"
          ></Menu>
        </Flex>
      </Header>
    </>
  );
}

export default Navbar;
