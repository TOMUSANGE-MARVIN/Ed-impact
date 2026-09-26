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
            src='/assets/images/logo-icon.webp'
            alt='Ed Impact Africa Foundation'
            style={{ width: 64, height: 64 }}
          />
          <p>ED IMPACT AFRICA FOUNDATION</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Preloader;
