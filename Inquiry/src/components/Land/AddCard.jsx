import React from "react";
import add from "../../assets/img/add.jpg";
import { Link } from "react-router-dom";

const AddCard = () => {
  return (
    <Link to="/add">
      <div className="px-5 border border-slate-100 rounded-2xl shadow-xl p-4">
        <div>
          <h2>ثبت تخلف جدید</h2>
          <div className="image h-full">
            <img
              src={add}
              alt="search"
              className="w-full aspect-square object-center"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export { AddCard };
