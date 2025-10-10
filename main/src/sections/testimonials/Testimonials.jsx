import { Flex, Typography } from "antd";
import "./testimonials.css";
import Comment from "../../components/Comment";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import client4 from "../../assets/images/client4.png";

function Testimonials() {
  return (
    <Flex
      vertical
      className="projectsCont fullW globalPadding sectionPadding"
      id="about"
      gap={100}
    >
      <Flex
        justify="space-between"
        align="center"
        className="fullW"
        gap={50}
        style={{ position: "relative", zIndex: 10 }}
      >
        <Flex
          vertical
          justify="center"
          align="start"
          className="aboutTitle"
          gap={20}
        >
          <Typography.Title className="subHeader1 noMP tShadow">
            TESTIMONIALS
          </Typography.Title>
          <Typography.Title className="noMP subHeader2" type="secondary">
            What our clients say about us
          </Typography.Title>
        </Flex>
        <Flex className="divider" justify="center" align="center" gap={30}>
          <div className="dLine"></div>
          <Typography.Text className="tShadow">04</Typography.Text>
        </Flex>
      </Flex>
      <Flex justify="center" align="start" gap={20} wrap>
        <Flex vertical className="vFlex" gap={20}>
          <Comment client={client3} />
          <Comment client={client4} />
        </Flex>
        <Flex vertical className="vFlex" gap={20} style={{marginTop: 50}}>
          <Comment client={client1} />
          <Comment client={client2} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Testimonials;
