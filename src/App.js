import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Search from "./Search";
import Layout from "./hoc/Layout";
import "./assests/css/main.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search/:search" element={<Search />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
