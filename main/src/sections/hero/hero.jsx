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
      <Gradients />
      <div className="topFlex globalRL">
        <Text className="noMP hey">
          👋 Hey, I&apos;m Here
        </Text>
        <Title className="noMP fullName">ACHOURI YOUCEF ISLEM</Title>
      </div>
      <Flex className="bottomFlex globalRL" justify="space-between" align="end">
        <div style={{ textAlign: "center" }}>
          <Text
            className="explore"
            style={{ paddingBottom: 19, display: "block" }}
          >
            Explore
          </Text>
          <p>
            <DownOutlined className="explore" />
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <img src={shape} />
          <Title className="fullName noMP">DEVELOPER</Title>
        </div>
      </Flex>
    </Flex>
  );
}

export default hero;
