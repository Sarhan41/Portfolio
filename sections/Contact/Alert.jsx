// Alert.js
import React, { useState, useEffect } from "react";

const Alert = ({ type, text, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Optional: If you want to perform any action when the alert closes.
    }, 5000); // Adjust the duration as needed (currently set to 5 seconds).

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <>
      {isVisible && (
        <div className="z-10 top-10 left-0 right-0 flex justify-center items-center rounded-lg text-xs sm:text-base ">
          <div
            className={`p-2 items-center  rounded-full leading-none 
          
                bg-light-200 text-black-200
            flex lg:inline-flex max-xs:flex-col`}
            role="alert"
          >
            <p
              className={`flex rounded-full uppercase px-2 py-1 font-semibold mr-3`}
            >
              {type === "danger" ? "Failed" : "Success"}
            </p>
            <p className="mr-2 text-center xs:text-left">{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
