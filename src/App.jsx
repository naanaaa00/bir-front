import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import Dashboard from "./dashboard/Dashboard";
import { AddBook } from "./dashboard/Book/AddBook";
import { AddPages } from "./dashboard/Pages/AddPages";
import { DeleteBook } from "./dashboard/Book/DeleteBook";
import { DeletePages } from "./dashboard/Pages/DeletePages";
import { EditBook } from "./dashboard/Book/EditBook";
import { EditPages } from "./dashboard/Pages/EditPages";
import { Baca } from "./baca/Baca";
import { Login2 } from "./login2/Login2";
import { Page } from "./pages/Page";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login2 />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/addBook" element={<AddBook />} />
          <Route path="/addPages/:bookid" element={<AddPages />} />
          <Route path="/editBook/:id" element={<EditBook />} />
          <Route path="/editPages/:id" element={<EditPages />} />
          <Route path="/deleteBook" element={<DeleteBook />} />
          <Route path="/deletePages" element={<DeletePages />} />
          <Route path="/baca" element={<Baca />} />
          <Route path="/books/:bookid/pages" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
