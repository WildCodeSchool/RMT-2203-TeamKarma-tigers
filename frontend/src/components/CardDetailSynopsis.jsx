import { useState } from "react/cjs/react.production.min";
import "../styles/CardDetailSynopsis.css";

function ReadMore({ children, maxcharactercount = 100 }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxcharactercount) : text;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <p className="text-left">
      {resultString}
      <span onClick={toggleIsTruncated} aria-hidden="true">
        {isTruncated ? "...read more" : " show less"}
      </span>
    </p>
  );
}

export default function CardDetailSynopsis() {
  return (
    <div className="second-container">
      <h3>SYNOPSIS</h3>
      <ReadMore>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        laboriosam quas facilis maxime quibusdam earum harum iusto, quisquam
        aliquam voluptates praesentium ipsum debitis a nobis excepturi iure quia
        placeat Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis laudantium dignissimos sunt consequatur obcaecati ad, ipsam
        aliquam aliquid culpa. Saepe dolorem cum laudantium eaque facilis
        provident asperiores. Molestias, molestiae saepe.
      </ReadMore>
    </div>
  );
}
