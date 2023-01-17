import axios from "axios";
import { useState } from "react";
import { BASEURL } from "../utils/types";
import { PasteFormProps } from "../utils/types";

function PasteForm(props: PasteFormProps): JSX.Element {
  const [titleText, setTitleText] = useState("");
  const [nameText, setNameText] = useState("");
  const [textArea, setTextArea] = useState("");

  const postToBackend = () => {
    if (textArea === "") {
      console.log("alert");
    } else {
      axios
        .post(`${BASEURL}/pastes`, {
          name: nameText,
          text: textArea,
          title: titleText,
          time: "NOW()",
        })
        .then(() => {
          axios
            .get(
              `${BASEURL}/pastes/recent10pastes`
            )
            .then(() => props.setRefresh((prev) => !prev));
        });
    }
  };
  return (
    <div className="new-paste-form">
      <h2>Submit a paste!</h2>
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
