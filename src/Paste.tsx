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
      <div>
        {(props.title) ? <b>{props.title}</b>: <b>Unititled</b> }
      </div>
      <p style={{fontStyle:'italic', color:"grey"}}>Submitted @ {props.time}</p>
      <p style={{fontStyle:'italic', color:"grey"}}>By {(props.title) ? props.title : 'Unamed' }</p>
      {open && <p onClick={() => setOpen((prev) => !prev)}> {props.text}</p>}
      {!open && <p className="summary-text" onClick={() => setOpen((prev) => !prev)}>{props.text}</p>}
    </div>
  );
}
