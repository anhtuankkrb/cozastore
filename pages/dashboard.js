import Link from "next/link";

import DashboardLayout from "../components/dashboard/dashboard-layout";
import { Breadcrumb, Layout } from "antd";
const { Content } = Layout;
export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard" select="Dashboard">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        Content
      </Content>
    </DashboardLayout>
  );
}
