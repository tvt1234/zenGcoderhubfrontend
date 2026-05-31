import { useState } from "react";

const Settings = () => {
  const [siteName, setSiteName] =
    useState("My LMS");

  const saveSettings = () => {
    alert("Settings Saved");
  };

  return (
    <div>
      <h1>System Settings</h1>

      <label>
        Site Name:
      </label>

      <br />

      <input
        type="text"
        value={siteName}
        onChange={(e) =>
          setSiteName(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={saveSettings}>
        Save
      </button>
    </div>
  );
};

export default Settings;
