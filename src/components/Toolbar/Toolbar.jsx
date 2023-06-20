function Toolbar({ title, editorCollapse, setEditorCollapse }) {
  return (
    <div className="toolbar">
      {title}
      <i
        className={`fa fa-${editorCollapse ? "arrows-alt" : "compress"}`}
        onClick={() => {
          setEditorCollapse(!editorCollapse);
        }}
      ></i>
    </div>
  );
}

export default Toolbar;
