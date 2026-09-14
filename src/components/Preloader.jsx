"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {active ? (
        <div className='preloader'>
          <img
            src='/assets/images/logo-icon.png'
            alt='Ed Impact Africa Foundation'
            style={{ width: 64, height: 64 }}
          />
          <p>ED IMPACT AFRICA</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Preloader;
