import React from "react";

const RightComponent = () => (
    <div className="right-component">
        <h2>MY LINKS</h2>
        <p>Check out my LinkedIn and Github below: </p>
        <div className="right-links">
            <a target="_blank" href="https://www.linkedin.com/in/tashi-s-a868a2185/"><img src={window.linkedin} alt="linkedin" /></a>
            <a target="_blank" href="https://github.com/tasangpo"><img src={window.github} alt="github" /></a>
        </div>
    </div>
)

export default RightComponent;