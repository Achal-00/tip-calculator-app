import { useContext, useEffect } from "react";
import { billContext } from "./MainSection";

export default function CalculationSide() {
  const { data, setData } = useContext(billContext);

  useEffect(() => {
    document.querySelectorAll(".tip-holder h1").forEach((x) => {
      x.addEventListener("click", (y) => {
        x.style.background = "var(--strong-cyan)";
        x.style.color = "var(--very-dark-cyan)";
        document.querySelector(".tip-holder input").value = "";
        document.querySelectorAll(".tip-holder h1").forEach((remaining) => {
          if (remaining !== x) {
            remaining.style.background = "var(--very-dark-cyan)";
            remaining.style.color = "var(--light-greyish-cyan)";
          }
        });
      });
    });
  }, []);

  return (
    <div className="calculation-side">
      <div className="bill">
        <p>Bill</p>
        <div className="input-holder">
          <input
            type="number"
            placeholder="0"
            onChange={(e) =>
              setData({
                ...data,
                totalBill: e.currentTarget.value,
              })
            }
          />
          <div className="dollar-holder">
            <img src="icon-dollar.svg" alt="dollar" />
          </div>
        </div>
      </div>
      <div className="tip">
        <p>Select Tip %</p>
        <div className="tip-holder">
          <h1
            onClick={() => {
              setData({
                ...data,
                tipPercentage: 5,
              });
            }}
          >
            5%
          </h1>
          <h1
            onClick={() => {
              setData({
                ...data,
                tipPercentage: 10,
              });
            }}
          >
            10%
          </h1>
          <h1
            onClick={() => {
              setData({
                ...data,
                tipPercentage: 15,
              });
            }}
          >
            15%
          </h1>
          <h1
            onClick={() => {
              setData({
                ...data,
                tipPercentage: 25,
              });
            }}
          >
            25%
          </h1>
          <h1
            onClick={() => {
              setData({
                ...data,
                tipPercentage: 50,
              });
            }}
          >
            50%
          </h1>
          <input
            type="number"
            placeholder="Custom"
            onChange={(e) => {
              setData({
                ...data,
                tipPercentage: e.currentTarget.value,
              });
              document.querySelectorAll(".tip-holder h1").forEach((x) => {
                x.style.background = "var(--very-dark-cyan)";
                x.style.color = "var(--light-greyish-cyan)";
              });
            }}
          />
        </div>
      </div>
      <div className="people">
        <div className="people-holder">
          <p>Number of People</p>
          <p>Can't be zero</p>
        </div>
        <div className="input-holder">
          <input
            type="number"
            placeholder="0"
            onChange={(e) => {
              setData({
                ...data,
                peopleCount: e.currentTarget.value,
              });
              if (
                e.currentTarget.value === "" ||
                e.currentTarget.value === "0"
              ) {
                e.currentTarget.style.border = "thin solid var(--red)";
                document.querySelector(
                  ".people-holder p:nth-child(2)"
                ).style.display = "block";
              } else {
                e.currentTarget.style.border = "none";
                document.querySelector(
                  ".people-holder p:nth-child(2)"
                ).style.display = "none";
              }
            }}
          />
          <div className="person-holder">
            <img src="icon-person.svg" alt="person" />
          </div>
        </div>
      </div>
    </div>
  );
}
