import Layout from "./layout";
import Modal from "./modal";

export default function LayoutHasModal(props) {
  return (
    <>
      <Layout title={props.title}>{props.children}</Layout>
      <Modal />
    </>
  );
}
