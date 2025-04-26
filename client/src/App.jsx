import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Service from "./pages/Service";
import Navbar from "./components/navbar/Navbar";
import Resister from "./pages/Resister";
import Footer from "./components/footer/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./pages/Admin-Users";
import AdminContacts from "./pages/Admin-Contacts";
import AdminUpdate from "./pages/Admin-Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/resister" element={<Resister />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/*" element={<Error />}></Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />}></Route>
            <Route path="users/:id/edit" element={<AdminUpdate/>}></Route>
            <Route path="contact" element={<AdminContacts/>}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
