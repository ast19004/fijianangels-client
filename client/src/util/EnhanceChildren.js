import React from "react";

const EnhanceChildren = (props) => {
  return React.Children.map(props.children, (child) => {
    // Clone each child and add the enhancing properties
    return React.cloneElement(child, {
      ...props,
    });
  });
};

export default EnhanceChildren;
