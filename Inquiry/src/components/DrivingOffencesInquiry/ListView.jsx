import { Accordion, AccordionItem } from "@nextui-org/react";
import React, { useState } from "react";

import { Summery } from "./Summery";
import { PelakForm } from "./PelakForm/PelakForm";
import { DetailView } from "./DetailView/DetailView";
import { getOffenceByPelak } from "../../api/get-offence-by-pelak";

const ListView = () => {
  const [data, setData] = useState();
  const handleData = (response) => {
    setData(response);
  };
  return (
    <>
      <PelakForm handleData={handleData} />
      <div className="md:grid grid-cols-4 justify-between px-5 border border-slate-100 rounded-2xl shadow-xl p-4">
        <div className="col-span-3">
          <Accordion
            variant="splitted"
            itemClasses={{ titleWrapper: "flex-row justify-between" }}
          >
            {data
              ? data.offences.map((item, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      aria-label={item.title}
                      title={item.title}
                      subtitle={
                        <div className="flex gap-4">
                          <p className="price leading-7 ml-5">
                            {item.price.toLocaleString("fa-IR")} تومان
                          </p>
                          <p className="date leading-7">
                            {new Intl.DateTimeFormat("fa-IR").format()}
                          </p>
                          <p className="time leading-7">
                            {new Date(item.time).toLocaleTimeString("fa-IR")}
                          </p>
                        </div>
                      }
                    >
                      <DetailView data={item} />
                    </AccordionItem>
                  );
                })
              : ""}
          </Accordion>
        </div>
        <Summery data={data} />
      </div>
    </>
  );
};

export { ListView };
