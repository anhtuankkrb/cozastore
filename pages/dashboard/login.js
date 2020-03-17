import { useRouter } from "next/router";
import { Form, Input, Button, message } from "antd";

import { auth } from "../../firebase/fire";

export default function Login() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const router = useRouter();

  const onFinish = values => {
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        router.push(router.query.from);
      })
      .catch(error => {
        message.error(error.message);
      });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        background: "#e1e1e1",
        borderRadius: "10px",
        overflow: "hidden"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          background: "#001529",
          color: "#fff",
          marginBottom: "24px",
          padding: "12px"
        }}
      >
        Login
      </h2>
      <div style={{ paddingRight: "16px", paddingLeft: "6px" }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
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
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
