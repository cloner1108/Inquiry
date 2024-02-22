import React, { useEffect, useRef, useState } from "react";
import img from "../../../src/assets/img/img.svg.png";

import { DropDown } from "./DropDown";

const Pelak = ({ onPelakChange }) => {
  const [first, setFirst] = useState("");
  const [letter, setLetter] = useState({ anchorKey: "ب", currentKey: "ب" });
  const [second, setSecond] = useState("");
  const [city, setCity] = useState("");

  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  const step4 = useRef(null);

  const isMountingRef = useRef(false);

  useEffect(() => {
    if (
      first.length == 2 &&
      letter.currentKey &&
      second.length == 3 &&
      city.length == 2
    ) {
      onPelakChange(`${first}-${letter.currentKey}-${second}-${city}`);
    } else {
      onPelakChange();
    }
  }, [first, letter, second, city]);

  useEffect(() => {
    if (first.length >= 2) {
      step2.current.click();
    }
  }, [first]);

  useEffect(() => {
    if (isMountingRef.current) {
      setTimeout(() => {
        step3.current.focus();
      }, 200);
    }
  }, [letter]);

  useEffect(() => {
    if (second.length >= 3) {
      step4.current.focus();
    }
    if (second.length == 0 && isMountingRef.current) {
      step2.current.click();
    }
  }, [second]);

  useEffect(() => {
    if (city.length == 0 && isMountingRef.current) {
      step3.current.focus();
    }
  }, [city]);

  useEffect(() => {
    step1.current.focus();
    setTimeout(() => {
      isMountingRef.current = true;
    }, 100);
  }, []);

  return (
    <div className="flex aspect-[5/1] w-[450px] max-sm:mx-auto border-4 overflow-hidden border-black border-r-large rounded-xl text-6xl">
      <div className="flex w-[90px] border-l-4 border-black" dir="ltr">
        <input
          className="w-[90px] focus:outline-none text-center"
          type="number"
          placeholder="- -"
          ref={step4}
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
          onKeyDown={(event) => {
            if (!event.target.value) {
              if (event.code == "Digit0") {
                event.preventDefault();
              }
            } else {
              if (
                event.target.value.length >= 2 &&
                event.key >= 0 &&
                event.key <= 9
              ) {
                event.preventDefault();
              }
            }
          }}
        />
      </div>
      <div className="flex-grow h-full">
        <div className="flex h-full" dir="ltr">
          <input
            className="w-[90px] focus:outline-none text-center"
            type="number"
            placeholder="- -"
            ref={step1}
            value={first}
            onChange={(event) => {
              setFirst(event.target.value);
            }}
            onKeyDown={(event) => {
              if (!event.target.value) {
                if (event.code == "Digit0") {
                  event.preventDefault();
                }
              } else {
                if (
                  event.target.value.length >= 2 &&
                  event.key >= 0 &&
                  event.key <= 9
                ) {
                  event.preventDefault();
                }
              }
            }}
          />
          <div className="w-[90px]">
            <DropDown letter={letter} setLetter={setLetter} buttonRef={step2} />
          </div>
          <input
            className="w-[135px] focus:outline-none text-center"
            type="number"
            placeholder="- - -"
            ref={step3}
            value={second}
            onChange={(event) => {
              setSecond(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.code == "Digit0") {
                event.preventDefault();
              }
              if (event.target.value) {
                if (
                  event.target.value.length >= 3 &&
                  event.key >= 0 &&
                  event.key <= 9
                ) {
                  event.preventDefault();
                }
              }
            }}
          />
        </div>
      </div>
      <div className=" bg-blue-900">
        <img src={img} alt="img" className="h-full" />
      </div>
    </div>
  );
};

export { Pelak };
