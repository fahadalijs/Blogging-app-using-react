import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AllBlogs from "./pages/AllBlogs";
import BlogInfo from "./pages/BlogInfo";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import AdminLogin from "./pages/AdminLogin";
import MyState from "./context/data/mystate";
import { Toaster } from "react-hot-toast";
import CreateBlog from "./pages/CreatBlog";

const App = () => {
  return (
    <div>
     <MyState>
     <Router>
        <Routes>
           <Route path="/" element = {<Home/>}/>
           <Route path="blog" element = {<Blog/>}/>
           <Route path="allblogs" element = {<AllBlogs/>}/>
           <Route path="blogInfo/:id" element = {<BlogInfo/>}/>
           <Route path="dashboard" element = {
            <ProtectedRouteForAdmin>
              <Dashboard/>
            </ProtectedRouteForAdmin>

           }/>
           <Route path="adminlogin" element = {<AdminLogin/>}/>
           <Route path="creatblog" element = {
            <ProtectedRouteForAdmin>
              <CreateBlog/>
            </ProtectedRouteForAdmin>
           }/>
           <Route path="/*" element = {<NoPage/>}/>
        </Routes>
        <Toaster/>
      </Router>
     </MyState>
    </div>
  )
}

export default App


export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "fahadali@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}


























