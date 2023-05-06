import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import ChangePassword from "./pages/Login/ChangePassord";
import Contrats from "./pages/contrats/Contrats";
import Employee from "./pages/Employee/Employee";
import Report from "./pages/Report/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/contrats" element={<Contrats />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/reports" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
