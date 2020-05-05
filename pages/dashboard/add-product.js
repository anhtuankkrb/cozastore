import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "../../components/dashboard/dashboard-layout";

import { Breadcrumb, Layout } from "antd";
import dynamic from "next/dynamic";
const ProductForm = dynamic(
  () => import("../../components/dashboard/product-form"),
  {
    ssr: false,
  }
);

const { Content } = Layout;

export default function AddProduct() {
  return (
    <DashboardLayout title="Add product" select="Add product" open="Products">
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
        <Breadcrumb.Item>Add product</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <ProductForm />
      </Content>
    </DashboardLayout>
  );
}
