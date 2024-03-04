import React, { useId } from "react";

const Select = ({ options, label, className = "", ...props }, ref) => {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50 ${className}`}
      ></select>
    </div>
  );
};

export default React.forwardRef(Select);
