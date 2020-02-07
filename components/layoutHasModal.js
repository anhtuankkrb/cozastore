import Layout from "./layout";
import Modal from "./modal";

export default function LayoutHasModal(props) {
  return (
    <>
      <Layout>{props.children}</Layout>
      <Modal />
    </>
  );
}
