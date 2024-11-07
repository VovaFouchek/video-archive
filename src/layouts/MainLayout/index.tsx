import { Outlet } from "react-router-dom";
import Layout from "antd/es/layout";

import Sidebar from "@/components/Sidebar";

const { Content, Sider } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width="280" style={{ backgroundColor: "#fff" }}>
        <Sidebar />
      </Sider>
      <Layout>
        <Content
          style={{
            padding: "30px 25px",
            backgroundColor: "#fff",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
