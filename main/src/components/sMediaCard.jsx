import { Flex, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";

function sMediaCard({ name, icon, href }) {
  const card = (
    <Flex justify="space-between" align="center" className="card5 darkGrayBg cardRadius" style={{ width: "100%" }}>
      <Flex justify="center" align="center" gap={15}>
        <img src={icon} className="sMediaImg" alt="" />
        <Typography.Title className="cardTitle noMP tShadow">{name}</Typography.Title>
      </Flex>
      <RightOutlined />
    </Flex>
  );
  if (href) {
    const ext = href.startsWith("http");
    return (
      <a
        href={href}
        target={ext ? "_blank" : undefined}
        rel={ext ? "noreferrer" : undefined}
        style={{ display: "contents", color: "inherit", textDecoration: "none" }}
      >
        {card}
      </a>
    );
  }
  return card;
}

export default sMediaCard;
