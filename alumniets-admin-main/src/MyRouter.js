import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPost from "./pages/AddPost/AddPost";
import AllPost from "./pages/AllPost/AllPost";
import Alumni from "./pages/Alumni/Alumni";
import Student from "./pages/Student/Student";
import MyPost from "./pages/MyPost/MyPost";
const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/allpost" element={<AllPost />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/student" element={<Student />} />
        <Route path="/mypost" element={<MyPost />} />
      </Routes>
    </Router>
  );
};
export default MyRouter;
