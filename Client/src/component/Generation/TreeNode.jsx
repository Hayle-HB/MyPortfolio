// components/TreeNode.js
import React, { useState } from "react";
import "./TreeNode.css";

const TreeNode = ({ node, onAddChild }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="tree-node">
      <div className="node-content">
        <span onClick={() => setShowDetails(!showDetails)}>
          <h2>{node.name}</h2>
        </span>
        <button onClick={() => onAddChild(node.id)}>+</button>
        <button>#</button>
        <button onClick={() => alert(JSON.stringify(node, null, 2))}>D</button>
      </div>
      {showDetails && node.children.length > 0 && (
        <div className={`children`}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onAddChild={onAddChild} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
