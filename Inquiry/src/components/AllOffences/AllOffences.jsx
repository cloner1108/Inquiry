import React, { useEffect, useState } from "react";
import { NextUITable } from "../NextUITable";
import { getOffenceList } from "../../api/get-offence-list.api";

const AllOffences = () => {
  const [offenceList, setOffeenceList] = useState([]);

  const getList = async () => {
    const data = await getOffenceList();
    const numAdded = data.map((item, index) => {
      return {
        ...item,
        price: item.price.toLocaleString("fa-IR") + " تومان",
        index: index + 1,
      };
    });

    setOffeenceList(numAdded);
  };

  useEffect(() => {
    getList();
  }, []);

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
  return <NextUITable columns={columns} rows={offenceList} isStriped={true} />;
};

export { AllOffences };
