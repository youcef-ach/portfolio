import React from "react";

function skillCard({ logo, order }) {
  return (
    <div
      className="skillCard"
      style={{ animationDelay: `${order + 1}s` }}
    >
      <div className="skillInner darkGrayBg">
        <img className="skillLogo" src={logo} />
        <div className="whiteShadow"></div>
      </div>
    </div>
  );
}

export default skillCard;
