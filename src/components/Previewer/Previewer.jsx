/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Toolbar from "../Toolbar/Toolbar";
import { marked } from "marked";
import DOMPurify from "dompurify";
function Previewer({
  text,
  previewerCollapse,
  setPreviewerCollapse,
  editorCollapse,
}) {
  const stage = useRef();
  useEffect(() => {
    stage.current.innerHTML = DOMPurify.sanitize(marked.parse(text));
  }, [text]);
  return (
    <div
      className={`previewWrap ${!previewerCollapse ? "maximized" : ""}`}
      style={{ display: !editorCollapse ? "none" : "block" }}
    >
      <Toolbar
        title={"Previewer"}
        editorCollapse={previewerCollapse}
        setEditorCollapse={setPreviewerCollapse}
      />
      <div ref={stage} className="preview"></div>
    </div>
  );
}

export default Previewer;
