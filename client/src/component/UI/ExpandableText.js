import React, { useState } from "react";
import Typography from "@mui/material/Typography";

function ExpandableText({ text, maxChars }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div>
      <Typography variant="body1" component="p">
        {expanded ? text : text.slice(0, maxChars)}
        {text.length > maxChars && !expanded && "... "}
        {text.length > maxChars && (
          <span
            onClick={handleClick}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Read more
          </span>
        )}
      </Typography>
    </div>
  );
}

export default ExpandableText;
