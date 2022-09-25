const Search = (props) => {
  return (
    <>
      <form>
        <div className="input-group rounded">
          <input
            type="text"
            onChange={(event) => {
              props.setSearchItem(event.target.value);
            }}
            className="form-control rounded"
            placeholder="Search title, author, and text.."
          />
        </div>
      </form>
    </>
  );
};

export default Search;
