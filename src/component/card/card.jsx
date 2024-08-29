import React from "react";
import { Card, Row, Col } from "antd";
const { Meta } = Card;

const card = () => (
  <section style={{ padding: "20px" }}>
    <Row gutter={[16, 16]} justify="center">
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
  </section>
);

export default card;
