import { useState } from "react";

const TransActionForm = ({ addTransAction, setIsshow, isShow }) => {
  const [formValue, setFormValue] = useState({ desc: "", amount: 0, type: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    addTransAction(formValue);
    setIsshow(!isShow);
  };
  const changeHandler = (e) => {
    switch (e.target.name) {
      case "desc":
        setFormValue({ ...formValue, desc: e.target.value });
        break;
      case "amount":
        setFormValue({ ...formValue, amount: e.target.value });
        break;
      case "type":
        setFormValue({ ...formValue, type: e.target.value });
        break;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValue.desc}
        placeholder="description"
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValue.amount}
        placeholder="amount"
      />
      <div>
        <input
          type="radio"
          name="type"
          value="Income"
          id="Income"
          onClick={changeHandler}
        />
        <label htmlFor="Income">Income</label>
        <input
          type="radio"
          name="type"
          value="Exspense"
          id="Exspense"
          onClick={changeHandler}
        />
        <label htmlFor="Exspense">Exspense</label>
      </div>
      <button className="btn submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default TransActionForm;
