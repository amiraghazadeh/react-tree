import { useCallback, useState } from "react";
import TreeView from "_components/treeView";
import ChevronIcon from "_assets/icons/chevron.svg";
import { v4 as uuid } from "uuid";
import { TreeItemProps } from "./types";
import "./styles.css";

const TreeItem = (props: TreeItemProps) => {
  const { label, children } = props;
  const id = uuid();
  const [expanded, setExpand] = useState<boolean>(false);

  const generateId = `tree-item-${id}`;

  const handleExpand = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (children) {
        e.stopPropagation();
        setExpand((prev) => !prev);
      }
    },
    [children]
  );

  return (
    <li key={generateId} className="rat-tree-item-root">
      <div
        className={`rat-tree-item-label ${children && "has-children"}`}
        onClick={handleExpand}
      >
        <span className={`rat-tree-item-icon ${expanded && "expanded"}`}>
          {children && <img src={ChevronIcon} alt="" />}
        </span>
        <span>{label}</span>
      </div>
      {children && (
        <TreeView className={!expanded ? "rat-tree-item-not-expanded" : ""}>
          {children}
        </TreeView>
      )}
    </li>
  );
};

export { TreeItem };
export default TreeItem;
