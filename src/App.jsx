import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className=" h-screen" style={{ backgroundColor: color }}>
        <div className="btns h-16 flex justify-center bg-black bottom-10 w-full inset-x-0 fixed text-white py-3">
          <div className="wrapper px-3 py-1 shadow-2xl rounded-3xl bg-white flex gap-6 flex-wrap items-center">
            <button
            onClick={()=>setColor("red")}
              className="px-3 py-1 text-white shadow-lg flex rounded-xl items-center justify-center "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
            onClick={function(){ setColor("green")}}
              className="px-3 py-1 text-white shadow-lg flex rounded-xl items-center justify-center "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
            onClick={function change(){setColor("blue")}}
              className="px-3 py-1 text-white shadow-lg flex rounded-xl items-center justify-center "
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
            onClick={()=>{setColor("salmon")}}
              className="px-3 py-1 text-white shadow-lg flex rounded-xl items-center justify-center "
              style={{ backgroundColor: "salmon" }}
            >
              salmon
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
