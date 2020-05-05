import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { dbBlog, storage } from "../../../firebase/fire";
import dynamic from "next/dynamic";

const Edit = dynamic(() => import("../../../components/dashboard/edit"), {
  ssr: false,
});

import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import DashboardLayout from "../../../components/dashboard/dashboard-layout";

import {
  Breadcrumb,
  Layout,
  Form,
  Input,
  Button,
  Checkbox,
  Tag,
  Modal,
} from "antd";

const { Search } = Input;
const { Content } = Layout;
const { TextArea } = Input;

export default function EditPost({ data }) {
  const router = useRouter();

  //edit

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorContent) => {
    setEditorState(editorContent);
  };

  const [images, setImages] = useState(
    data.contentImages
      ? data.contentImages.map((image) => ({
          localUrl: image,
          flie: "NO FILE",
        }))
      : []
  );
  let image = [];

  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      image.push({ localUrl: url, file: file });
      setImages(image);

      resolve({ data: { link: url } });
    });
  };

  //form
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 1, span: 16 },
  };

  const [dataUpload, setDataUpload] = useState({});
  const onFinish = (values) => {
    let data = {
      title: values.title,
      slug: values.slug,
      author: values.author,
      categories: values.categories,
      tags: tags,
      descriptiveParagraph: values.descriptiveParagraph,
    };
    setDataUpload(data);
    showModal();
  };

  //modal
  const [visible, setVisible] = useState(false); //modal hien thi
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    upCoverImage();
  };
  const upCoverImage = () => {
    if (coverImage.file == "NO FILE") {
      dbBlog
        .doc(data.id)
        .update(dataUpload)
        .then(() => {
          upContent();
        });
    } else {
      dbBlog
        .doc(data.id)
        .update(dataUpload)
        .then(() => {
          storage
            .refFromURL(data.coverImage)
            .delete()
            .then(() => {
              let uploadTask = storage
                .ref("blog/" + coverImage.file.name)
                .put(coverImage.file);
              uploadTask.on(
                "state_changed",
                function (snapshot) {},
                function (error) {},
                function () {
                  uploadTask.snapshot.ref
                    .getDownloadURL()
                    .then(function (downloadURL) {
                      dbBlog
                        .doc(data.id)
                        .update({ coverImage: downloadURL })
                        .then(() => {
                          upContent();
                        });
                    });
                }
              );
            });
        });
    }
  };
  //up content
  const upContent = (id) => {
    let contentImages = [];

    let html = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    let upImages = images.filter((image) => html.includes(image.localUrl));

    let ollImages = images.filter((image) => image.file == "NO FILE");

    let imagesNeedDelete = data.contentImages
      ? data.contentImages.filter((image) => {
          let tester = true;
          for (let i = 0; i < ollImages.length; i++) {
            if (image == ollImages[i].localUrl) {
              tester = false;
              break;
            }
          }
          return tester;
        })
      : [];

    if (upImages.length == 0) {
      dbBlog
        .doc(id)
        .update({ html: html, contentImages: contentImages })
        .then(() => {
          setConfirmLoading(false);
          handleCancel();
        });
    } else {
      if (imagesNeedDelete.length != 0) {
        imagesNeedDelete.forEach((image) => {
          storage.refFromURL(image).delete();
        });
      }

      upImages.forEach((image, i) => {
        if (image.localUrl == "NO FILE") {
          contentImages.push(image.localUrl);
          if (i == upImages.length - 1) {
            dbBlog
              .doc(id)
              .update({ html: html, contentImages: contentImages })
              .then(() => {
                setConfirmLoading(false);
                handleCancel();
              });
          }
        } else {
          let uploadTask = storage
            .ref("blog/" + image.file.name)
            .put(image.file);
          uploadTask.on(
            "state_changed",
            function (snapshot) {},
            function (error) {},
            function () {
              uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                  contentImages.push(downloadURL);
                  html = html.replace(image.localUrl, downloadURL);
                })
                .then(function () {
                  if (i == upImages.length - 1) {
                    dbBlog
                      .doc(data.id)
                      .update({ html: html, contentImages: contentImages })
                      .then(() => {
                        setConfirmLoading(false);
                        handleCancel();
                      });
                  }
                });
            }
          );
        }
      });
    }
  };

  //tags
  const [tags, setTags] = useState(data.tags ? data.tags : []);
  const addTag = (val) => {
    if (val.trim() !== "" && !tags.includes(val.trim())) {
      setTags(tags.concat(val.trim()));
      form.setFieldsValue({ tags: "" });
    } else {
      form.setFieldsValue({ tags: "" });
    }
  };
  const deleteTag = (e, tag) => {
    e.preventDefault();
    setTags(tags.filter((val) => val != tag));
  };

  //cover image
  const [coverImage, setCoverImage] = useState({
    url: data.coverImage,
    file: "NO FILE",
  });
  const changeCoverImage = (e) => {
    setCoverImage({
      url: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    });
  };
  const deleteCoverImage = () => {
    setCoverImage(undefined);
  };
  return (
    <DashboardLayout title={data.title}>
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
          <Link href="/dashboard/posts-list">
            <a>Posts list</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
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
            title: data.title,
            slug: data.slug,
            categories: data.categories,
            author: data.author,
            descriptiveParagraph: data.descriptiveParagraph,
            coverImage: "NO FILE",
          }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
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
            label="Author"
            name="author"
            rules={[{ required: true, message: "Please input your author!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="categories"
            label="Categories"
            rules={[{ required: true, message: "Please select Categories!" }]}
          >
            <Checkbox.Group>
              <Checkbox value="Fashion" style={{ lineHeight: "32px" }}>
                Fashion
              </Checkbox>

              <Checkbox value="Beauty" style={{ lineHeight: "32px" }}>
                Beauty
              </Checkbox>

              <Checkbox value="Street Style" style={{ lineHeight: "32px" }}>
                Street Style
              </Checkbox>

              <Checkbox value="Life Style" style={{ lineHeight: "32px" }}>
                Life Style
              </Checkbox>
              <Checkbox value="DIY & Crafts" style={{ lineHeight: "32px" }}>
                DIY & Crafts
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="Tags">
            <Form.Item name="tags" noStyle>
              <Search enterButton="add" onSearch={addTag} />
            </Form.Item>
            <div>
              {tags &&
                tags.map((tag) => (
                  <Tag
                    key={tag}
                    closable
                    onClose={(e) => deleteTag(e, tag)}
                    style={{ marginTop: "8px" }}
                    color="magenta"
                  >
                    {tag}
                  </Tag>
                ))}
            </div>
          </Form.Item>
          <Form.Item label="Cover image">
            <Form.Item
              name="coverImage"
              valuePropName="file"
              rules={[
                { required: true, message: "Please input your Cover image!" },
              ]}
              noStyle
            >
              {!coverImage && <input type="file" onChange={changeCoverImage} />}
            </Form.Item>
            {coverImage && (
              <div>
                <img
                  src={coverImage.url}
                  style={{
                    width: "100%",
                    marginBottom: "16px",
                    marginTop: "16px",
                  }}
                />
                <Button type="primary" danger onClick={deleteCoverImage}>
                  Delete
                </Button>
              </div>
            )}
          </Form.Item>
          <Form.Item
            label="Description"
            name="descriptiveParagraph"
            rules={[{ required: true, message: "Please input your describe!" }]}
          >
            <TextArea autoSize={{ minRows: 5 }} />
          </Form.Item>

          <Edit
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            uploadImageCallBack={uploadImageCallBack}
            html={data.html}
          />

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginTop: "36px", width: " 180px" }}
            >
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

EditPost.getInitialProps = async function (context) {
  const { id } = context.query;

  let result = await dbBlog
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

  return { data: result[0] };
};
