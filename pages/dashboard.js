import Link from "next/link";

import ChartistGraph from "react-chartist";

import DashboardLayout from "../components/dashboard/dashboard-layout";
import { Breadcrumb, Layout } from "antd";

const { Content } = Layout;
export default function Dashboard() {
  var data = {
    labels: [
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7",
      "T8",
      "T9",
      "T10",
      "T11",
      "T12",
    ],
    series: [[30, 50, 40, 60, 70, 80, 80, 70, 60, 60, 70, 90]],
  };

  var options = {
    high: 100,
    low: 0,

    chartPadding: {
      right: 40,
    },
    showArea: true,
  };

  var type = "Line";

  var dataCol = {
    labels: ["Women", "Men", "Bag", "Shoes", "Accessories"],
    series: [[40, 25, 10, 10, 15]],
  };

  var optionsCol = {
    high: 100,
    low: 0,

    chartPadding: {
      right: 40,
    },
    showArea: true,
  };

  var typeCol = "Bar";

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
          minHeight: 280,
        }}
      >
        <div className="chartis">
          <ChartistGraph
            data={data}
            options={options}
            type={type}
            style={{ height: "500px", width: "100%" }}
          />
          <div style={{ paddingLeft: "50px", fontSize: "18px" }}>
            Products sold by month
          </div>
        </div>
        <div className="chartisCol">
          <ChartistGraph
            data={dataCol}
            options={optionsCol}
            type={typeCol}
            style={{ height: "350px", width: "100%" }}
          />
          <div style={{ paddingLeft: "50px", fontSize: "18px" }}>
            Scale by product type (%)
          </div>
        </div>
      </Content>
    </DashboardLayout>
  );
}
