import "./about.css";
import { Flex, Typography } from "antd";
import flower from "../../assets/images/flower.svg";
import fb from "../../assets/images/fb.svg";
import insta from "../../assets/images/insta.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import SMediaCard from "../../components/sMediaCard";
import Gradients from "../../components/gradients";
import { Canvas } from "@react-three/fiber";
import Alien from "../../components/models/Cute1";
import { OrbitControls, Scroll } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from(".animateCard", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });
    gsap.from(".animateText", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });
  }, []);

  return (
    <Flex
      vertical
      className="about fullW globalPadding sectionPadding"
      id="about"
      gap={100}
    >
      <Gradients
        class0="aboutGradient"
        class1={"aboutGradient1"}
        class2={"aboutGradient2"}
      />
      <Flex
        justify="space-between"
        align="center"
        className="fullW"
        gap={50}
        style={{ position: "relative", zIndex: 10 }}
      >
        <Flex vertical justify="center" align="start" className="aboutTitle" gap={20}>
          <Typography.Title className="subHeader1 noMP tShadow">
            ABOUT ME
          </Typography.Title>
          <Typography.Title className="noMP subHeader2" type="secondary">
            Spatial AI, 3D Vision &amp; Full-Stack Systems
          </Typography.Title>
        </Flex>
        <Flex className="divider" justify="center" align="center" gap={30}>
          <div className="dLine"></div>
          <Typography.Text className="tShadow">01</Typography.Text>
        </Flex>
      </Flex>
      <Flex
        vertical
        className="fullW"
        gap={20}
        style={{ position: "relative", zIndex: 10 }}
      >
        <Flex justify="center" gap={20} className="fullW" wrap>
          <Flex
            vertical
            justify="center"
            align="start"
            gap={30}
            className="darkGrayBg cardRadius card1"
          >
            <img src={flower} style={{ height: 135, width: 135 }} />
            <Flex vertical gap={15} justify="center" align="start">
              <Typography.Title className="name noMP">
                Achouri Youcef Islem
              </Typography.Title>
              <Typography.Text className="cardText">
                Final-year State Engineering &amp; Master&apos;s candidate in Artificial Intelligence and Data Science at ESI-SBA (Algeria). This 2025 React Three Fiber prototype showcases my early 3D web work — explore full case studies and research at{" "}
                <a href="https://youcef-achouri.vercel.app" target="_blank" rel="noreferrer" style={{ color: "#598EFF" }}>
                  youcef-achouri.vercel.app
                </a>.
              </Typography.Text>
            </Flex>
          </Flex>
          <div className="cardRadius  card2 noMP">
            {/* <CuteModel /> */}
            <Canvas>
              <OrbitControls enableZoom={false} />
              <Alien
                scale={2}
                position={[0, -5.5, 0]}
                rotation={[0, -0.5, 0]}
              />
            </Canvas>
          </div>
        </Flex>
        <Flex justify="center" gap={20} wrap>
          <Flex
            vertical
            justify="center"
            align="start"
            gap={15}
            className="cardRadius darkGrayBg card3 animateCard"
          >
            <Typography.Title className="noMP cardTitle tShadow animateText">
              Spatial 3D &amp; WebGL
            </Typography.Title>
            <Typography.Text className="cardText">
              Interactive Three.js / Babylon.js scenes, point clouds, and LiDAR inspection UIs
            </Typography.Text>
          </Flex>
          <Flex
            vertical
            justify="center"
            align="start"
            gap={15}
            className="cardRadius darkGrayBg card3 animateCard"
          >
            <Typography.Title className="noMP cardTitle tShadow animateText">
              Applied AI &amp; Systems
            </Typography.Title>
            <Typography.Text className="cardText">
              3D computer vision, deep learning models, and production Django/NestJS APIs.
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex justify="center" align="start" gap={20} wrap className="fullW">
          <Flex
            vertical
            justify="start"
            align="start"
            gap={30}
            className="cardRadius darkGrayBg card6 be animateCard"
          >
            <Typography.Title className="tShadow noMP cardTitle animateText">
              3D VISION
            </Typography.Title>
            <Typography.Title className="tShadow noMP cardTitle animateText">
              APPLIED AI
            </Typography.Title>
            <Typography.Title className="tShadow noMP cardTitle animateText">
              WEB SYSTEMS
            </Typography.Title>
          </Flex>
          <Flex justify="center" align="center" gap={20} wrap className="card7">
            <SMediaCard name="Main Portfolio" icon={flower} href="https://youcef-achouri.vercel.app" />
            <SMediaCard name="GitHub" icon={fb} href="https://github.com/youcef-ach" />
            <SMediaCard name="LinkedIn" icon={linkedin} href="https://www.linkedin.com/in/youcef-achouri/" />
            <SMediaCard name="Email" icon={whatsapp} href="mailto:yi.achouri@esi-sba.dz" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
