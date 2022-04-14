import "../styles/CardDetailSynopsis.css";
import ReadMore from "./ReadMoreButton";

export default function CardDetailSynopsis() {
  return (
    <div className="detailed-container">
      <div className="synopsis-container">
        <h3>SYNOPSIS</h3>
        <ReadMore>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          laboriosam quas facilis maxime quibusdam earum harum iusto, quisquam
          aliquam voluptates praesentium ipsum debitis a nobis excepturi iure
          quia placeat Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis laudantium dignissimos sunt consequatur obcaecati ad,
          ipsam aliquam aliquid culpa. Saepe dolorem cum laudantium eaque
          facilis provident asperiores. Molestias, molestiae saepe.
        </ReadMore>
      </div>
      <div className="utility-container">
        <div className="parent">
          <h3 className="release-date">
            {" "}
            RELEASE DATE <br /> <h5>CONTENT</h5>
          </h3>
          <h3 className="genre">
            {" "}
            GENRE <br /> <h5>CONTENT</h5>
          </h3>
          <h3 className="popularity">
            {" "}
            POPULARITY <br /> <h5>CONTENT</h5>
          </h3>
          <h3 className="revenue">
            {" "}
            REVENUE <br /> <h5>CONTENT</h5>
          </h3>
        </div>
      </div>
    </div>
  );
}
