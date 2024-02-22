import React from "react";

const Card = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row align-middle justify-center sm:justify-between border border-slate-100 rounded-2xl shadow-xl py-4 sm:p-4">
      {children}
    </div>
  );
};

export { Card };
