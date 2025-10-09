import { Flex, Form, Input, Typography } from "antd";
import "./contact.css";

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
            CONTACT ME
          </Typography.Title>
          <Typography.Title className="noMP subHeader2" type="secondary">
            Let's collaborate on tailored, sustainable solutions.
          </Typography.Title>
        </Flex>
        <Flex className="divider" justify="center" align="center" gap={30}>
          <div className="dLine"></div>
          <Typography.Text className="tShadow">05</Typography.Text>
        </Flex>
      </Flex>
      <Flex justify="center" align="center">
        <Form className="fullW" variant="">
          <Form.Item>
            <Input type="text" placeholder="type your message here"></Input>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
}

export default Testimonials;
