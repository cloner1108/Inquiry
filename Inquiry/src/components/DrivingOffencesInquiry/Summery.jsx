import { Divider } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Summery = ({ data }) => {
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    if (data) {
      let price = 0;
      data.offences.forEach((item) => (price += item.price));
      setTotalPrice(price);
    }
  }, [data]);

  return (
    <div className="mt-4 md:mt-0 flex flex-col justify-between px-5 border border-slate-100 rounded-2xl shadow-xl p-4 text-neutral-600 h-[500px]">
      <div className="car-info flex flex-col gap-3">
        <h3 className="car-info-header text-xl text-neutral-800">
          مشخصات خودرو
        </h3>
        <div className="flex justify-between">
          <span>{"مدل خودرو :"}</span>
          <span>{data ? data.car.model : ""}</span>
        </div>
        <div className="flex justify-between">
          <span>{"شماره پلاک :"}</span>
          {data ? (
            <div className=" flex gap-2" dir="ltr">
              <div>{data.car.pelak.slice(0, 2)}</div>
              <div>{data.car.pelak.slice(2, 3)}</div>
              <div>{data.car.pelak.slice(3, 6)}</div>
              <div>ایران</div>
              <div>{data.car.pelak.slice(6, 8)}</div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between">
          <span>{"سال تولید :"}</span>
          <span>{data ? data.car.year : ""}</span>
        </div>
        <div className="flex justify-between">
          <span>{"رنگ :"}</span>
          <span>{data ? data.car.color : ""}</span>
        </div>
      </div>
      <div className="p-4 pt-6">
        <Divider />
      </div>

      <div className="owner-info flex flex-col gap-3">
        <h3 className="car-info-header text-xl text-neutral-800">
          مشخصات مالک
        </h3>
        <div className="flex justify-between">
          <span>{"نام :"}</span>
          <span>{data ? data.owner.name : ""}</span>
        </div>
        <div className="flex justify-between">
          <span>{"شماره ملی :"}</span>
          <span>{data ? data.owner.IDNumber : ""}</span>
        </div>
      </div>
      <div className="p-4 pt-6">
        <Divider />
      </div>

      <div className="jarime flex flex-col gap-3">
        <div className="flex justify-between">
          <span>{"تعداد جریمه :"}</span>
          <span>{data ? data.offences.length : ""}</span>
        </div>
        <div className="flex justify-between">
          <span>{"هزینه کل جریمه ها :"}</span>
          <span className="text-red-600 text-2xl">
            {totalPrice.toLocaleString("fa-IR")}
          </span>
        </div>
      </div>
    </div>
  );
};

export { Summery };
