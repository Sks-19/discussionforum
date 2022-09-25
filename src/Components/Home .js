import { useEffect, useState } from "react";
import DiscussionPage from "./DiscussionPage";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    let post = JSON.parse(localStorage.getItem("postData"));
    setPostData(post);
  }, []);

  const searchResult = postData?.filter((posts) => {
    if (searchItem === "") {
      return posts;
    } else if (
      posts.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      posts.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      posts.post.toLowerCase().includes(searchItem.toLowerCase())
    ) {
      return posts;
    }
  });

  return (
    <>
      <div className="container my-4">
        <div className="mb-4">
          <h1 style={{ textAlign: "center" }}>Discussion Forum</h1>
          <hr></hr>
        </div>
        <div className="row">
          <div className="col-8 col-lg-10">
            <Search setSearchItem={setSearchItem} />
          </div>
          <div className="col-4 col-lg-2">
            <NavLink
              to="/createpost"
              className="btn btn-primary"
              style={{ float: "right" }}
            >
              <FaPlus />
              New Post
            </NavLink>
          </div>
        </div>
        <>
          <DiscussionPage postData={searchResult} setPostData={setPostData} />
        </>
      </div>
    </>
  );
};

export default Home;
