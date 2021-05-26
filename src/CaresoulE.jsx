import React, { useEffect, useState } from "react";
import { CaresoulData } from "./CaresoulData";

const CaresoulE = () => {
  const n = 3;
  const [Current, setCurrent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === n - 1 ? 0 : current + 1));
    }, 2900);
    return () => clearInterval(interval);
  });

  return (
    <div className="showCase">
      <div className="showCase-cont">
        {CaresoulData.map((Data, index) => {
          return (
            <div key={index}>
              {index === Current && (
                <div className="trial-cont-heading">
                  <div className="trial-cont-heading-2">
                    <img className="image" src={Data.img} alt="some-pic" />
                    <p>{Data.heading}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CaresoulE;
