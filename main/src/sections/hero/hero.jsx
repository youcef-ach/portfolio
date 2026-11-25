import "./hero.css";
import { Flex, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import shape from "../../assets/images/shape.svg";
import Gradients from "../../components/gradients";

const { Text, Title } = Typography;

function hero() {
  return (
    <Flex
      className="heroContainer fullW"
      vertical
      justify="space-between"
      align="center"
    >
      <div className="heroBottomShadow"></div>
      <Gradients class0="gradient" class1="gradient1" class2="gradient2" />
      <div className="topFlex globalRL">
        <Text className="noMP header2">ESI-SBA · AI &amp; 3D Web Archive</Text>
        <Title className="noMP header1">ACHOURI YOUCEF ISLEM</Title>
      </div>
      <Flex className="bottomFlex globalRL" justify="space-between" align="end">
        <div style={{ textAlign: "center" }}>
          <Text
            className="text"
            style={{ paddingBottom: 19, display: "block" }}
          >
            Explore
          </Text>
          <p>
            <DownOutlined className="text" />
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <img src={shape} />
          <Title className="header1 noMP">DEVELOPER</Title>
        </div>
      </Flex>
    </Flex>
  );
}

export default hero;
