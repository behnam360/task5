import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Title, Text } = Typography;

const CustomFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        padding: "40px",
        borderRadius: "10px",
        marginTop: "40px",
        background:
          "linear-gradient(236deg, rgb(123, 196, 252), rgb(95, 97, 96))",
      }}
    >
      <section className="footer-text">
        <Title level={4} style={{ marginBottom: "20px" }}>
          Mehr Erfolg durch enge Vernetzung:
        </Title>
        <Text style={{ display: "block", padding: "20px" }}>
          Die Ärzte des Gamma Knife Zentrums Bochum arbeiten eng mit den
          Fachkollegen der Universitätskliniken für Neurologie und
          Neurochirurgie, des Instituts für Radiologie, Neuroradiologie und
          Nuklearmedizin und des Onkologischen Zentrums des
          Knappschaftskrankenhauses Bochum sowie der Klinik für Strahlentherapie
          und Radioonkologie des Marien Hospitals Herne / Universitätsklinikum
          der Ruhr-Universität Bochum zusammen.
        </Text>
      </section>
    </Footer>
  );
};

export default CustomFooter;
