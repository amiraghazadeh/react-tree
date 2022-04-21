import TreeBranch from "./treeBranch";
import TreeItem from "./treeItem";

const Tree = () => {
  return (
    <TreeBranch>
      <TreeItem label="child1"></TreeItem>
      <TreeItem label="child2">
        <TreeItem label="child21">
          <TreeItem label="child211" />
          <TreeItem label="child212" />
          <TreeItem label="child213" />
        </TreeItem>
        <TreeItem label="child22" />
      </TreeItem>
      <TreeItem label="child3"></TreeItem>
      <TreeItem label="child4"></TreeItem>
      <TreeItem label="child5"></TreeItem>
      <TreeItem label="child6"></TreeItem>
      <TreeItem label="child7"></TreeItem>
      <TreeItem label="child8"></TreeItem>
    </TreeBranch>
  );
};

export { Tree };
export default Tree;
