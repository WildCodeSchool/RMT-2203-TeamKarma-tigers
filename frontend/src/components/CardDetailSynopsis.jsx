import "../styles/CardDetailSynopsis.css";
import ReadMore from "./ReadMoreButton";

export default function CardDetailSynopsis() {
  return (
    <div className="detailed-container">
      <div className="synopsis-container">
        <h3>SYNOPSIS</h3>
        <ReadMore>
          A ticking-time-bomb insomniac and a slippery soap salesman channel
          primal male aggression into a shocking new form of therapy. Their
          concept catches on, with underground &quotfight clubs&quot forming in
          every town, until an eccentric gets in the way and ignites an
          out-of-control spiral toward oblivion.
        </ReadMore>
      </div>
      <div className="utility-container">
        <div className="parent">
          <h3 className="release-date">
            {" "}
            RELEASE DATE <br /> <h5>1999-10-15</h5>
          </h3>
          <h3 className="genre">
            {" "}
            GENRE <br /> <h5>Drama</h5>
          </h3>
          <h3 className="popularity">
            {" "}
            POPULARITY <br /> <h5>52.214</h5>
          </h3>
          <h3 className="revenue">
            {" "}
            REVENUE <br /> <h5>100853753</h5>
          </h3>
        </div>
      </div>
    </div>
  );
}
