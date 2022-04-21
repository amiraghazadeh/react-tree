# React Access Tree

This project was created with [React js](https://reactjs.org).

### `How to use`

First of all you must install all dependencies of React Access Tree package with yarn command.\
After that you install dependencies, you can import `TreeBranch` component (as `ul` element) from package.\

### `TreeBranch`

```jsx
import ReactDOM from "react-dom";
import { TreeBranch, TreeItem } from "react-access-tree";

const App = () => {
  return <TreeBranch></TreeBranch>;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### `TreeItem`

Now you can add items in branch with `TreeItem` component.

```jsx
import ReactDOM from "react-dom";
import { TreeBranch, TreeItem } from "react-access-tree";

const App = () => {
  return (
    <TreeBranch>
      <TreeItem label="child1" />
      <TreeItem label="child2">
        <TreeItem label="child211" />
      </TreeItem>
    </TreeBranch>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
