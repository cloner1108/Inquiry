import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";

const NextUITable = ({ rows, columns, isStriped }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(rows.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);

  return (
    <Table
      aria-label="Example table with dynamic content"
      isStriped={isStriped}
      bottomContent={
        <div
          className={
            (items.length >= rows.length ? "hidden" : "") +
            " flex w-full justify-center "
          }
          dir="ltr"
        >
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            className="bg-slate-500 shadow-xl text-black text-right first:rounded-l-none first:rounded-r-lg last:rounded-l-lg last:rounded-r-none"
            key={column.key}
            dir="ltr"
          >
            <div dir="rtl">{column.label}</div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export { NextUITable };
