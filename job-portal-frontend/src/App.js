import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { store } from "./utils/appStore";
import { Provider } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "./pages/UserProfile";
import ContactUs from './pages/ContactUs';
import ApplyForJob from "./pages/ApplyForJob";
import ScrollToTop from "./components/ScrollToTop";
import RegisterYourCompany from "./pages/RegisterYourCompany";
import ViewDescription from "./pages/ViewDescription";
import CompanyDashboard from "./pages/CompanyDashboard";
import PostJob from "./pages/PostJob";
import {  ToastContainer } from 'react-toastify';
import ManageJob from "./pages/ManageJob";
import 'react-toastify/dist/ReactToastify.css';
function App() {

  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <ScrollToTop />
        <ToastContainer />
          <Routes>
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/company-dashboard"
              element={
                <ProtectedRoute>
                  <CompanyDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/post-job"
              element={
                <ProtectedRoute>
                  <PostJob />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-job"
              element={
                <ProtectedRoute>
                  <ManageJob />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-profile"
              element={
                <ProtectedRoute>
                   <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact-us"
              element={
                <ProtectedRoute>
                   <ContactUs />
                </ProtectedRoute>
              }
            />
              <Route
              path="/apply-for-job/:_id"
              element={
                <ProtectedRoute>
                   <ApplyForJob />
                </ProtectedRoute>
              }
            />
            <Route
              path="/view-description/:_id"
              element={
                <ProtectedRoute>
                   <ViewDescription />
                </ProtectedRoute>
              }
            />
             <Route
              path="/register-your-company"
              element={
                <ProtectedRoute>
                   <RegisterYourCompany />
                </ProtectedRoute>
              }
            />
          </Routes>
          
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
