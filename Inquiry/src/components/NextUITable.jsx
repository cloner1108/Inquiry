import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
} from "@nextui-org/react";

const NextUITable = ({ rows, columns, isStriped }) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 8;

  const pages = Math.ceil(rows.length / rowsPerPage);

  const items = React.useMemo(() => {
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
            " flex w-full justify-center"
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
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell className=" text-right first:before:rounded-l-none first:before:rounded-r-lg last:before:rounded-l-lg last:before:rounded-r-none">
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export { NextUITable };
