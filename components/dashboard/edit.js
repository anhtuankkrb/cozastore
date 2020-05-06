import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw, ContentState } from "draft-js";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

export default function Edit({
  editorState,
  onEditorStateChange,
  uploadImageCallBack,
  html,
}) {
  useEffect(() => {
    const blocksFromHtml = htmlToDraft(html);

    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    onEditorStateChange(EditorState.createWithContent(contentState));
  }, []);

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      editorStyle={{ background: "#fff", height: "700px", padding: "8px 16px" }}
      toolbar={{
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: false },
        image: {
          uploadCallback: uploadImageCallBack,
          previewImage: true,
          alt: { present: true, mandatory: true },
        },
      }}
    />
  );
}
