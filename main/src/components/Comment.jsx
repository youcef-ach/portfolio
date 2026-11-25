import { Flex, Typography } from "antd";
import quote from "../assets/images/quote.png";

function Comment({ badge, title, subtitle, detail }) {
  return (
    <Flex vertical className="comment darkGrayBg cardRadius" justify="space-between" gap={40}>
      <Flex vertical justify="center" align="stretch" gap={20}>
        <Flex justify="space-between" align="center">
          <Typography.Text className="cardText" style={{ color: "#598EFF", fontWeight: 600 }}>
            {badge}
          </Typography.Text>
          <img src={quote} className="quote" alt="" />
        </Flex>
        <Typography.Text className="cardText cText" style={{ color: "#d4d4dc" }}>
          {detail}
        </Typography.Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Flex vertical align="start" gap={5}>
          <Typography.Title level={4} className="cardTitle cName noMP" style={{ color: "#598EFF" }}>
            {title}
          </Typography.Title>
          <Typography.Text className="cardText" style={{ color: "#a7a7a7" }}>
            {subtitle}
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Comment;
