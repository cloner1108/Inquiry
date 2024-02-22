import React from "react";

import search from "../../assets/img/search.jpg";
import { Card } from "../Card";
import { Link } from "react-router-dom";

const EstelamCard = () => {
  return (
    <Link to="/estelam">
      <div className="px-5 border border-slate-100 rounded-2xl shadow-xl p-4">
        <div>
          <h2>استعلام خلافی خودرو</h2>

          <div className="image h-full">
            <img src={search} alt="search" className="w-full object-fit" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export { EstelamCard };
