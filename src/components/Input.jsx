import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref,
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 inline-block pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50 ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
