import { useEffect, useState } from "react";
import axios from "axios";
import { Paste } from "./Components/Paste";
import { pastesJSON } from "./utils/types/pasteList";
import PasteForm from "./Components/PasteForm";

function App(): JSX.Element {
  
  const [recentPastesArray, setRecentPastesArray] = useState<pastesJSON[]>([]);
  const [refresh, setRefresh] = useState(false)
  const [renderPasteForm, setRenderPasteForm] = useState(true)

  useEffect(() => {
    axios
      .get("https://pastebin-back-end.herokuapp.com/pastes/recent10pastes")
      .then((res) => {
        setRecentPastesArray(res.data);
      });
  }, [refresh]);

  return (
    <div className="container">          
        {renderPasteForm && <PasteForm setRefresh={setRefresh}/>}
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
  );
}

export default App;
