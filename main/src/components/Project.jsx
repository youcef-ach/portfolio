import { Flex, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function Project({ img, name, number,link }) {
  return (
    <div className="project">
      <img src={img} className="projectMainImage" />
      <Flex className="pBottom fullW" justify="space-between" align="center">
        <Typography.Title className="header2 noMP">
          {number}. {name}
        </Typography.Title>
        <Flex
          style={{ cursor: "pointer" }}
          justify="center"
          align="center"
          gap={20}
        >
          <Typography.Title className="header2 noMP">
            <a href={'https://'+link} style={{color:"white"}} target="blank">
              Preview Project
            </a>
          </Typography.Title>
          <ArrowRightOutlined className="header2" />
        </Flex>
      </Flex>
    </div>
  );
}

export default Project;