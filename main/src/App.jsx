import { ConfigProvider, Layout, theme, Flex } from "antd";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/hero/hero";
import About from "./sections/about/About";
import "./index.css";

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
          colorPrimary: "#598EFF",
        },
        components: {
          Layout: {
            headerBg: "transparent",
          },
        },
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
          </Flex>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
