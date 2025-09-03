import React from "react";

const Settings = () => {
  return (
    <div className="auth-container settings-container">
      <h2>Account Settings</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Settings;
