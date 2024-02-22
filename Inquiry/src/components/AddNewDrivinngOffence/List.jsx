import React, { useMemo } from "react";
import { ListRow } from "./ListRow";
import { OffencesList } from "../OffencesList";

const List = ({ handleSelectedValue, data }) => {
  const list = Array.from(data);
  // const rows = [
  //   {
  //     key: "1",
  //     count: "1",
  //     title: "سرععت غیر مجاز",
  //     price: "۲۰۰۰ تومان",
  //   },
  //   {
  //     key: "2",
  //     count: "2",
  //     title: "پارک ممنوع",
  //     price: "۱۰۰۰۰ تومان",
  //   },
  //   {
  //     key: "3",
  //     count: "3",
  //     title: "سبقت غیر مجاز",
  //     price: "۱۲۰۰۰ تومان",
  //   },
  //   {
  //     key: "4",
  //     count: "4",
  //     title: "حرکت نمایشی",
  //     price: "۱۳۰۰۰ تومان",
  //   },
  // ];

  const columns = [
    {
      key: "index",
      label: "ردیف",
    },
    {
      key: "title",
      label: "عنوان",
    },
    {
      key: "price",
      label: "مبلغ جریمه",
    },
  ];

  const rows = useMemo(() => {
    const detailedList = data.map((item, index) => {
      return { ...item, price: item.price + " تومان", index: index + 1 };
    });
    return detailedList;
  }, [data]);

  return <OffencesList columns={columns} rows={rows} isStriped={true} />;
};

export { List };
