import React from "react";
import { EstelamCard } from "./EstelamCard";
import { AddCard } from "./AddCard";
import { AllOffencesCard } from "./AllOffencesCard";

const Land = () => {
  return (
    <div className="md:grid grid-cols-3 gap-5 pt-20 px-10 lg:px-48">
      <div className="aspect-square">
        <EstelamCard />
      </div>
      <div className="aspect-square">
        <AddCard />
      </div>
      <div className="aspect-square">
        <AllOffencesCard />
      </div>
    </div>
  );
};

export { Land };
