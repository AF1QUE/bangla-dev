import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Core Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";

// User Pages
import Dashboard from "./pages/user/Dashboard";
import JobsList from "./pages/user/JobsList";
import ApplicationsList from "./pages/user/ApplicationsList";
import Orders from "./pages/user/Orders";
import CompanySettings from "./pages/user/CompanySettings";

// Single Pages
import CompanyDetail from "./pages/single/CompanyDetail";
import ApplicationDetail from "./pages/single/ApplicationDetail";

// Components & Layouts
import Navbar from "./components/layouts/Navbar";
import UserLayout from "./components/layouts/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="companies" element={<Companies />} />
          <Route path="companies/:id" element={<CompanyDetail />} />
        </Route>

        <Route path="dashboard" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<JobsList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="applications" element={<ApplicationsList />} />
          <Route path="applications/hello" element={<ApplicationDetail />} />
          <Route path="company" element={<CompanySettings />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
