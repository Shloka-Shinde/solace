import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import StudentSignup from "./pages/auth/StudentSignup";
import CounsellorSignup from "./pages/auth/CounsellorSignup";
import Dashboard from "./pages/CounsellorDashboard";
import Home from "./pages/Home"; // Ensure you have a Home page
import "./index.css";  // ✅ Ensure this import exists in your main entry file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/signup/counsellor" element={<CounsellorSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
