import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Post from "./Components/newPost";
import Detail from "./Components/detailPage";
import Home from "./Components/Home ";

function App() {
  let firstPost = [];

  useEffect(() => {
    if (!localStorage.getItem("postData")) {
      localStorage.setItem("postData", JSON.stringify(firstPost));
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<Post />} />
        <Route path="/details" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
