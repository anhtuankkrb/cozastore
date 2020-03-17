import Link from "next/link";
import { useEffect, useState } from "react";
import { dbUsers } from "../../firebase/fire";

import { UserOutlined } from "@ant-design/icons";
import DashboardLayout from "../../components/dashboard/dashboard-layout";
import { Breadcrumb, Layout, Table, Avatar } from "antd";
const { Content } = Layout;
export default function Dashboard() {
  // lay du lieu
  const [data, setData] = useState([]);
  useEffect(() => {
    let clean = dbUsers.onSnapshot(snapshot => {
      let arrData = [];
      snapshot.forEach(doc => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      setData(arrData);
    });
    return () => {
      clean();
    };
  });

  //tao bang
  const columns = [
    {
      title: "Avatar",

      render: (text, record) =>
        record.avatar ? (
          <Avatar src={record.avatar} size={64} />
        ) : (
          <Avatar icon={<UserOutlined />} size={64} />
        )
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Bio",
      render: (text, record) => (record.bio ? record.bio : "")
    }
  ];
  return (
    <DashboardLayout title="Users list" select="Users List" open="Users">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Users list</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <Table columns={columns} dataSource={data} rowKey="id" />
      </Content>
    </DashboardLayout>
  );
}
