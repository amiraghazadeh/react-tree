import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import { ReactComponent as ChevronIcon } from "_assets/icons/chevron.svg";
import { TreeBranch } from "_components/treeBranch";
import { TreeItemProps } from "./types";
import "./styles.css";

const TreeItem = (props: TreeItemProps) => {
  const { label, expandIcon, expandedIcon, children } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>("fadeInDown");

  const id = uuid();
  const generateId = `tree-item-${id}`;

  const icon = expanded ? expandedIcon : expandIcon;

  const handleLabelClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!expanded) {
        setExpanded(true);
        setAnimation("fadeInDown");
      } else {
        setAnimation("fadeOutUp");
      }
    },
    [expanded]
  );

  const handleAnimation = useCallback(
    (e: React.AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === "fadeOutUp") setExpanded(false);
    },
    []
  );

  return (
    <li key={generateId}>
      <div
        className="rat-item-label"
        onClick={handleLabelClick}
        style={children ? { cursor: "pointer" } : undefined}
      >
        <span className="icon">{children && icon}</span>
        <span className="title">{label}</span>
      </div>
      {children && (
        <div
          className={`rat-item-content animation animation-${animation}`}
          onAnimationEnd={handleAnimation}
        >
          {expanded && <TreeBranch>{children}</TreeBranch>}
        </div>
      )}
    </li>
  );
};

TreeItem.defaultProps = {
  expandIcon: <ChevronIcon />,
  expandedIcon: <ChevronIcon style={{ transform: "rotate(0deg)" }} />,
};

export { TreeItem };
export default TreeItem;
