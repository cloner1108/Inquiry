import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Button,
} from "@nextui-org/react";

const TableWithActions = ({
  rows,
  columns,
  isStriped,
  setModelContent,
  setOpenModal,
}) => {
  const [page, setPage] = useState(1);
  const [columnWidth, setColumnWidth] = useState();
  const [resizeStartData, setResizeStartData] = useState();

  const colRef = [];
  columns.forEach(() => {
    colRef.push(useRef(null));
  });

  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      let colWidth = [];
      columns.forEach(() => {
        colWidth.push(tableRef.current.offsetWidth / columns.length);
      });

      setColumnWidth(colWidth);
    }
  }, [tableRef.current]);

  const rowsPerPage = 5;

  const pages = Math.ceil(rows.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);

  const handleOperation = (data) => {
    setModelContent(data);
    setOpenModal();
  };

  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <div className="text-black p-2">. . .</div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onClick={() => handleOperation(item)}>
                  عملیات ۱
                </DropdownItem>
                <DropdownItem onClick={() => handleOperation(item)}>
                  عملیات ۲
                </DropdownItem>
                <DropdownItem onClick={() => handleOperation(item)}>
                  عملیات ۳
                </DropdownItem>
                <DropdownItem onClick={() => handleOperation(item)}>
                  عملیات ۴
                </DropdownItem>
                <DropdownItem onClick={() => handleOperation(item)}>
                  عملیات ۵
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const resizeMoveEvent = useCallback(
    (event) => {
      const minSize = 150;
      const delta = resizeStartData.point - event.pageX;
      const newColumnWidth = [...columnWidth];

      const first = newColumnWidth[resizeStartData.index] + delta;
      const second = newColumnWidth[resizeStartData.index + 1] - delta;

      if (first > minSize && second > minSize) {
        newColumnWidth[resizeStartData.index] = first;
        newColumnWidth[resizeStartData.index + 1] = second;
        setColumnWidth(newColumnWidth);
        colRef[resizeStartData.index].current.setAttribute(
          "style",
          `width:${first}px`
        );
        colRef[resizeStartData.index + 1].current.setAttribute(
          "style",
          `width:${second}px`
        );
      }
    },
    [resizeStartData, setColumnWidth, columnWidth, colRef]
  );

  const stopResize = (event) => {
    console.log("test");
    setResizeStartData();
    removeWindowsEvent();
  };

  const removeWindowsEvent = useCallback(() => {
    window.removeEventListener("mousemove", resizeMoveEvent);
    window.removeEventListener("mouseup", stopResize);
  }, [resizeMoveEvent, stopResize]);

  const addWindowsEvent = useCallback(() => {
    window.addEventListener("mousemove", resizeMoveEvent);
    window.addEventListener("mouseup", stopResize);
  }, [resizeMoveEvent, stopResize]);

  const handleMouseDown = useCallback(
    (event, colIndex) => {
      const startX = event.pageX;
      setResizeStartData({ point: startX, index: colIndex });
    },
    [setResizeStartData, addWindowsEvent]
  );
  useEffect(() => {
    if (resizeStartData) addWindowsEvent();
  }, [resizeStartData]);

  const handleMouseUp = (event) => {
    const entX = event.pageX;
    console.log("up", entX - resizeStartData.point);
  };

  return (
    <>
      <div>
        {columns.map((column, index) => (
          <div
            className="bg-slate-500 z-10 text-small top-16 py-3 relative inline-block  text-center shadow-xl text-black  first:rounded-l-none first:rounded-r-lg last:rounded-l-lg last:rounded-r-none "
            key={column.key}
            draggable={false}
            style={{
              width: columnWidth
                ? columnWidth[index] + "px"
                : 100 / columns.length + "%",
            }}
          >
            {column.label}
            {index + 1 == columns.length ? (
              ""
            ) : (
              <div
                className=" absolute left-0 top-1/2 -translate-y-1/2 bg-black w-[2px] hover:cursor-ew-resize rounded-3xl h-2/3"
                onMouseDown={(event) => handleMouseDown(event, index)}
              ></div>
            )}
          </div>
        ))}
      </div>
      <Table
        aria-label="Example table with dynamic content"
        isStriped={isStriped}
        ref={tableRef}
        bottomContent={
          pages ? (
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
          ) : null
        }
      >
        <TableHeader columns={columns}>
          {tableRef.current ? (
            columns.map((column, index) => (
              <TableColumn
                className="bg-slate-500 opacity-0 overflow-hidden h-0  border-collapse p-0 pt-10 text-center shadow-xl text-black  first:rounded-l-none first:rounded-r-lg last:rounded-l-lg last:rounded-r-none "
                key={column.key}
              >
                <div
                  style={{
                    width: tableRef.current.offsetWidth / columns.length + "px",
                  }}
                  ref={colRef[index]}
                >
                  {column.label}
                </div>
              </TableColumn>
            ))
          ) : (
            <TableColumn className="bg-slate-500 opacity-0 overflow-hidden h-0  border-collapse p-0 pt-10 text-center shadow-xl text-black  first:rounded-l-none first:rounded-r-lg last:rounded-l-lg last:rounded-r-none "></TableColumn>
          )}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell className="first:before:rounded-l-none first:before:rounded-r-lg last:before:rounded-l-lg last:before:rounded-r-none">
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export { TableWithActions };
