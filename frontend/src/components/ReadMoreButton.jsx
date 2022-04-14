import { useState } from "react";
import "../styles/ReadMoreButton.css";

export default function ReadMore({ children, maxcharactercount = 100 }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxcharactercount) : text;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <p className="text-left">
      {resultString}
      <span
        className="text-read-more"
        onClick={toggleIsTruncated}
        onKeyPress={toggleIsTruncated}
        role="button"
        tabIndex={0}
      >
        {isTruncated ? " ...read more" : " show less"}
      </span>
    </p>
  );
}
