import "./about.css";
import { Flex, Typography } from "antd";
import flower from "../../assets/images/flower.svg";
import fb from "../../assets/images/fb.svg";
import insta from "../../assets/images/insta.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import SMediaCard from "../../components/sMediaCard";

function About() {
  return (
    <Flex
      vertical
      className="about fullW globalPadding sectionPadding"
      gap={100}
    >
      <Flex justify="space-between" align="center" className="fullW" gap={50}>
        <Flex vertical justify="center" align="start" className="aboutTitle">
          <Typography.Title className="subHeader1 noMP">
            ABOUT ME
          </Typography.Title>
          <Typography.Title className="noMP subHeader2" type="secondary">
            Passionate Creator, Lifelong Learner
          </Typography.Title>
        </Flex>
        <Flex className="divider" justify="center" align="center" gap={30}>
          <div className="dLine"></div>
          <Typography.Text>01</Typography.Text>
        </Flex>
      </Flex>
      <Flex vertical className="fullW" gap={20}>
        <Flex justify="center" gap={20} className="fullW" wrap>
          <Flex
            vertical
            justify="center"
            align="start"
            gap={30}
            className="darkGrayBg cardRadius card1"
          >
            <img src={flower} style={{ height: 135, width: 135 }} />
            <Flex vertical gap={10} justify="center" align="start">
              <Typography.Title className="name noMP">
                Achouri Youcef
              </Typography.Title>
              <Typography.Text className="cardText">
                I am a San francisco-based product designer with a focus on web
                design, illustration, a visual development. I have a diverse
                range of experience having worked across various fields and
                industries.
              </Typography.Text>
            </Flex>
          </Flex>
          <Flex
            vertical
            justify="center"
            align="start"
            className="cardRadius darkGrayBg card2"
          >
            hello
          </Flex>
        </Flex>
        <Flex justify="center" gap={20} wrap>
          <Flex
            vertical
            justify="center"
            align="start"
            gap={30}
            className="cardRadius darkGrayBg card3"
          >
            <Typography.Title className="noMP cardTitle">
              Web Design &cDev
            </Typography.Title>
            <Typography.Text className="cardText">
              Cleanly Designed, Conversion-focused, and build for easy updates
            </Typography.Text>
          </Flex>
          <Flex
            vertical
            justify="center"
            align="start"
            gap={30}
            className="cardRadius darkGrayBg card3"
          >
            <Typography.Title className="noMP cardTitle">
              UX UI Design
            </Typography.Title>
            <Typography.Text className="cardText">
              Seamless web or mobile app design to wow your users.
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex justify="center" gap={20}>
          <Flex
            vertical
            justify="center"
            align="center"
            gap={20}
            className="cardRadius darkGrayBg card6"
          >
            <Typography.Title>BE YOURSELF</Typography.Title>
            <Typography.Title>BE DIFFERENT!</Typography.Title>
            <Typography.Title>BUILD DIFFERENT!</Typography.Title>
          </Flex>
          <Flex justify="center" align="center" gap={20} wrap>
            <SMediaCard name="Dribbble" icon={fb} />
            <SMediaCard name="Dribbble" icon={insta} />
            <SMediaCard name="Dribbble" icon={linkedin} />
            <SMediaCard name="Dribbble" icon={whatsapp} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
