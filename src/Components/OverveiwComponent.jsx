import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverviewComponent = ({ income, exspense, addTransAction }) => {
  const [isShow, setIsshow] = useState(false);
  return (
    <div>
      <div className="flex">
        <p className={` money  ${income - exspense >= 0 ? "green" : "red"} `}>
          Balance <span>{income - exspense}$</span>
        </p>
        <button
          onClick={() => setIsshow(!isShow)}
          className="btn"
          id={`${isShow ? "cancel" : null}`}
        >
          {isShow ? "cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransAction={addTransAction}
          setIsshow={setIsshow}
          isShow={isShow}
        />
      )}
      <div className="flex">
        <p className="money green">
          Income <span>{income}$</span>{" "}
        </p>
        <p className="money red">
          Exspense <span>{exspense}$</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default OverviewComponent;
