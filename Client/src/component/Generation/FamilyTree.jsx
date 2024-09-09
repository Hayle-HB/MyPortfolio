// components/FamilyTree.js
import React, { useState } from "react";
import TreeNode from "./TreeNode";
import "./FamilyTree.css";

const FamilyTree = ({ node, setTree }) => {
  
  const handleAddChild = (parentId) => {
    const newName = prompt("Enter child name:");
    if (newName) {
      const newChild = { id: Date.now(), name: newName, children: [] };
      const addNode = (node) => {
        if (node.id === parentId) {
          node.children.push(newChild);
        } else {
          node.children.forEach((child) => addNode(child));
        }
      };
      const newTree = { ...node };
      console.log(newTree)
      addNode(newTree);
      setTree(newTree);
    }
  };

  return (
    <div className="family-tree">
      <TreeNode node={node} onAddChild={handleAddChild} />
    </div>
  );
};

export default FamilyTree;
