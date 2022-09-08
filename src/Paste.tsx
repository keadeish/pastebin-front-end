// import { pastesJSON } from "./utils/pasteList";
interface PasteProps {
  pasteid: string;
  name: string;
  text: string;
  title: string;
  time: string;
  onClick: (id: number) => void;
}
export function Paste(props: PasteProps): JSX.Element {
  return (
    <>
      <p onClick={() => props.onClick(parseInt(props.pasteid))}>
        <b>{props.title}</b>
      </p>
      <p>{props.time}</p>
    </>
  );
}
