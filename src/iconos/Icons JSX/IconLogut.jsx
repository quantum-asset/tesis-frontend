import * as React from "react";

const IconLogut = (props) => {
  const { color, size } = props;
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="white" fill-opacity="0.01" />
      <path
        d="M23.9917 6L6 6L6 42H24"
        stroke={color || "white"}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33 33L42 24L33 15"
        stroke={color || "white"}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 23.9917H42"
        stroke={color || "white"}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default IconLogut;
