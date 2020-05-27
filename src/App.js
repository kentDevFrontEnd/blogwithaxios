import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import PostPerPage from "./components/PostPerPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [detailPost, setDetailPost] = useState({});

  const getPosts = async () => {
    setLoading(true);
    const response = await Axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const indexLast = curPage * postPerPage;
  const indexFirst = indexLast - postPerPage;
  const curPosts = posts.slice(indexFirst, indexLast);

  const setPage = (num) => {
    setCurPage(num);
  };

  const setContent = (id) => {
    const tempPost = posts.find((item) => item.id === id);
    setDetailPost(tempPost);
  };

  const choosePostPerPage = (e) => {
    setPostPerPage(e.target.value);
  };

  return (
    <Router>
      <div className="container">
        <div className="row">
          <Link to="/">
            <h1 className="text-capitalize text-white bg-info mt-2 p-3 rounded-pill">
              my blog
            </h1>
          </Link>
        </div>
        <Route exact path="/">
          <PostPerPage choosePostPerPage={choosePostPerPage} />
          <Posts posts={curPosts} loading={loading} setContent={setContent} />
          <Pagination
            postPerPage={postPerPage}
            totalPost={posts.length}
            setPage={setPage}
          />
        </Route>
        <Route exact path="/details">
          <Details detailPost={detailPost} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
