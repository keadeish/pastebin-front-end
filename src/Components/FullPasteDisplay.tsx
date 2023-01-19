import { PastesJSON } from "../utils/types";

function FullPasteDisplay(props: PastesJSON): JSX.Element {
  const copyToClipboard = (code: string): void => {
    navigator.clipboard.writeText(code).then(() => {
      // code copied to clipboard
    }, (err) => {
      console.log('Error: ', err);
    });
  };
  
  return (
    <div className="full-paste-container">
      <h1>{props.title ? <>{props.title}</> : <>Unititled</>}</h1>
      <h2 style={{ fontStyle: "italic", color: "grey" }}>
        Submitted @ {props.time}
      </h2>
      <h2 style={{ fontStyle: "italic", color: "grey" }}>
        By {props.name ? props.name : "Unamed"}
      </h2>
      <div
        className="full-display-text"
      >        
        <button className="copy-button" onClick={() => copyToClipboard(props.text)}>
          Copy
        </button>
        {props.text}
      </div>
    </div>
  );
}

export default FullPasteDisplay;
