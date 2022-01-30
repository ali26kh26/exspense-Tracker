import { useEffect, useState } from "react";
import OverviewComponent from "./OverveiwComponent";
import Search from "./Search";
import TransActionComponent from "./TransActionComponent";

const ExspenseTrackerApp = () => {
  const [income, setIncome] = useState(0);
  const [exspense, setExsoense] = useState(0);
  const [transActions, setTransActions] = useState([]);
  const [filteredTransActrions, setFilteredTransActrions] = useState([]);
  const [input, setInput] = useState("");

  const addTransAction = (e) => {
    setTransActions([...transActions, { ...e, id: Date.now() }]);
  };
  const filterTransActions = (input) => {
    setInput(input);
    if (!input || input === "") {
      setFilteredTransActrions(transActions);
      return;
    }
    const updated = transActions.filter((x) =>
      x.desc.toLowerCase().match(input.toLowerCase())
    );
    setFilteredTransActrions(updated);
  };
  useEffect(() => {
    let inc = 0;
    let exs = 0;
    transActions.map((x) =>
      x.type === "Income"
        ? (inc += parseInt(x.amount))
        : (exs += parseInt(x.amount))
    );
    setIncome(inc);
    setExsoense(exs);
    filterTransActions(input);
  }, [transActions]);
  return (
    <div className="width">
      <h3>exspense tracker</h3>
      <OverviewComponent
        income={income}
        exspense={exspense}
        addTransAction={addTransAction}
      />
      <Search filterTransActions={filterTransActions} />
      <TransActionComponent transActions={filteredTransActrions} />
    </div>
  );
};

export default ExspenseTrackerApp;
