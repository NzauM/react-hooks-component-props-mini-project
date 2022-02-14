import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

// console.log(blogData);

function App() {
  console.log(blogData)
  // const allPosts = blogData.posts
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={blogData.name}></Header>
      <About image={blogData.image} about={blogData.about}></About>
      <ArticleList articles={blogData.posts}/>
    </div>
    
  );
}

export default App;
