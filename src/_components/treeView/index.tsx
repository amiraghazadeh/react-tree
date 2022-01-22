interface TreeViewProps {
  title: string | React.ReactChild;
  children?: React.ReactNode;
}

const TreeView = (props: TreeViewProps) => {
  return (
    <ul>
      <span>{props.title}</span>
      {props.children}
    </ul>
  );
};

export { TreeView };
export default TreeView;
