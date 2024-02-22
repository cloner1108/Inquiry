import { Route, Routes } from "react-router-dom";
import "./App.css";

import { MainLayout } from "./components/MainLayout/MainLayout";
import { ListView } from "./components/DrivingOffencesInquiry/ListView";

import { Land } from "./components/Land/Land";
import { AddForm } from "./components/AddNewDrivinngOffence/AddForm";
import { AllOffences } from "./components/AllOffences/AllOffences";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Land />}></Route>
          <Route path="/estelam" element={<ListView />}></Route>
          <Route path="/add" element={<AddForm />}></Route>
          <Route path="/all" element={<AllOffences />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
