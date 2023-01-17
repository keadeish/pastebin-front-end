import { PastesJSON } from "../utils/types";

function FullPasteDisplay(props: PastesJSON): JSX.Element {
  return (
    <div className="full-paste-container">
      <h1>{props.title ? <>{props.title}</> : <>Unititled</>}</h1>
      <h2 style={{ fontStyle: "italic", color: "grey" }}>
        Submitted @ {props.time}
      </h2>
      <h2 style={{ fontStyle: "italic", color: "grey" }}>
        By {props.name ? props.name : "Unamed"}
      </h2>
      <p
        style={{ overflowWrap: "anywhere", overflow: "auto", height: "700px" }}
      >
        {" "}
        {props.text}
      </p>
    </div>
  );
}

export default FullPasteDisplay;
