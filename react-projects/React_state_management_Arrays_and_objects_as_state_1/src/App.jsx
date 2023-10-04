import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timestamps, setTimestamps] = useState([]);
  const handleTimeAdd = () => setTimestamps([...timestamps, Date.now()])

  return (
    <main>
      <ClickTimes handleAddingTime={handleTimeAdd}/>
      <TimestampsDisplay timestamps={timestamps} />
    </main>
  )
}

export default App;
