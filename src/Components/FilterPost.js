import "./filterPost.scss";

const FilterPost = () => {
  return (
    <>
      <div className="filter">
        <div className="row p-4">
          <div className="col-6 col-md-6 col-lg-3 p-2">
            <button className="btn btn-primary">System Design</button>
          </div>
          <div className="col-6 col-md-6 col-lg-3 p-2">
            <button className="btn btn-primary">General</button>
          </div>
          <div className="col-6 col-md-6 col-lg-3 p-2">
            <button className="btn btn-primary">Coding</button>
          </div>
          <div className="col-6 col-md-6 col-lg-3 p-2">
            <button className="btn btn-primary">Interview Questions</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPost;
