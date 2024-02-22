import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const DropDown = ({ letter, setLetter, buttonRef }) => {
  const keyList = [
    { key: "الف", element: "الف" },
    { key: "ب", element: "ب" },
    { key: "پ", element: "پ" },
    { key: "ت", element: "ت" },
    { key: "ث", element: "ث" },
    { key: "ج", element: "ج" },
    { key: "چ", element: "چ" },
    { key: "ح", element: "ح" },
    { key: "خ", element: "خ" },
    { key: "د", element: "د" },
    { key: "ذ", element: "ذ" },
    { key: "ر", element: "ر" },
    { key: "ز", element: "ز" },
    { key: "ژ", element: "جانباز" },
    { key: "س", element: "س" },
    { key: "ش", element: "ش" },
    { key: "ص", element: "ص" },
    { key: "ض", element: "ض" },
    { key: "ط", element: "ط" },
    { key: "ظ", element: "ظ" },
    { key: "ع", element: "ع" },
    { key: "غ", element: "غ" },
    { key: "ف", element: "ف" },
    { key: "ق", element: "ق" },
    { key: "ک", element: "ک" },
    { key: "گ", element: "گ" },
    { key: "ل", element: "ل" },
    { key: "م", element: "م" },
    { key: "ن", element: "ن" },
    { key: "و", element: "و" },
    { key: "ه", element: "ه" },
    { key: "ی", element: "ی" },
    { key: "t", element: "تشریفات" },
    { key: "d", element: "دیپلمات" },
    { key: "s", element: "سفارت" },
  ];

  return (
    <Dropdown>
      <DropdownTrigger className="w-full">
        <Button
          ref={buttonRef}
          variant=""
          className="capitalize h-full focus:outline-none text-6xl"
        >
          {letter.currentKey}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="h-52 overflow-y-auto"
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={letter.currentKey}
        onSelectionChange={setLetter}
      >
        {keyList.map((item) => (
          <DropdownItem key={item.key}>{item.element}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export { DropDown };
