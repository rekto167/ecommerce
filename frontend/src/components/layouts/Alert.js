import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Alert = () => {
  return (
    <div
      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
      role="alert"
    >
      <div className="flex">
        <div className="py-1 my-auto">
          {/* <FontAwesomeIcon icon="fa-s" />  */}
          <FontAwesomeIcon
            icon={faCircleExclamation}
            size="xl"
            className="text-red-500 mr-5"
          />
        </div>
        <div>
          <p className="font-bold">Our privacy policy has changed</p>
          <p className="text-sm">
            Make sure you know how these changes affect you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
