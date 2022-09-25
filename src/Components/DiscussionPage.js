import { NavLink } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import "./DiscussionPage.scss";

const DiscussionPage = (props) => {
  const handleClick = (e) => {
    const { checked, name } = e.target;

    const like = props.postData?.map((post) => {
      if (post.id === Number(name)) {
        post.likes += 1;
        return post;
      } else {
        return post;
      }
    });
    props.setPostData(like);
    localStorage.setItem("postData", JSON.stringify(like));
  };

  return (
    <>
      {props.postData?.map((data) => {
        return (
          <>
            <div className="card my-3 bg-white">
              <NavLink
                className="Navlink"
                to={{ pathname: "/details" }}
                state={{ id: data.id }}
              >
                <div className="row">
                  <div className="col-2 p-4">
                    <img
                      src={data.image}
                      alt=""
                      className="rounded-circle"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <div className="col-10">
                    <div className="col card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.name}</p>
                      <p className="card-text">Posted on: {data.time}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <div style={{ marginLeft: "20%" }}>
                <label className="mb-2">
                  <input
                    className="inputChecked"
                    type="checkbox"
                    name={data?.id}
                    checked=""
                    onChange={handleClick}
                  />
                  <FcLikePlaceholder id="likes" />
                  {data.likes}
                </label>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default DiscussionPage;
