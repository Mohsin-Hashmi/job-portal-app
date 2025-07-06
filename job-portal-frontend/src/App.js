import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ContactUs from "./pages/ContactUs";
import ApplyForJob from "./pages/ApplyForJob";
import ScrollToTop from "./components/ScrollToTop";
import RegisterYourCompany from "./pages/RegisterYourCompany";
import ViewDescription from "./pages/ViewDescription";
import CompanyDashboard from "./pages/CompanyDashboard";
import PostJob from "./pages/PostJob";
import { ToastContainer } from "react-toastify";
import ManageJob from "./pages/ManageJob";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ViewAppliedJobs from "./pages/ViewAppliedJobs";
import AboutUs from "./pages/AboutUs";
function App() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log("user", user)

 useEffect(() => {
  if (user && user.isAdmin && window.location.pathname === "/") {
    navigate("/company-dashboard");
  }
}, [user, navigate]);
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <Routes>
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/company-dashboard"
          element={
            <ProtectedRoute user={user} adminOnly={true}>
              <CompanyDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post-job"
          element={
            <ProtectedRoute user={user} adminOnly={true}>
              <PostJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-job"
          element={
            <ProtectedRoute user={user} adminOnly={true}>
              <ManageJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-profile"
          element={
            <ProtectedRoute user={user}>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply-for-job/:_id"
          element={
            <ProtectedRoute user={user}>
              <ApplyForJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-applied-jobs"
          element={
            <ProtectedRoute user={user}>
              <ViewAppliedJobs />
            </ProtectedRoute>
          }
        />
         <Route
          path="/about-us"
          element={
            <ProtectedRoute user={user}>
              <AboutUs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-description/:_id"
          element={
            <ProtectedRoute user={user}>
              <ViewDescription />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register-your-company"
          element={
            <ProtectedRoute user={user} adminOnly={true}>
              <RegisterYourCompany />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
