import { TreeBranchProps } from "./types";
import "./styles.css";

const TreeBranch = (props: TreeBranchProps) => {
  const { children, ...rest } = props;

  return (
    <ul {...rest} className="rat-branch-root">
      {children}
    </ul>
  );
};

export { TreeBranch };
export default TreeBranch;
