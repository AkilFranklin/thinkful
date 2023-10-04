import React, {useState} from "react";

function ClickTimes({ handleAddingTime }) {
    return (
        <button onClick={handleAddingTime}>ClickTimes</button>
    );
}

export default ClickTimes;
