import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import ChangePassword from "./pages/Login/ChangePassord";
import Contrats from "./pages/contrats/Contrats";
import Employee from "./pages/Employee/Employee";
import Report from "./pages/Report/Report";
import Navbar from "./components/Navbar/Navbar";
import { ClassNames } from "@emotion/react";

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DODI</title>
      </Helmet>

      <Router>
        <Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/change" element={<ChangePassword />} />
            <Route path="/contrats" element={<Contrats />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
