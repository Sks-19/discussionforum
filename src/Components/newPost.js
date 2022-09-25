import "./newPost.scss";
import { FaUpload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const NewPost = () => {
  //Upload image
  let image_link;
  const handleChange = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      image_link = reader.result;
    };
    document.getElementById("file-name").textContent = e.target.files[0].name;
  };

  const handleClick = (e) => {
    console.log("clicked");
    let get = JSON.parse(localStorage.getItem("postData") || []);

    const id = get.length + 1;
    const title = document.getElementById("heading").value;
    const inputImage = image_link;
    const category = document.getElementById("category").value;
    const name = document.getElementById("username").value;
    const post = document.getElementById("textarea").value;
    const postTime = new Date().toUTCString().slice(5, 16);
    console.log(postTime);

    if (title === "" || name === "" || post === "") {
      //
    } else {
      const obj = {
        id: id,
        title: title,
        category: category,
        image: inputImage,
        name: name,
        post: post,
        likes: 0,
        time: postTime,
        comments: [],
      };
      get.push(obj);
      localStorage.setItem("postData", JSON.stringify(get));
      alert("Post successfully created!");
      document.getElementById("heading").value = "";
      document.getElementById("username").value = "";
      document.getElementById("textarea").value = "";
    }
  };

  return (
    <>
      <div className="card m-4 p-4" style={{ textAlign: "center" }}>
        <div className="row">
          <div className="col-2">
            <NavLink
              to="/discussionforum"
              className="btn btn-white"
              style={{ width: "5rem", height: "3rem" }}
            >
              <BiArrowBack style={{ fontSize: "2rem" }} />
            </NavLink>
          </div>
          <div className="col-10">
            <h3>Create New Post</h3>
          </div>
          <hr></hr>
        </div>
        <form>
          <div className="row">
            <div className="col-lg-10 form-group py-4">
              <input
                type="text"
                className="form-control"
                id="heading"
                placeholder="What this post is about?"
                required
              />
            </div>
            <div className="col-lg-2 form-group py-4">
              <select className="form-control" id="category">
                <option>System Design</option>
                <option>General</option>
                <option>Coding</option>
                <option>Interview Questions</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 form-group py-4">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="What is your name?"
                required
              />
            </div>

            <div className="col-lg-2 form-group py-4 d-flex">
              <input
                type="file"
                id="upload-image"
                onChange={handleChange}
                name="image"
                accept="image/*"
              />
              <label htmlFor="upload-image" className="btn btn-primary">
                <FaUpload /> &nbsp; Choose A Photo
              </label>
              <p id="file-name"></p>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="textarea"></label>
            <textarea
              className="form-control"
              id="textarea"
              rows="5"
              placeholder="Write a descriptive post here."
              required
            ></textarea>
          </div>
          <div className="form-group py-4">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleClick}
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPost;
