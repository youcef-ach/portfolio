import { ConfigProvider, Layout, theme, Flex } from "antd";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/hero/hero";
import About from "./sections/about/About";
import TechStack from "./sections/techStack/techStack";
import "./index.css";
import Projects from "./sections/projects/Projects";
import Testimonials from "./sections/testimonials/Testimonials";
import Contact from "./sections/contact/Contact";

const { Content } = Layout;

function App() {
  const [dark, setDark] = useState(true);

  return (
    <ConfigProvider
      theme={{
        algorithm: [theme.darkAlgorithm],
        token: {
          colorBgBase: dark ? "#0B0620" : "#fff",
          colorTextBase: "#fff",
          colorPrimary: "#fff",
          colorBgContainer: "#17151f",
          colorBorder: "transparent",
          borderRadius: 20,
        },
        components: {
          Layout: {
            headerBg: "transparent",
          },
        }
      }}
    >
      <Layout>
        <Navbar />
        <Content>
          <Flex
            vertical
            justify="center"
            align="center"
            className="fullW globalFlexContainer"
          >
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Testimonials />
            <Contact />
          </Flex>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
