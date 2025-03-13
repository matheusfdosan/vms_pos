import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./style/global.css"
const HomeComponent = React.lazy(() => import("./pages/Home"))
const DashboardComponent = React.lazy(() => import("./pages/Dashboard"))

import { Suspense } from "react"
<<<<<<< HEAD

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Carregando...</div>}>
=======
import Loading from "./components/Loading"

createRoot(document.getElementById("root")).render(
  <Suspense
    fallback={
      <Loading />
    }
  >
>>>>>>> 0940bdc0a5f2878980dcf0fefdb62045f0b3c29b
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
      </Routes>
    </Router>
  </Suspense>
)
