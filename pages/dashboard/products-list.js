import { useEffect, useState } from "react";
import Link from "next/link";
import { db, storage } from "../../firebase/fire";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import DashboardLayout from "../../components/dashboard/dashboard-layout";

import { Breadcrumb, Layout, Table, Button, Modal } from "antd";
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
    },
    {
      title: "",

      render: (text, record) => (
        <Link
          href="/dashboard/products-list/[id]"
          as={`/dashboard/products-list/${record.slug}`}
        >
          <Button type="dashed" shape="circle" icon={<EditOutlined />} />
        </Link>
      )
    },
    {
      title: "",

      render: (text, record) => (
        <Button
          type="primary"
          shape="circle"
          icon={<DeleteOutlined />}
          danger
          onClick={() => deleteProduct(record.id, record.images)}
        />
      )
    }
  ];

  //xoa du lieu
  const [visible, setVisible] = useState(false); //modal hien thi
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [idDelete, setIdDelete] = useState();
  const [imagesDelete, setImagesDelete] = useState();
  const deleteProduct = (id, images) => {
    setIdDelete(id);
    setImagesDelete(
      images.productsImage
        ? [images.coverImage, ...images.productsImage]
        : [images.coverImage]
    );
    showModal();
  };

  //modal
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    for (let i = 0; i < imagesDelete.length; i++) {
      storage
        .refFromURL(imagesDelete[i])
        .delete()
        .then(() => {
          if (i == imagesDelete.length - 1) {
            db.doc(idDelete)
              .delete()
              .then(() => {
                setConfirmLoading(false);
                handleCancel();
              });
          }
        });
    }
  };

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
        <Modal
          title="Submit"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>Are you sure ?</p>
        </Modal>
      </Content>
    </DashboardLayout>
  );
}
