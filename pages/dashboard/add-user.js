import Link from "next/link";
import { dbUsers, storage, auth } from "../../firebase/fire";

import DashboardLayout from "../../components/dashboard/dashboard-layout";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Form,
  Input,
  Button,
  Upload,
  Modal,
  message
} from "antd";
import { useState } from "react";
const { Content } = Layout;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 7 }
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 7 }
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default function Dashboard() {
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false); //modal hien thi
  const [confirmLoading, setConfirmLoading] = useState(false);
  //submit
  const [dataSignIn, setDataSignIn] = useState();
  const onFinish = values => {
    if (values.password !== values.confirmPassword) {
      message.error("Confirm password not match password");
      return;
    }
    setDataSignIn(values);
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

    auth
      .createUserWithEmailAndPassword(dataSignIn.email, dataSignIn.password)
      .then(cred => {
        if (dataSignIn.avatar) {
          let uploadTask = storage
            .ref("users-image/" + dataSignIn.avatar.file.name)
            .put(dataSignIn.avatar.file.originFileObj);
          uploadTask.on(
            "state_changed",
            function(snapshot) {},
            function(error) {},
            function() {
              uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function(downloadURL) {
                  cred.user
                    .updateProfile({
                      photoURL: downloadURL
                    })
                    .then(() => {
                      dbUsers
                        .doc(cred.user.uid)
                        .set({
                          email: dataSignIn.email,
                          avatar: downloadURL,
                          bio: dataSignIn.bio ? dataSignIn.bio : ""
                        })
                        .then(() => {
                          form.resetFields();
                          setImageUrl("");
                          setConfirmLoading(false);
                          handleCancel();
                        });
                    });
                });
            }
          );
        } else {
          dbUsers
            .doc(cred.user, uid)
            .set({
              email: dataSignIn.email,
              bio: dataSignIn.bio ? dataSignIn.bio : ""
            })
            .then(() => {
              form.resetFields();

              setConfirmLoading(false);
              handleCancel();
            });
        }
      })
      .catch(function(error) {
        message.error(error.message);
      });
  };

  //avatar
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const handleChange = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
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

  return (
    <DashboardLayout title="Add user" select="Add user" open="Users">
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
        <Breadcrumb.Item>Add user</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <Form {...layout} name="basic" onFinish={onFinish} form={form}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm password"
            name="confirmPassword"
            rules={[
              { required: true, message: "Please input your Confirm password!" }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Bio" name="bio">
            <TextArea autoSize={{ minRows: 5 }} />
          </Form.Item>

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
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
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
      </Content>
    </DashboardLayout>
  );
}
