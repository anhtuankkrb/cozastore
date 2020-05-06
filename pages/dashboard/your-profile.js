import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, dbUsers, storage } from "../../firebase/fire";

import DashboardLayout from "../../components/dashboard/dashboard-layout";

import { UserOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Avatar,
  Tabs,
  Form,
  Input,
  Upload,
  Button,
  Modal,
} from "antd";
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Content } = Layout;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 7 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 7 },
};

export default function YourProfile() {
  //user
  const [currentUser, setCurrentUser] = useState();

  const [dataUser, setDataUser] = useState();
  useEffect(() => {
    let cleanDB;
    let clean = auth.onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
        setImage({ url: user.photoURL, file: "NO FILE" });
        cleanDB = dbUsers.doc(user.uid).onSnapshot((snapshot) => {
          setDataUser(snapshot.data());
        });
      } else {
      }
    });

    return () => {
      clean();
      cleanDB();
    };
  }, []);

  //form

  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false); //modal hien thi
  const [confirmLoading, setConfirmLoading] = useState(false);
  //submit
  const [dataUpdate, setDataUpdate] = useState();
  const onFinish = (values) => {
    setDataUpdate(values);
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

    if (image.file != "NO FILE") {
      if (!image.url) {
        storage
          .refFromURL(currentUser.photoURL)
          .delete()
          .then(() => {
            let uploadTask = storage
              .ref("users-image/" + image.file.name)
              .put(image.file);
            uploadTask.on(
              "state_changed",
              function (snapshot) {},
              function (error) {},
              function () {
                uploadTask.snapshot.ref
                  .getDownloadURL()
                  .then(function (downloadURL) {
                    currentUser
                      .updateProfile({ photoURL: downloadURL })
                      .then(() => {
                        dbUsers
                          .doc(currentUser.uid)
                          .update({ avatar: downloadURL, bio: dataUpdate.bio })
                          .then(() => {
                            setConfirmLoading(false);
                            handleCancel();
                            form.setFieldsValue({
                              avatar: undefined,
                            });
                          });
                      });
                  });
              }
            );
          });
      } else {
        let uploadTask = storage
          .ref("users-image/" + image.file.name)
          .put(image.file);
        uploadTask.on(
          "state_changed",
          function (snapshot) {},
          function (error) {},
          function () {
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                currentUser
                  .updateProfile({ photoURL: downloadURL })
                  .then(() => {
                    dbUsers
                      .doc(currentUser.uid)
                      .update({ avatar: downloadURL, bio: dataUpdate.bio })
                      .then(() => {
                        setConfirmLoading(false);
                        handleCancel();
                        form.setFieldsValue({
                          avatar: undefined,
                        });
                      });
                  });
              });
          }
        );
      }
    } else {
      dbUsers
        .doc(currentUser.uid)
        .update({ bio: dataUpdate.bio })
        .then(() => {
          setConfirmLoading(false);
          handleCancel();
        });
    }
  };

  //avatar

  const [image, setImage] = useState();
  const changeImage = (e) => {
    setImage({
      url: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    });
  };

  return auth.currentUser ? (
    <DashboardLayout title="Your profile">
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
        <Breadcrumb.Item>Your profile</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Tabs tabPosition="left" type="card">
          <TabPane tab="Your profile" key="1">
            {currentUser ? (
              currentUser.photoURL ? (
                <Avatar src={currentUser.photoURL} size={200} />
              ) : (
                <Avatar icon={<UserOutlined />} size={200} />
              )
            ) : (
              <Avatar icon={<UserOutlined />} size={200} />
            )}
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "8px",
                marginTop: "24px",
              }}
            >
              {currentUser ? `Email: ${currentUser.email}` : ""}
            </div>
            <div
              style={{
                fontSize: "16px",

                marginLeft: "8px",
                marginTop: "24px",
              }}
            >
              {dataUser ? (dataUser.bio ? `Bio: ${dataUser.bio}` : "") : ""}
            </div>
          </TabPane>

          <TabPane tab="Edit profile" key="2">
            <Form
              {...layout}
              name="basic"
              onFinish={onFinish}
              form={form}
              initialValues={{
                bio: dataUser ? (dataUser.bio ? dataUser.bio : "") : "",
              }}
            >
              <Form.Item label="Avatar">
                {image && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={image.url}
                      style={{ width: "280px", marginRight: "16px" }}
                    />
                  </div>
                )}

                <Form.Item name="avatar" valuePropName="file" noStyle>
                  <input type="file" onChange={changeImage} />
                </Form.Item>
              </Form.Item>

              <Form.Item label="Bio" name="bio">
                <TextArea autoSize={{ minRows: 5 }} />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <Modal
              title="Submit"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>Are you sure ?</p>
            </Modal>
          </TabPane>
        </Tabs>
      </Content>
    </DashboardLayout>
  ) : null;
}
