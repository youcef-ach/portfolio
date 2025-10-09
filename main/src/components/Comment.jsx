import { Flex, Typography } from "antd";
import quote from "../assets/images/quote.png";

function Comment({ client }) {
  return (
    <Flex vertical className="comment darkGrayBg cardRadius" justify="space-between" gap={70}>
      <Flex vertical justify="center" align="stretch" gap={30}>
        <Flex justify="space-between" align="center">
          <img src={client} className="client" />
          <img src={quote} className="quote" />
        </Flex>
        <Typography.Text className="cardText cText" style={{ color: "#a7a7a7" }}>
          David Jhon turned our vision into a stunning, functional platform that
          our customers love. Their creativity and technical expertise truly set
          them apart.
        </Typography.Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Flex vertical align="start" gap={5}>
          <Typography.Text className="cardTitle cName" style={{ color: "#598EFF" }}>
            John Miller
          </Typography.Text>
          <Typography.Text className="cardText" style={{ color: "#a7a7a7" }}>
            Founder of ModernEdge Solutions
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Comment;
