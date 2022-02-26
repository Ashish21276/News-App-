import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<News key="general" catagory="general" />} />
        <Route
          path="/technology"
          element={<News key="technology" catagory="technology" />}
        />
        <Route
          path="/business"
          element={<News key="business" catagory="business" />}
        />
        <Route
          path="/entertainment"
          element={<News key="entertainment" catagory="entertainment" />}
        />
        <Route
          path="/health"
          element={<News key="health" catagory="health" />}
        />
        <Route
          path="/science"
          element={<News key="science" catagory="science" />}
        />
        <Route
          path="/sports"
          element={<News key="sports" catagory="sports" />}
        />
      </Routes>

      {/* <News catagory="business" /> */}
    </>
  );
}

export default App;
