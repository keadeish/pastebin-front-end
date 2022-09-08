import { useEffect, useState } from "react";
import axios from "axios";
import { Paste } from "./Paste";
import { pastesJSON } from "./utils/pasteList";

function App(): JSX.Element {
  const [titleText, setTitleText] = useState("");
  const [nameText, setNameText] = useState("");
  const [textArea, setTextArea] = useState("");
  const [recentPastesArray, setRecentPastesArray] = useState<pastesJSON[]>([]);

  useEffect(() => {
    axios.get("https://pastebin-back-end.herokuapp.com/pastes").then((res) => {
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://pastebin-back-end.herokuapp.com/pastes/recent10pastes")
      .then((res) => {
        setRecentPastesArray(res.data);
      });
  }, []);

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
        .then((res) => {
          axios
            .get(
              "https://pastebin-back-end.herokuapp.com/pastes/recent10pastes"
            )
            .then((res) => setRecentPastesArray(res.data));
          console.log("SUBMITTED!!");
          console.log(res.data);
          //add states here to update 10 pastes
        });
    }
  };

  return (
    <>
      <div className="whole-page">
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
          <input
            className="text-area"
            placeholder="Text Area..."
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          ></input>
          <button className="submit-button" onClick={() => postToBackend()}>
            SUBMIT
          </button>
        </div>
        <div className="ten-pastes">
          {recentPastesArray.map((onePasteJSON: pastesJSON) => {
            return (
              <Paste
                key={onePasteJSON.pasteid}
                title={onePasteJSON.title}
                time={onePasteJSON.time}
                pasteid={onePasteJSON.pasteid}
                name={onePasteJSON.name}
                text={onePasteJSON.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
