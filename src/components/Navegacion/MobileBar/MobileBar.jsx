import * as React from "react";

const MobileBar = (props) => {
  const { children, active, onClose } = props;
  return (
    <div
      className={`quantum-mobile-bar-container${active ? " active" : ""}`}
      onClick={() => onClose?.()}
    >
      <div className="quantum-mobile-bar">{children}</div>
    </div>
  );
};
export default MobileBar;
