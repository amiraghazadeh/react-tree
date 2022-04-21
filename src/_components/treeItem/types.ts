export interface TreeItemProps extends React.HTMLAttributes<HTMLLIElement> {
  label: React.ReactNode | string;
  expandIcon?: React.ReactNode;
  expandedIcon?: React.ReactNode;
  children?: React.ReactNode;
}
