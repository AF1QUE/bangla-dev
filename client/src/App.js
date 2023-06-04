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
import Dashboard from "./pages/dashboard/Dashboard";
import JobsList from "./pages/dashboard/JobsList";
import ApplicationsList from "./pages/dashboard/ApplicationsList";
import OrdersList from "./pages/dashboard/OrdersList";
import CompanySettings from "./pages/dashboard/CompanySettings";

// Single Pages
import SingleCompany from "./pages/single/SingleCompany";
import SingleApplication from "./pages/single/SingleApplication";
import SingleJob from "./pages/single/SingleJob";

// Components & Layouts
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import ApplicationBar from "./components/layouts/ApplicationBar";

// Edit Pages
import EditProfile from "./pages/edit/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<SingleJob />} />
          <Route path="companies" element={<Companies />} />
          <Route path="companies/:id" element={<SingleCompany />} />
        </Route>

        <Route path="dashboard" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<JobsList />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="applications" element={<ApplicationsList />} />
          <Route path="applications/view/:id" element={<ApplicationBar />}>
            <Route index element={<SingleApplication />} />
          </Route>
          <Route path="profile/settings" element={<EditProfile />} />
          <Route path="company" element={<CompanySettings />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
