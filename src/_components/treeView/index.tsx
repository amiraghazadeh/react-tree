import { TreeViewProps } from "./types";

const TreeView = (props: TreeViewProps) => {
  const { children, ...rest } = props;

  return <ul {...rest}>{children}</ul>;
};

export { TreeView };
export default TreeView;
