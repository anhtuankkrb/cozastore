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

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default function YourProfile() {
  //user
  const [currentUser, setCurrentUser] = useState();

  const [dataUser, setDataUser] = useState();
  useEffect(() => {
    let cleanDB;
    let clean = auth.onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
        setImageUrl(user.photoURL);
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

    if (dataUpdate.avatar) {
      storage
        .refFromURL(currentUser.photoURL)
        .delete()
        .then(() => {
          let uploadTask = storage
            .ref("users-image/" + dataUpdate.avatar.file.name)
            .put(dataUpdate.avatar.file.originFileObj);
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
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return auth.currentUser ? (
    <DashboardLayout title="Your profile" select="Your profile" open="Users">
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
                <Form.Item name="avatar" valuePropName="file" noStyle>
                  <Upload
                    name="file"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    onChange={handleChange}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: "100%" }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
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
