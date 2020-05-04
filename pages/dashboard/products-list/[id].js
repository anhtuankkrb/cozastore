import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
import { db, storage } from "../../../firebase/fire";

import DashboardLayout from "../../../components/dashboard/dashboard-layout";
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

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

export default function EditProduct({ dataEdit }) {
  // reset form

  const [form] = Form.useForm();

  //xu ly anh

  //hang anh doi xoa
  const [imagesNeedDelete, setImagesNeedDelete] = useState([]);
  //cover anh
  const [coverImage, setCoverImage] = useState({
    url: dataEdit.images.coverImage,
    file: "NO FILE",
  });
  const changeCoverImage = (info) => {
    if (info.file.status === "done") {
      setCoverImage({
        url: URL.createObjectURL(info.file.originFileObj),
        file: info.file.originFileObj,
      });
    }
  };
  const deleteCoverImage = () => {
    if (coverImage.file == "NO FILE") {
      setImagesNeedDelete(imagesNeedDelete.concat(coverImage.url));
    }
    setCoverImage(undefined);
  };
  //products anh
  const [productsImage, setProductsImage] = useState(
    dataEdit.images.productsImage
      ? dataEdit.images.productsImage.map((image) => {
          return { url: image, file: "NO FILE" };
        })
      : []
  );
  const changeProductsImage = (info) => {
    if (info.file.status === "done") {
      setProductsImage(
        productsImage.concat({
          url: URL.createObjectURL(info.file.originFileObj),
          file: info.file.originFileObj,
        })
      );
    }
  };
  const deleteProductsImage = (imageUrl) => {
    setProductsImage(
      productsImage.filter((image) => {
        if (image.url == imageUrl && image.file == "NO FILE") {
          setImagesNeedDelete(imagesNeedDelete.concat(imageUrl));
        }
        return image.url != imageUrl;
      })
    );
  };

  //submit

  const [visible, setVisible] = useState(false); //modal hien thi
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [dataUpload, setDataUpload] = useState({});
  const onFinish = (values) => {
    let data = {
      name: values.name,
      slug: values.slug,
      category: values.category,
      size: values.size,
      color: values.color,
      quantity: values.quantity,
      price: values.price,
      weight: values.weight,
      dimensions: {
        height: values.height,
        length: values.length,
        width: values.width,
      },
      meterial: [values.meterial],
      describe: values.describe,
    };
    setDataUpload(data);
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
    if (imagesNeedDelete.length == 0) {
      db.doc(dataEdit.id)
        .update(dataUpload)
        .then(() => {
          upCoverImage();
        });
    } else {
      for (let i = 0; i < imagesNeedDelete.length; i++) {
        storage
          .refFromURL(imagesNeedDelete[i])
          .delete()
          .then(() => {
            if (i == imagesNeedDelete.length - 1) {
              db.doc(dataEdit.id)
                .update(dataUpload)
                .then(() => {
                  upCoverImage();
                });
            }
          });
      }
    }
  };

  //up anh
  const upCoverImage = () => {
    if (coverImage.file == "NO FILE") {
      db.doc(dataEdit.id)
        .update({ images: { coverImage: coverImage.url } })
        .then(() => {
          if (productsImage.length != 0) {
            upProductsImage(coverImage.url);
          } else {
            setConfirmLoading(false);
            handleCancel();
            Router.push("/dashboard/products-list");
          }
        });
    } else {
      let uploadTask = storage
        .ref("products image/" + coverImage.file.name)
        .put(coverImage.file);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {},
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            db.doc(dataEdit.id)
              .update({ images: { coverImage: downloadURL } })
              .then(() => {
                if (productsImage.length != 0) {
                  upProductsImage(downloadURL);
                } else {
                  setConfirmLoading(false);
                  handleCancel();
                  Router.push("/dashboard/products-list");
                }
              });
          });
        }
      );
    }
  };
  const upProductsImage = (coverImageurl) => {
    let arrImage = [];
    for (let i = 0; i < productsImage.length; i++) {
      if (productsImage[i].file == "NO FILE") {
        arrImage.push(productsImage[i].url);
        db.doc(dataEdit.id)
          .update({
            images: { coverImage: coverImageurl, productsImage: arrImage },
          })
          .then(() => {
            if (i == productsImage.length - 1) {
              setImagesNeedDelete([]);
              setConfirmLoading(false);
              handleCancel();
              Router.push("/dashboard/products-list");
            }
          });
      } else {
        let uploadProductsImage = storage
          .ref("products image/" + productsImage[i].file.name)
          .put(productsImage[i].file);
        uploadProductsImage.on(
          "state_changed",
          function (snapshot) {},
          function (error) {},
          function () {
            uploadProductsImage.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                arrImage.push(downloadURL);
                db.doc(dataEdit.id)
                  .update({
                    images: {
                      coverImage: coverImageurl,
                      productsImage: arrImage,
                    },
                  })
                  .then(() => {
                    if (i == productsImage.length - 1) {
                      setImagesNeedDelete([]);
                      setConfirmLoading(false);
                      handleCancel();
                      Router.push("/dashboard/products-list");
                    }
                  });
              });
          }
        );
      }
    }
  };
  //reset
  const onReset = () => {
    form.resetFields();
    setProductsImage(
      dataEdit.images.productsImage
        ? dataEdit.images.productsImage.map((image) => {
            return { url: image, file: "NO FILE" };
          })
        : []
    );
    setCoverImage({
      url: dataEdit.images.coverImage,
      file: "NO FILE",
    });
    setImagesNeedDelete([]);
  };

  //nut upload
  const buttonUpload = (
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  );

  return (
    <DashboardLayout title={dataEdit.name}>
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
        <Breadcrumb.Item>
          <Link href="/dashboard/products-list">
            <a>Products list</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{dataEdit.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          form={form}
          initialValues={{
            name: dataEdit.name,
            slug: dataEdit.slug,
            category: dataEdit.category,
            size: dataEdit.size,
            color: dataEdit.color,
            quantity: dataEdit.quantity,
            price: dataEdit.price,
            weight: dataEdit.weight,
            height: dataEdit.dimensions.height,
            length: dataEdit.dimensions.length,
            width: dataEdit.dimensions.width,
            meterial: dataEdit.meterial[0],
            describe: dataEdit.describe,
            coverImage: "NO FILE",
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Slug"
            name="slug"
            rules={[{ required: true, message: "Please input your slug!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please select Category!" }]}
          >
            <Select placeholder="Please select Cacategory">
              <Option value="women">Women</Option>
              <Option value="men">Men</Option>
              <Option value="bag">Bag</Option>
              <Option value="shoes">Shoes</Option>
              <Option value="accessories">Accessories</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="size"
            label="Size"
            rules={[{ required: true, message: "Please select size!" }]}
          >
            <Checkbox.Group>
              <Checkbox value="S" style={{ lineHeight: "32px" }}>
                S
              </Checkbox>

              <Checkbox value="M" style={{ lineHeight: "32px" }}>
                M
              </Checkbox>

              <Checkbox value="L" style={{ lineHeight: "32px" }}>
                L
              </Checkbox>

              <Checkbox value="XL" style={{ lineHeight: "32px" }}>
                XL
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            name="color"
            label="Color"
            rules={[{ required: true, message: "Please select color!" }]}
          >
            <Checkbox.Group>
              <Checkbox
                value="Black"
                style={{ lineHeight: "32px", color: "black" }}
              >
                Black
              </Checkbox>

              <Checkbox
                value="Blue"
                style={{ lineHeight: "32px", color: "blue" }}
              >
                Blue
              </Checkbox>

              <Checkbox
                value="Gray"
                style={{ lineHeight: "32px", color: "gray" }}
              >
                Gray
              </Checkbox>

              <Checkbox
                value="Green"
                style={{ lineHeight: "32px", color: "green" }}
              >
                Green
              </Checkbox>
              <Checkbox
                value="Red"
                style={{ lineHeight: "32px", color: "red" }}
              >
                Red
              </Checkbox>
              <Checkbox
                value="Brown"
                style={{ lineHeight: "32px", color: "brown" }}
              >
                Brown
              </Checkbox>
              <Checkbox value="White" style={{ lineHeight: "32px" }}>
                White
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please input your quantity!" }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your price!" }]}
          >
            <InputNumber
              defaultValue={1000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>

          <Form.Item label="Weight">
            <Form.Item
              name="weight"
              rules={[{ required: true, message: "Please input your weight!" }]}
              noStyle
            >
              <InputNumber min={0} />
            </Form.Item>
            <span className="ant-form-text"> kg</span>
          </Form.Item>
          <Form.Item label="Height">
            <Form.Item
              name="height"
              rules={[{ required: true, message: "Please input your height!" }]}
              noStyle
            >
              <InputNumber min={0} />
            </Form.Item>
            <span className="ant-form-text"> cm</span>
          </Form.Item>
          <Form.Item label="Length" valuePropName="length">
            <Form.Item
              name="length"
              rules={[{ required: true, message: "Please input your length!" }]}
              noStyle
            >
              <InputNumber min={0} />
            </Form.Item>
            <span className="ant-form-text"> cm</span>
          </Form.Item>
          <Form.Item label="Width">
            <Form.Item
              name="width"
              rules={[{ required: true, message: "Please input your width!" }]}
              noStyle
            >
              <InputNumber min={0} />
            </Form.Item>
            <span className="ant-form-text"> cm</span>
          </Form.Item>
          <Form.Item
            label="Meterial"
            name="meterial"
            rules={[{ required: true, message: "Please input your meterial!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Describe"
            name="describe"
            rules={[{ required: true, message: "Please input your describe!" }]}
          >
            <TextArea autoSize={{ minRows: 5 }} />
          </Form.Item>

          {/* up anh */}
          <Form.Item label="Cover image">
            <Form.Item
              name="coverImage"
              valuePropName="file"
              rules={[
                { required: true, message: "Please input your Cover image!" },
              ]}
              noStyle
            >
              <Upload
                name="file"
                showUploadList={false}
                onChange={changeCoverImage}
              >
                {!coverImage && buttonUpload}
              </Upload>
            </Form.Item>
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
          </Form.Item>

          <Form.Item label="Products image">
            {productsImage &&
              productsImage.map((image, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginBottom: "24px",
                    }}
                    key={index}
                  >
                    <img
                      src={image.url}
                      style={{ width: "280px", marginRight: "16px" }}
                    />
                    <Button
                      type="primary"
                      danger
                      onClick={() => deleteProductsImage(image.url)}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}

            <Form.Item name="productsImage" valuePropName="files" noStyle>
              <Upload
                name="files"
                showUploadList={false}
                onChange={changeProductsImage}
              >
                {buttonUpload}
              </Upload>
            </Form.Item>
          </Form.Item>

          {/* submit */}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginLeft: "24px" }}
            >
              Reset
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

EditProduct.getInitialProps = async function (context) {
  const { id } = context.query;

  let result = await db
    .where("slug", "==", id)
    .get()
    .then((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })

    .catch(() => {
      return {};
    });

  return { dataEdit: result[0] };
};
