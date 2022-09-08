import { useState } from "react";

// import { pastesJSON } from "./utils/pasteList";
interface PasteProps {
  pasteid: string;
  name: string;
  text: string;
  title: string;
  time: string;
}
export function Paste(props: PasteProps): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div className="recent-paste">
      <button onClick={() => setOpen((prev) => !prev)}>
        <b>Reveal {props.title}</b>
      </button>
      <p>{props.time}</p>
      {open && <div>{props.text}</div>}
    </div>
  );
}
