import React from "react";
import { Row } from "./Row";

const DetailView = ({ data }) => {
  return (
    <div>
      <Row title={"نوع"} value={data.kind} />
      <Row title={"سریال"} value={data.serialNumber} />
      <Row title={"مکان"} value={data.location} />
      <Row title={"شرح تخلف"} value={data.title} />
      <Row title={"کد افسر"} value={data.officer} />
    </div>
  );
};

export { DetailView };
