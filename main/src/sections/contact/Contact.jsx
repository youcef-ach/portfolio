import { Button, Flex, Form, Input, Typography } from "antd";
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
      <Flex justify="center" align="center" gap={30} wrap>
        <Form className="fullW cForm" layout="vertical">
          <Form.Item label="Name">
            <Input type="text" placeholder="Name"></Input>
          </Form.Item>
          <Form.Item label="Email address">
            <Input type="email" placeholder="Email address"></Input>
          </Form.Item>
          <Form.Item label="Subject">
            <Input type="text" placeholder="Subject"></Input>
          </Form.Item>
          <Form.Item label="Message">
            <Input.TextArea placeholder="Message" rows={8}></Input.TextArea>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              style={{
                backgroundColor: "#598EFF",
                fontWeight: 500,
                fontSize: 23,
                lineHeight: "100%",
                letterSpacing: 0.85,
                borderRadius: 5,
                height: 60,
              }}
              block
            >
              submit
            </Button>
          </Form.Item>
        </Form>
        <div className="model"></div>
      </Flex>
    </Flex>
  );
}

export default Testimonials;
