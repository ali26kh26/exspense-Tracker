const TransActionComponent = ({ transActions }) => {
  return (
    <div>
      {transActions.map((x) => {
        return (
          <section
            key={x.id}
            className={"flex transAction "}
            id={`${x.type == "Income" ? "greenborder" : "redborder"}`}
          >
            <p> {x.desc}</p>
            <p>$ {x.amount}</p>
          </section>
        );
      })}
    </div>
  );
};

export default TransActionComponent;
