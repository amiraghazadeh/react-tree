import TreeView from "./treeView";
import TreeItem from "./treeItem";

const Tree = () => {
  return (
    <div>
      <TreeView title="parent">
        <TreeItem>child1</TreeItem>
        <TreeItem>child2</TreeItem>
        <TreeItem>child3</TreeItem>
        <TreeItem>child4</TreeItem>
      </TreeView>
    </div>
  );
};

export { Tree };
export default Tree;
