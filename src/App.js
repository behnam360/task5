import React, { useState } from "react";
import { Layout, Menu, Input, Button, Drawer } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import img from "./component/img/logo.png";
import "./component/style/style.css";
import Carousel from "./component/Carousel/Carousel.jsx";
import Nestedpanel from "./component/Nested panel/Nested panel.jsx";
import CustomFooter from "./component/footer/footer.jsx";
import Card from "./component/card/card.jsx";

const { Header } = Layout;

const App = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="logo">
          <img
            src={img}
            alt="Logo"
            style={{ height: "40px", width: "50px", marginTop: "10px" }}
          />
        </div>
        <div className="desktop-menu">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">صفحه اصلی</Menu.Item>
            <Menu.Item key="2">درباره ما</Menu.Item>
            <Menu.Item key="3">تماس با ما</Menu.Item>
          </Menu>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input placeholder="جستجو" prefix={<SearchOutlined />} />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            style={{ marginLeft: "10px" }}
          >
            جستجو
          </Button>
          <Button
            className="mobile-menu-button"
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
        </div>
        <Drawer
          title="منو"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical">
            <Menu.Item key="1">صفحه اصلی</Menu.Item>
            <Menu.Item key="2">درباره ما</Menu.Item>
            <Menu.Item key="3">تماس با ما</Menu.Item>
          </Menu>
        </Drawer>
      </Header>
      <section>
        <Carousel />
      </section>
      <section style={{ width: "70%", margin: "0 auto", marginTop: "10px" }}>
        <Nestedpanel />
      </section>
      <section>
        <Card />
      </section>
      <section>
        <CustomFooter />
      </section>
    </Layout>
  );
};

export default App;
