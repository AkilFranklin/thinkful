import React, {useState} from "react";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alerts, setAlerts] = useState(false);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribed(!subscribed);
          setSubscribedCount((subscribedCount) => subscribedCount + 1);
          setSubscribedCount((subscribedCount) => subscribedCount + 1);
          // setSubscribedCount(subscribedCount + 1);
          if (!alerts) setAlerts(true);
        }}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
    </section>
  );
}

export default App;