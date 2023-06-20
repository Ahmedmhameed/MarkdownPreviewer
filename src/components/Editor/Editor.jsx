/* eslint-disable react/prop-types */
import {} from "react";
import Toolbar from "../Toolbar/Toolbar";
//  arrows-alt X   compress /
function Editor({
  text,
  editorCollapse,
  setEditorCollapse,
  handleChange,
  previewerCollapse,
}) {
  return (
    <div
      className={`editorWrap ${!editorCollapse ? "maximized" : ""}`}
      style={{ display: !previewerCollapse ? "none" : "block" }}
    >
      <Toolbar
        title={"Editor"}
        editorCollapse={editorCollapse}
        setEditorCollapse={setEditorCollapse}
      />
      <textarea
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default Editor;
