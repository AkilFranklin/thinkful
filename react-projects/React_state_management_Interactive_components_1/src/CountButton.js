import React, { useState } from "react";

function CountButton () {
    const [count, setIncreaseCount] = useState(0);

    return (
        <button onClick={() => setIncreaseCount(count + 1)}>
            Click Count: {count}
        </button>
    )
}

export default CountButton;