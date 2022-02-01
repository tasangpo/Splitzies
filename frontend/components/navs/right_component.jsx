import React from "react";

const RightComponent = () => (
    <div className="right-component">
        <h2>SPLITWISE ON THE GO</h2>
        <p>Get the free Splitwise app and add IOUs from anywhere: </p>
        <img id="app-img" src={window.appStore} alt="app-store" />
        <img src={window.googlePlay} alt="google-play" />
    </div>
)

export default RightComponent;