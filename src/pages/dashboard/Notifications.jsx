import { useState } from "react";

const Notifications = () => {
  const [message, setMessage] = useState("");

  const sendNotification = () => {
    alert(`Notification Sent: ${message}`);
    setMessage("");
  };

  return (
    <div>
      <h1>Notifications</h1>

      <textarea
        rows="5"
        cols="50"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Write notification..."
      />

      <br />
      <br />

      <button onClick={sendNotification}>
        Send Notification
      </button>
    </div>
  );
};

export default Notifications;
