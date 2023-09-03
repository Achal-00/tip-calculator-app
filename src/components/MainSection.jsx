import { createContext, useEffect, useState } from "react";
import CalculationSide from "./CalculationSide";
import DisplaySide from "./DisplaySide";

export const billContext = createContext();

export default function MainSection() {
  const [data, setData] = useState({
    totalBill: 0,
    tipPercentage: 0,
    peopleCount: 0,
    tipAmount: 0,
    total: 0,
  });

  useEffect(() => {
    if (
      data.totalBill !== 0 &&
      data.tipPercentage !== 0 &&
      data.peopleCount !== 0
    ) {
      setData({
        ...data,
        tipAmount: (
          (data.totalBill * (data.tipPercentage / 100)) /
          data.peopleCount
        ).toFixed(2),
      });
    }
  }, [data.totalBill, data.tipPercentage, data.peopleCount]);

  useEffect(() => {
    if (data.tipAmount !== 0) {
      setData({
        ...data,
        total: (
          parseFloat(data.totalBill) / parseFloat(data.peopleCount) +
          parseFloat(data.tipAmount)
        ).toFixed(2),
      });
    }
  }, [data.tipAmount]);

  return (
    <billContext.Provider value={{ data, setData }}>
      <section className="wrapper">
        <CalculationSide />
        <DisplaySide />
      </section>
    </billContext.Provider>
  );
}
