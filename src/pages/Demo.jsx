import React from "react";
import { useCollapse } from "react-collapsed";

function Demo() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="container">
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
      <button {...getToggleProps()}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}

export default Demo;
