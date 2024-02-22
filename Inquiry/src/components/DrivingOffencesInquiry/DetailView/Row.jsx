import React from "react";

const Row = ({ title, value }) => {
  return (
    <div className="flex justify-between odd:bg-gray-200 rounded-md px-3 py-1 text-neutral-600">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export { Row };
