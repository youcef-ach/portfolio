import { Flex, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";

function sMediaCard({ name, icon }) {
  return (
    <Flex justify="space-between" align="center" className="card5 darkGrayBg cardRadius">
      <Flex justify="cenetr" align="center" gap={15}>
        <img src={icon} className="sMediaImg" />
        <Typography.Title className="cardTitle noMP tShadow">{name}</Typography.Title>
      </Flex>
      <RightOutlined />
    </Flex>
  );
}

export default sMediaCard;
