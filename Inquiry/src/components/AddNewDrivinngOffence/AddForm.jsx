import React, { useEffect, useRef, useState } from "react";
import { Pelak } from "../Pelak/Pelak";
import { MultipleSelectDropDow } from "./MultipleSelectDropDow";
import { Button, Input } from "@nextui-org/react";
import { List } from "./List";
import { getOffenceList } from "../../api/get-offence-list.api";
import { createOffence } from "../../api/create-offence.api";

const AddForm = () => {
  const [pelakNum, setPelakNum] = useState();
  const [offenceList, setOffeenceList] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  const handlePlakChange = (value) => {
    setPelakNum(value);
  };
  const [address, setAddress] = useState("بلوار اندرزگو");
  const addressRef = useRef(null);

  const handleOnClear = () => {
    setAddress("");
  };

  const getList = async () => {
    const data = await getOffenceList();

    setOffeenceList(data);
  };

  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    const temp = [];
    selectedKeys.forEach((key) => {
      const item = offenceList.find((item) => item.key === key);
      temp.push(item);
    });

    setSelectedValue(temp);
  }, [selectedKeys]);

  const handleSubmite = async () => {
    const offence = selectedValue.map((item) => {
      return {
        kind: "تسلیمی",
        serialNumber: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        location: address,
        officer: 1234,
        time: new Date(),
        price: item.price,
        title: item.title,
      };
    });
    const trimedPelak = pelakNum.split("-").join("");
    const response = await createOffence(offence, trimedPelak);
    if (response) {
      setOffeenceList([]);
      setSelectedValue([]);
      setSelectedKeys(new Set());
    }
  };
  return (
    <div className="xl:grid xl:grid-cols-5 gap-4 border border-slate-100 rounded-2xl shadow-xl py-4 sm:p-4 mb-6">
      <div className="flex justify-center xl:col-span-2 px-5 border border-slate-100 rounded-2xl shadow-xl p-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <Pelak onPelakChange={handlePlakChange} />
          </div>
          <div>
            <MultipleSelectDropDow
              data={offenceList}
              selectedKeys={selectedKeys}
              setSelectedKeys={setSelectedKeys}
            />
          </div>

          <Input
            isRequired
            isClearable
            type="text"
            label="آدرس محل تخلف"
            value={address}
            onClear={handleOnClear}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            ref={addressRef}
          />
        </div>
      </div>
      <div className="xl:col-span-3 px-5 border border-slate-100 rounded-2xl shadow-xl p-4">
        <List data={selectedValue} />
      </div>
      <Button
        className="place-self-center mt-5 xl:mt-0 "
        variant={pelakNum && address ? "solid" : "faded"}
        color={pelakNum && address ? "success" : "default"}
        disabled={pelakNum && address ? false : true}
        onClick={handleSubmite}
      >
        ثبت
      </Button>
    </div>
  );
};

export { AddForm };
