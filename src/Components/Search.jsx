const Search = ({ filterTransActions }) => {
  const changeHandler = (e) => {
    filterTransActions(e.target.value.replace(/\s/g, ""));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={changeHandler}
        id="search"
      />
    </div>
  );
};

export default Search;
