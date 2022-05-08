import React from "react";
import "./LeftBarButton.scss";


const LeftBarButton = (props) => {
  const { children, onClick, active } = props;
  const handleClick = (evt) => {
    onClick?.(evt);
  };
  return (
    <div
      className={`main-left-bar-button${!active?" no-active":""}`}
      onClick={handleClick}
      //style={active ? buttonStyles.active : buttonStyles.notActive}
    >
      {children}
    </div>
  );
};
export default LeftBarButton;
