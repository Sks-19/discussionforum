import "./newPost.scss";
import { FaUpload } from "react-icons/fa";

const NewPost = () => {
  //Upload image
  let url;
  const handleChange = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log("reader", reader);
    reader.onload = () => {
      url = reader.result;
    };
    document.getElementById("file-name").textContent = e.target.files[0].name;
  };

  const handleClick = (e) => {
    e.preventDefault();
    let get = JSON.parse(localStorage.getItem("postData") || []);

    const id = get.length + 1;
    const title = document.getElementById("heading").value;
    const inputImage = url;
    const category = document.getElementById("category").value;
    const name = document.getElementById("username").value;
    const post = document.getElementById("textarea").value;
    const postTime = new Date().toUTCString().slice(5, 25);

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
  };

  return (
    <>
      <div className="card m-4 p-4" style={{ textAlign: "center" }}>
        <div className="">
          <h3>Create New Post</h3>
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
