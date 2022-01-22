import { v4 as uuid } from "uuid";

interface TreeItemProps {
  children?: string | React.ReactChild;
}

const TreeItem = (props: TreeItemProps) => {
  const id = uuid();
  const generateId = `tree-checkbox-${id}`;

  return (
    <li>
      <label htmlFor={generateId}>{props.children}</label>
      <input type="checkbox" id={generateId} name={generateId} />
    </li>
  );
};

export { TreeItem };
export default TreeItem;
