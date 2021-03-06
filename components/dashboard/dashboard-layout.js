import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { auth } from "../../firebase/fire";

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
  LogoutOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

export default function DashboardLayout({ children, title, select, open }) {
  //fix link tinh
  const router = useRouter();
  const path = router.pathname;
  const level = path.split("").filter((item) => item == "/");
  let fixPathImg = "";
  for (let i = 0; i < level.length - 1; i++) {
    fixPathImg += "../";
  }

  // xet nguoi dung

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    let clean = auth.onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
      } else {
        location.href = "/dashboard/login?from=" + path;
      }
    });

    return () => {
      clean();
    };
  });
  //logout
  const logout = () => {
    auth.signOut();
  };

  const menu = (
    <Menu theme="dark">
      <Menu.Item key="1">
        <Link href="/dashboard/your-profile">
          <span>
            <ProfileOutlined />
            Your profile
          </span>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <span onClick={logout}>
          <LogoutOutlined />
          Logout
        </span>
      </Menu.Item>
    </Menu>
  );

  return auth.currentUser ? (
    <Layout style={{ minHeight: "100vh" }}>
      <Head>
        <title>coza store | dashboard</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/icons/favicon.png" />
      </Head>
      <Header className="header" style={{ padding: "0 30px" }}>
        <Link href="/">
          <a
            href="#"
            style={{
              background: " #fff",
              padding: "8px",
            }}
          >
            <img src={fixPathImg + "images/icons/logo-01.png"} alt="IMG-LOGO" />
          </a>
        </Link>
        <h2 className="title-dashboard">{title}</h2>

        <div style={{ float: "right" }}>
          <span style={{ marginRight: "8px", color: "#fff" }}>
            {currentUser ? currentUser.email : ""}
          </span>
          <Dropdown overlay={menu} trigger={["click"]}>
            {currentUser ? (
              <Avatar
                src={currentUser.photoURL}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
            )}
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[select]}
            defaultOpenKeys={[open]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="Dashboard">
              <Link href="/dashboard">
                <a>
                  <DashboardOutlined />
                  Dashboard
                </a>
              </Link>
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
                <Link href="/dashboard/users-list">
                  <a>
                    <UnorderedListOutlined />
                    Users List
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="Add user">
                <Link href="/dashboard/add-user">
                  <a>
                    <UserAddOutlined />
                    Add user
                  </a>
                </Link>
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
                <Link href="/dashboard/products-list">
                  <a>
                    <UnorderedListOutlined />
                    Products list
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="Add product">
                <Link href="/dashboard/add-product">
                  <a>
                    <AppstoreAddOutlined />
                    Add product
                  </a>
                </Link>
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
                <Link href="/dashboard/posts-list">
                  <a>
                    <UnorderedListOutlined /> Posts list
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="Add post">
                <Link href="/dashboard/add-post">
                  <a>
                    <DiffOutlined />
                    Add post
                  </a>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>{children}</Layout>
      </Layout>
    </Layout>
  ) : null;
}
