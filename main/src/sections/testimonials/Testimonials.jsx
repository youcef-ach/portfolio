import { Flex, Typography } from "antd";
import "./testimonials.css";
import Comment from "../../components/Comment";

function Testimonials() {
  return (
    <Flex
      vertical
      className="projectsCont fullW globalPadding sectionPadding"
      id="highlights"
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
            HIGHLIGHTS
          </Typography.Title>
          <Typography.Title className="noMP subHeader2" type="secondary">
            Recent systems, research &amp; engineering milestones
          </Typography.Title>
        </Flex>
        <Flex className="divider" justify="center" align="center" gap={30}>
          <div className="dLine"></div>
          <Typography.Text className="tShadow">04</Typography.Text>
        </Flex>
      </Flex>
      <Flex justify="center" align="start" gap={20} wrap>
        <Flex vertical className="vFlex" gap={20}>
          <Comment
            badge="2026 · SPATIAL AI"
            title="AzuridTwinUp"
            subtitle="Partner & Lead Spatial Systems Engineer"
            detail="Automated photogrammetry across +2,000 drone & terrestrial images with GCPs, QGIS DTM/DSM workflows, exploratory 3DGS/2DGS/VGGT evaluations, and a Three.js + NestJS 3D inspection viewer."
          />
          <Comment
            badge="2026 · 3D VISION"
            title="Virtual Staging on E57 Scans"
            subtitle="Matterport Pro3 · Mask2Former · SAM · WebGPU"
            detail="Offline spatial understanding pipeline extracting orthogonal pinhole cubemap faces from LiDAR sweeps, zero-shot architectural segmentation, ray-plane fusion, and real-time occlusion meshes."
          />
        </Flex>
        <Flex vertical className="vFlex" gap={20} style={{ marginTop: 50 }}>
          <Comment
            badge="2026 · DEEP LEARNING"
            title="StethoSpeech Adaptation"
            subtitle="PyTorch · HuBERT Base · 4th-Year DL Project"
            detail="Trained a 19.7M-parameter Transformer encoder mapping contact-microphone NAM murmurs to 768-dim HuBERT representations (0.23171 MAE on 1,133 held-out utterances)."
          />
          <Comment
            badge="2024–2026 · AWARDS & LEADERSHIP"
            title="NCS Hack 3.0 & INGENIUMS"
            subtitle="3rd of 25 Teams · Former Club VP"
            detail="Built a LangGraph multi-agent operations hub with deterministic replay tests (3rd place at NCS Hack 3.0), and led 100+ active student members across 10 annual engineering events."
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Testimonials;
