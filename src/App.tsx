import { useEffect, useState } from "react";
import axios from "axios";
import { Paste } from "./Components/Paste";
import { PastesJSON } from "./utils/types/PastesJSON";
import PasteForm from "./Components/PasteForm";
import FullPasteDisplay from "./Components/FullPasteDisplay";

function App(): JSX.Element {
  const [recentPastesArray, setRecentPastesArray] = useState<PastesJSON[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [renderPasteForm, setRenderPasteForm] = useState(true);
  const [FullPasteDisplayJSON, setFullPasteDisplayJSON] = useState<PastesJSON>(
    recentPastesArray[0]
  );

  useEffect(() => {
    axios
      .get("https://pastebin-back-end.herokuapp.com/pastes/recent10pastes")
      .then((res) => {
        setRecentPastesArray(res.data);
      });
  }, [refresh]);

  return (
    <div className="container">
      {renderPasteForm && <PasteForm setRefresh={setRefresh} />}
      {!renderPasteForm && <FullPasteDisplay {...FullPasteDisplayJSON} />}
      <div className="ten-pastes">
        {recentPastesArray.map((onePasteJSON: PastesJSON) => {
          return (
            <Paste
              key={onePasteJSON.pasteid}
              {...onePasteJSON}
              setFullPasteDisplayJSON={setFullPasteDisplayJSON}
              setRenderPasteForm={setRenderPasteForm}
              renderPasteForm={renderPasteForm}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
