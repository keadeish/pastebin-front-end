import { PasteProps } from "../utils/types/PasteProps";

export function RecentPaste(props: PasteProps): JSX.Element {
  return (
    <div className="recent-paste">
      <div>{props.title ? <b>{props.title}</b> : <b>Unititled</b>}</div>
      <p style={{ fontStyle: "italic", color: "grey" }}>
        Submitted @ {props.time}
      </p>
      <p style={{ fontStyle: "italic", color: "grey" }}>
        By {props.name ? props.name : "Unamed"}
      </p>
      <p
        className="summary-text"
        onClick={(): void => {
          props.setFullPasteDisplayJSON({
            pasteid: props.pasteid,
            name: props.name,
            text: props.text,
            title: props.title,
            time: props.time,
          });
          if (props.renderPasteForm) props.setRenderPasteForm((prev) => !prev);
        }}
      >
        {props.text}
      </p>
    </div>
  );
}
