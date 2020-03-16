import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../../firebase/fire";
import DashboardLayout from "../../components/dashboard/dashboard-layout";

import { Breadcrumb, Layout, Table } from "antd";
const { Content } = Layout;
export default function ProductsList() {
  // lay du lieu
  const [data, setData] = useState([]);
  useEffect(() => {
    let clean = db.onSnapshot(snapshot => {
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

  // tao bang
  const columns = [
    {
      title: "Image",

      render: (text, record) => (
        <img src={record.images.coverImage} style={{ width: "60px" }} />
      )
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Category",
      dataIndex: "category"
    },
    {
      title: "Quantity",
      dataIndex: "quantity"
    },
    {
      title: "Size",

      render: (text, record) => record.size.toString()
    },
    {
      title: "Price",

      render: (text, record) => "$ " + record.price.toString()
    }
  ];

  return (
    <DashboardLayout
      title="Products list"
      select="Products list"
      open="Products"
    >
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Products list</Breadcrumb.Item>
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
