import { useRouter } from "next/router";
import Link from "next/link";

import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  ProfileOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
  DiffOutlined,
  DashboardOutlined,
  LogoutOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

export default function DashboardLayout({ children, title, select, open }) {
  const path = useRouter().pathname;
  const level = path.split("").filter(item => item == "/");
  let fixPathImg = "";
  for (let i = 0; i < level.length - 1; i++) {
    fixPathImg += "../";
  }

  const menu = (
    <Menu theme="dark">
      <Menu.Item key="1">
        <ProfileOutlined />
        Your profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header" style={{ padding: "0 30px" }}>
        <Link href="/">
          <a
            href="#"
            style={{
              background: " #fff",
              padding: "8px"
            }}
          >
            <img src={fixPathImg + "images/icons/logo-01.png"} alt="IMG-LOGO" />
          </a>
        </Link>
        <h2
          style={{
            color: "#fff",
            display: "inline",
            marginLeft: "32px",
            position: "relative",
            top: "5px"
          }}
        >
          {title}
        </h2>

        <div style={{ float: "right" }}>
          <span style={{ marginRight: "8px", color: "#fff" }}>
            Emal@gmail.com{" "}
          </span>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[select]}
            defaultOpenKeys={[open]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="Dashboard">
              <DashboardOutlined />
              Dashboard
            </Menu.Item>
            <SubMenu
              key="Users"
              title={
                <span>
                  <UserOutlined />
                  Users
                </span>
              }
            >
              <Menu.Item key="Users List">
                <UnorderedListOutlined />
                Users List
              </Menu.Item>
              <Menu.Item key="Add user">
                <UserAddOutlined />
                Add user
              </Menu.Item>
              <Menu.Item key="Your profile">
                <ProfileOutlined />
                Your profile
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="Products"
              title={
                <span>
                  <AppstoreOutlined />
                  Products
                </span>
              }
            >
              <Menu.Item key="Products list">
                <UnorderedListOutlined />
                <Link href="/dashboard/products-list">
                  <a>Products list</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="Add product">
                <AppstoreAddOutlined />
                Add product
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="Blog"
              title={
                <span>
                  <FileTextOutlined />
                  Blog
                </span>
              }
            >
              <Menu.Item key="Posts list">
                <UnorderedListOutlined /> Posts list
              </Menu.Item>
              <Menu.Item key="Add post">
                <DiffOutlined />
                Add post
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>{children}</Layout>
      </Layout>
    </Layout>
  );
}
