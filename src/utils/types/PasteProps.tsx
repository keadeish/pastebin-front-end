import { PastesJSON } from "./PastesJSON";

export interface PasteProps {
  pasteid: string;
  name: string;
  text: string;
  title: string;
  time: string;
  setFullPasteDisplayJSON: React.Dispatch<React.SetStateAction<PastesJSON>>;
  setRenderPasteForm: React.Dispatch<React.SetStateAction<boolean>>;
  renderPasteForm: boolean;
}
