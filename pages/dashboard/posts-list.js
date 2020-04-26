import { useEffect, useState } from "react";
import Link from "next/link";
import { dbBlog, storage, Timestamp } from "../../firebase/fire";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import DashboardLayout from "../../components/dashboard/dashboard-layout";

import { Breadcrumb, Layout, Table, Button, Modal } from "antd";
const { Content } = Layout;
export default function PostsList() {
  // lay du lieu
  const [data, setData] = useState([]);
  useEffect(() => {
    let clean = dbBlog.onSnapshot((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
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
      title: "Title",

      dataIndex: "title",
    },

    {
      title: "Author",

      dataIndex: "author",
    },
    {
      title: "Date",

      render: (text, record) => {
        const time = new Timestamp(
          record.archiveDate.seconds,
          record.archiveDate.nanoseconds
        ).toDate();

        const date = time.getDate();
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const month = time.getMonth();
        const year = time.getFullYear();
        return `${date} ${months[month]} ${year}`;
      },
    },
    {
      title: "Category",
      render: (text, record) => record.categories.join(", "),
    },
    {
      title: "Tags",
      render: (text, record) => record.tags.join(", "),
    },
    {
      title: "",

      render: (text, record) => (
        <Link
          href="/dashboard/posts-list/[id]"
          as={`/dashboard/posts-list/${record.slug}`}
        >
          <Button type="dashed" shape="circle" icon={<EditOutlined />} />
        </Link>
      ),
    },
    {
      title: "",

      render: (text, record) => (
        <Button
          type="primary"
          shape="circle"
          icon={<DeleteOutlined />}
          danger
          onClick={() =>
            deleteProduct(record.id, [
              record.coverImage,
              ...record.contentImages,
            ])
          }
        />
      ),
    },
  ];

  //xoa du lieu
  const [visible, setVisible] = useState(false); //modal hien thi
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [idDelete, setIdDelete] = useState();
  const [imagesDelete, setImagesDelete] = useState();
  const deleteProduct = (id, images) => {
    setIdDelete(id);
    setImagesDelete(images);
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
            dbBlog
              .doc(idDelete)
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
    <DashboardLayout title="Posts list" select="Posts list" open="Blog">
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
        <Breadcrumb.Item>Posts list</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
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
