export const BASEURL = "https://pastebin-backend-g4p7.onrender.com";

export interface PasteFormProps {
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export interface PastesJSON {
  pasteid: string;
  name: string;
  text: string;
  title: string;
  time: string;
}
