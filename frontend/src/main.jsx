import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./style/global.css"
const HomeComponent = React.lazy(() => import("./pages/Home"))
const DashboardComponent = React.lazy(() => import("./pages/Dashboard"))

import { Suspense } from "react"

createRoot(document.getElementById("root")).render(
  <Suspense
    fallback={
      <div
        styles={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Carregando...
      </div>
    }
  >
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
      </Routes>
    </Router>
  </Suspense>
)
