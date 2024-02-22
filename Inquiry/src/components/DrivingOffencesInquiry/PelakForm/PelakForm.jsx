import React, { useState } from "react";
import { Pelak } from "../../Pelak/Pelak";
import { Button, Divider } from "@nextui-org/react";
import { Card } from "../../Card";
import { getOffenceByPelak } from "../../../api/get-offence-by-pelak";

const PelakForm = ({ handleData }) => {
  const [pelakNum, setPelakNum] = useState();

  const handlePlakChange = (value) => {
    setPelakNum(value);
  };

  const handleSubmit = async () => {
    const trimedPelak = pelakNum.split("-").join("");
    const response = await getOffenceByPelak(trimedPelak);

    handleData(response);
  };
  return (
    <>
      <Card>
        <Pelak onPelakChange={handlePlakChange} />
        <Button
          className="place-self-center mt-5 sm:mt-0"
          variant={pelakNum ? "solid" : "faded"}
          color={pelakNum ? "success" : "default"}
          disabled={pelakNum ? false : true}
          onClick={handleSubmit}
        >
          ثبت
        </Button>
      </Card>
      <div className="p-4 pt-6">
        <Divider />
      </div>
    </>
  );
};

export { PelakForm };
