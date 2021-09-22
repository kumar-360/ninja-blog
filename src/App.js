import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBlogs from "./AllBlogs";
import ErrorPage from "./ErrorPage";
import MainWrapper from "./MainWrapper";
import Navbar from "./Navbar";
import NewBlog from "./NewBlog";
import SingleBlog from "./SingleBlog";
import UpdateBlog from "./UpdateBlog";

const App = () => {
  return (
    <MainWrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <AllBlogs />
          </Route>
          <Route exact path='/blogs/add-blog'>
            <NewBlog />
          </Route>
          <Route exact path='/blogs/:id'>
            <SingleBlog />
          </Route>
          <Route exact path='/blogs/update-blog/:id'>
            <UpdateBlog />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
