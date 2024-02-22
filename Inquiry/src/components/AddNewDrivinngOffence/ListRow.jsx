import React from "react";

const ListRow = ({ title, price, count }) => {
  return (
    <div className="flex justify-between odd:bg-gray-300 rounded-md px-3 py-1">
      <div className="flex gap-2">
        <div className="count">{count}</div>
        <div className="title">{title}</div>
      </div>
      <div className="price">مبلغ جریمه : {price} تومان</div>
    </div>
  );
};

export { ListRow };
