import React from "react";
import { NextUITable } from "./NextUITable";

const OffencesList = ({ rows, columns, isStriped }) => {
  return <NextUITable columns={columns} rows={rows} isStriped={isStriped} />;
};

export { OffencesList };
