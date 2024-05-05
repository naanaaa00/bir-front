import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import Login from "./login/index";
import Dashboard from "./dashboard/Dashboard";
import { AddBook } from "./dashboard/Book/AddBook";
import { AddPages } from "./dashboard/Pages/AddPages";
import { DeleteBook } from "./dashboard/Book/DeleteBook";
import { DeletePages } from "./dashboard/Pages/DeletePages";
import { EditBook } from "./dashboard/Book/EditBook";
import { EditPages } from "./dashboard/Pages/EditPages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/addPages/:bookid" element={<AddPages />} />
          <Route path="/editBook/:id" element={<EditBook />} />
          <Route path="/editPages" element={<EditPages />} />
          <Route path="/deleteBook" element={<DeleteBook />} />
          <Route path="/deletePages" element={<DeletePages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
