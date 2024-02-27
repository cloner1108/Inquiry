import React, { useState } from "react";
import { NextUITable } from "./NextUITable";

const OffencesList = ({ rows, columns, isStriped }) => {
  return (
    <div>
      <NextUITable
        columns={columns}
        rows={rows}
        isStriped={isStriped}
        setOpenModal={"onOpen"}
        setModelContent={() => console.log("test")}
      />
    </div>
  );
};

export { OffencesList };
