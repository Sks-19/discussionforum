import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";

const Detail = () => {
  const [userComment, setUserComment] = useState();

  useEffect(() => {
    let postData = JSON.parse(localStorage.getItem("postData") || []);
    setUserComment(postData[state.id - 1].comments);
  }, []);

  let location = useLocation();
  const { state } = location;

  let postData = JSON.parse(localStorage.getItem("postData") || []);

  const showData = postData?.filter((post) => post.id === state.id);

  const handleComment = (e) => {
    const userName = document.getElementById("user-name").value;
    const comment = document.getElementById("message").value;
    const postTime = new Date().toUTCString().slice(5, 25);
    postTime.slice(5, 25);

    let commentObj = {
      name: userName,
      comment: comment,
      likes: 0,
      postDate: postTime,
    };

    postData[state.id - 1].comments?.push(commentObj);

    setUserComment(postData[state.id - 1].comments);

    localStorage.setItem("postData", JSON.stringify(postData));
  };

  const handleLike = (e) => {
    const { name } = e.target;

    const like = postData[state.id - 1].comments?.map((comment) => {
      if (comment.name === name) {
        comment.likes += 1;
        return comment;
      } else {
        return comment;
      }
    });

    postData[state.id - 1].comments = like;

    setUserComment(postData[state.id - 1].comments);

    localStorage.setItem("postData", JSON.stringify(postData));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center", marginTop: "5%" }}>
            Discussion Panel
          </h1>
        </div>
        {showData?.map((post) => {
          return (
            <>
              <div className="card my-3  bg-white">
                <div className="row">
                  <div className="col-2 p-3">
                    <NavLink
                      to="/discussionforum"
                      className="btn btn-white"
                      style={{ width: "5rem", height: "3rem" }}
                    >
                      <BiArrowBack style={{ fontSize: "2rem" }} />
                    </NavLink>
                  </div>
                  <div className="col-10 px-4 py-2">
                    <h3>{post.title}</h3>
                  </div>
                  <hr></hr>
                </div>
                <div className="row">
                  <div className="col-2 p-4">
                    <img
                      src={post.image}
                      alt=""
                      className="rounded-circle"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <div className="col-10">
                    <div className="col card-body">
                      <h5 className="card-title">{post.name}</h5>
                      <p className="card-text">posted on: 23 Jul 2022</p>
                    </div>
                  </div>
                </div>
                <div className="row px-2">
                  <p>{post.post}</p>
                </div>
              </div>
            </>
          );
        })}
        <div className="container card  bg-white">
          <div className="form-group py-2">
            <input
              type="text"
              className="form-control"
              id="user-name"
              placeholder="What is your name?"
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="message"></label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Start discussing here"
            ></textarea>
          </div>
          <div className="form-group py-2">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={handleComment}
            >
              Post Comment
            </button>
          </div>
        </div>
        <div>
          <h3 className="my-2">Comments -</h3>
        </div>

        {userComment?.map((comment) => {
          return (
            <>
              <div className="container">
                <div className="card my-2  bg-white">
                  <div className="card-body">
                    <h5 className="card-title">
                      {comment.name}
                      <span style={{ fontSize: ".9rem", paddingLeft: "2%" }}>
                        posted on: {comment.postDate}
                      </span>
                    </h5>

                    <div className="row">
                      <p>{comment.comment}</p>
                    </div>
                    <div>
                      <label className="mb-2">
                        <input
                          id="likes"
                          className="inputChecked"
                          type="checkbox"
                          name={comment?.name}
                          checked=""
                          onChange={handleLike}
                        />
                        <FcLikePlaceholder />
                        {comment.likes}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Detail;
