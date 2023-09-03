import { useContext } from "react";
import { billContext } from "./MainSection";

export default function DisplaySide() {
  const { data, setData } = useContext(billContext);

  function resetHandler() {
    setData({
      ...data,
      totalBill: 0,
      tipPercentage: 0,
      peopleCount: 0,
      tipAmount: 0,
      total: 0,
    });
    document.querySelectorAll("input").forEach((x) => (x.value = ""));
    document.querySelectorAll(".tip-holder h1").forEach((x) => {
      x.style.background = "var(--very-dark-cyan)";
      x.style.color = "var(--light-greyish-cyan)";
    });
  }

  return (
    <div className="display-side">
      <div className="top-side">
        <div className="amount">
          <p>
            Tip Amount
            <br />
            <span>/ person</span>
          </p>
          <h1>${data.tipAmount}</h1>
        </div>
        <div className="total">
          <p>
            Total
            <br />
            <span>/ person</span>
          </p>
          <h1>${data.total}</h1>
        </div>
      </div>
      <div className="reset-holder">
        <button onClick={resetHandler}>RESET</button>
      </div>
    </div>
  );
}
