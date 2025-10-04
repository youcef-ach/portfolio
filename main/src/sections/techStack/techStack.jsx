import { Flex, Typography } from "antd";
import SkillCard from "../../components/skillCard";
import js from "../../assets/images/js.svg";
import react from "../../assets/images/react.svg";
import ts from "../../assets/images/ts.svg";
import aws from "../../assets/images/aws.svg";
import css from "../../assets/images/css.svg";
import figma from "../../assets/images/figma.svg";
import github from "../../assets/images/github.svg";
import gsap from "../../assets/images/gsap.svg";
import html from "../../assets/images/html.svg";
import three from "../../assets/images/threejs.svg";
import "./techStack.css";
import { useGSAP } from "@gsap/react";

function techStack() {
  return (
    <Flex
      vertical
      className="tech fullW globalPadding sectionPadding"
      gap={100}
    >
      <Flex
        justify="space-between"
        align="center"
        className="fullW"
        gap={50}
        style={{ position: "relative", zIndex: 10 }}
      >
        <Flex vertical justify="center" align="start" className="aboutTitle" gap={20}>
          <Typography.Title className="subHeader1 noMP tShadow">
            TECH STACK
          </Typography.Title>
          <Typography.Title className="noMP subHeader2" type="secondary">
            My Go-To Tools for Crafting Solutions
          </Typography.Title>
        </Flex>
        <Flex className="divider" justify="center" align="center" gap={30}>
          <div className="dLine"></div>
          <Typography.Text className="tShadow">02</Typography.Text>
        </Flex>
      </Flex>
      <div className="shadow1"></div>
      <div className="shadow2"></div>
      <Flex className="slider fullW" justify="start" align="center" gap={60}>
        <Flex justify="center" align="center" className="slider2" gap={60}>
          <SkillCard logo={js} />
          <SkillCard logo={react} />
          <SkillCard logo={ts} />
          <SkillCard logo={html} />
          <SkillCard logo={css} />
          <SkillCard logo={three} />
          <SkillCard logo={github} />
          <SkillCard logo={aws} />
          <SkillCard logo={figma} />
          <SkillCard logo={gsap} />
        </Flex>
        <Flex justify="center" align="center" className="slider1" gap={60}>
          <SkillCard logo={js} />
          <SkillCard logo={react} />
          <SkillCard logo={ts} />
          <SkillCard logo={html} />
          <SkillCard logo={css} />
          <SkillCard logo={three} />
          <SkillCard logo={github} />
          <SkillCard logo={aws} />
          <SkillCard logo={figma} />
          <SkillCard logo={gsap} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default techStack;