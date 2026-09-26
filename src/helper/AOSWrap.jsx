"use client";
import InitializeAOS from "./InitializeAOS";

// Previously this loaded its children through next/dynamic with ssr: false,
// which made every page wrapped in it render client-side only (an empty HTML
// shell until all JS had loaded). AOS only needs initialising after mount.
const AOSWrap = ({ children }) => {
  return (
    <>
      <InitializeAOS />
      {children}
    </>
  );
};

export default AOSWrap;
