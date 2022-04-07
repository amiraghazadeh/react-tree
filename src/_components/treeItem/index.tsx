import { useCallback, useState } from "react";
import TreeView from "_components/treeView";
import ChevronIcon from "_assets/icons/chevron.svg";
import { v4 as uuid } from "uuid";
import "./styles.css";

interface TreeItemProps {
  label: React.ReactNode;
  children?: React.ReactNode;
}

const TreeItem = (props: TreeItemProps) => {
  const { label, children } = props;
  const id = uuid();
  const [expanded, setExpand] = useState<boolean>(false);

  const generateId = `tree-item-${id}`;

  const handleExpand = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      if (children) {
        // console.log("inja", children, expanded);

        e.stopPropagation();
        setExpand(!expanded);
      }
    },
    [children, expanded]
  );

  return (
    <li
      key={generateId}
      className="rat-tree-item-root"
      onClick={(e) => handleExpand(e)}
    >
      <div className="rat-tree-item-label">
        {children && (
          <img
            src={ChevronIcon}
            alt=""
            className={`rat-tree-item-icon ${
              expanded && "rat-tree-item-icon-expanded"
            }`}
          />
        )}
        <span>{label}</span>
      </div>
      {children && (
        <TreeView className={!expanded ? "rat-tree-item-not-expanded" : ""}>
          {console.log(label)}
          {children}
        </TreeView>
      )}
    </li>
  );
};

export { TreeItem };
export default TreeItem;
