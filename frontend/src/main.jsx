import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./style/global.css"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
)
