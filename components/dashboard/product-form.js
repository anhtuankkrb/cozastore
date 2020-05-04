import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  InputNumber,
  Upload,
  Modal,
} from "antd";

const { Option } = Select;
const { TextArea } = Input;
const { Content } = Layout;

export default function ProductForm() {
  const buttonUpload = (
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  );
  const [coverImage, setCoverImage] = useState();
  const changeCoverImage = (info) => {
    if (info.file.status === "done") {
      setCoverImage({
        url: URL.createObjectURL(info.file.originFileObj),
        file: info.file.originFileObj,
      });
    }
  };
  const deleteCoverImage = () => {
    setCoverImage(undefined);
  };
  return (
    <div>
      <Upload name="file" showUploadList={false} onChange={changeCoverImage}>
        {!coverImage && buttonUpload}
      </Upload>

      {coverImage && (
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <img
            src={coverImage.url}
            style={{ width: "280px", marginRight: "16px" }}
          />
          <Button type="primary" danger onClick={deleteCoverImage}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
