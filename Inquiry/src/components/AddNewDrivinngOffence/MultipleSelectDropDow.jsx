import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const MultipleSelectDropDow = ({ data, selectedKeys, setSelectedKeys }) => {
  const selectedValue = Array.from(selectedKeys);

  return (
    <Dropdown className="w-full">
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize my-5 w-[450px]">
          {selectedValue.length > 0
            ? `تعداد ${Array.from(selectedKeys).length} جریمه انتخاب شده است`
            : "عنوان جریمه"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {data.map((item) => (
          <DropdownItem key={item.key}>{item.title}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export { MultipleSelectDropDow };
