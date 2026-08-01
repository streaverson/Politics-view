import { useState } from "react";
import "./App.css";
import SimpleChart from "./SimpleChart";
function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="App">
      <div>
        <h1 className="title">نمودار جایگاه سیاسی شما</h1>
      </div>
      <SimpleChart userPosition={position} />

      {/* <button onClick={() => setPosition({ x: 9, y: 3 })}>
        تغییر موقعیت برای تست
      </button> */}
    </div>
  );
}

export default App;
