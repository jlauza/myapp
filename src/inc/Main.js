import { Layout, Menu, theme } from "antd";
import "../App.css";
const { Header, Content, Footer } = Layout;

const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const MenuProps = [
    { key: "0", label: "Logo", path: "/" },
    { key: "1", label: "Home", path: "/" },
    { key: "2", label: "About", path: "/about" },
    { key: "3", label: "Pricing", path: "/pricing" },
    { key: "4", label: "Contact", path: "/contact" },
  ];

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={MenuProps}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content here
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Main;
