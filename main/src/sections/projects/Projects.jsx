import { Flex, Typography } from "antd";
import "./projects.css";
import Project from "../../components/Project";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import p6 from "../../assets/images/p6.png";
import left from "../../assets/images/CaretLeft.svg";
import right from "../../assets/images/CaretRight.svg";
import { useState, useRef, useEffect } from "react";

function Projects() {
  const [translate, setTranslate] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    const offset = myRef.current.getBoundingClientRect().width * 0.7 * 0.5 + 15;
    console.log(offset);
    setTranslate(offset);
  }, []);

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
            MY PROJECTS
          </Typography.Title>
          <Typography.Title className="noMP subHeader2" type="secondary">
            Check my projects below
          </Typography.Title>
        </Flex>
        <Flex className="divider" justify="center" align="center" gap={30}>
          <div className="dLine"></div>
          <Typography.Text className="tShadow">03</Typography.Text>
        </Flex>
      </Flex>
      <div className="pSh pSh1"></div>
      <div className="pSh pSh2"></div>
      <Flex
        justify="center"
        gap={30}
        className="fullW projects"
        id="projects"
        style={{ transform: `translateX(${translate}px)` }}
        ref={myRef}
      >
        <Project img={p1} name={"Sofi"} number={1} />
        <Project img={p2} name={"Tampe"} number={2} />
        <Project img={p3} name={"Tampe"} number={3} />
        <Project img={p4} name={"Tampe"} number={4} />
        <Project img={p5} name={"Tampe"} number={5} />
        <Project img={p6} name={"Tampe"} number={6} />
      </Flex>
      <Flex justify="end" align="center" gap={30}>
        <img
          src={left}
          className="pArrow"
          onClick={() => {
            if (
              translate >=
              myRef.current.getBoundingClientRect().width * 0.7 * 2 + 30
            )
              return;
            else
              setTranslate(
                translate +
                  myRef.current.getBoundingClientRect().width * 0.7 +
                  30
              );
          }}
        />
        <img
          src={right}
          className="pArrow"
          onClick={() => {
            if (
              translate <=
              -myRef.current.getBoundingClientRect().width * 0.7 * 2 - 30
            )
              return;
            else
              setTranslate(
                translate -
                  myRef.current.getBoundingClientRect().width * 0.7 -
                  30
              );
          }}
        />
      </Flex>
    </Flex>
  );
}

export default Projects;
