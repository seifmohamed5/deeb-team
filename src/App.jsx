import "./App.css";
import NavBar from "./component/Navbar";
import Home from "./pages/home";
import Footer from "./component/footer";
import Help from "./pages/Help";
import { HashRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Form from "./component/form";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPass from "./pages/ForgotPass";
import ResetPassword from "./pages/Resetpass";
import About from "./pages/About";
import ContactUs from "./pages/Contactus";
import Freecourses from "./pages/Freecourses";
import Feedback from "./pages/feedback";
function App() {
  return (
    <>
    
      <HashRouter>

        {/* <!-- navbar--> */}
        <NavBar />   

        <Routes>
          
          {/* pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/for-free" element={<Freecourses />} />
          <Route path="/help" element={<Help />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/form" element={<Form />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPass />} />
          <Route path="/resetpassowrd" element={<ResetPassword />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>

        {/* <!-- footer--> */}
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
