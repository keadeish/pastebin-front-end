import axios from "axios";
import { useState } from "react";
import { PasteFormProps } from "../utils/types/PasteFormProps";

function PasteForm(props: PasteFormProps): JSX.Element {
  const [titleText, setTitleText] = useState("");
  const [nameText, setNameText] = useState("");
  const [textArea, setTextArea] = useState("");

  const postToBackend = () => {
    if (textArea === "") {
      console.log("alert");
    } else {
      axios
        .post("https://pastebin-back-end.herokuapp.com/pastes", {
          name: nameText,
          text: textArea,
          title: titleText,
          time: "NOW()",
        })
        .then(() => {
          axios
            .get(
              "https://pastebin-back-end.herokuapp.com/pastes/recent10pastes"
            )
            .then(() => props.setRefresh((prev) => !prev));
        });
    }
  };
  return (
    <div className="new-paste-form">
      <input
        className="title-text"
        placeholder="Title..."
        value={titleText}
        onChange={(e) => setTitleText(e.target.value)}
      ></input>
      <input
        className="name-text"
        placeholder="Name..."
        value={nameText}
        onChange={(e) => setNameText(e.target.value)}
      ></input>
      <textarea
        className="text-area"
        placeholder="Text Area..."
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      ></textarea>
      <button className="submit-button" onClick={() => postToBackend()}>
        SUBMIT
      </button>
    </div>
  );
}

export default PasteForm;
