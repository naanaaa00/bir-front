import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css"; 
import AddIcon from '@mui/icons-material/Add';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut, reset } from "../features/authSlice.js";
import { AddBook } from "../dashboard/Book/AddBook.jsx";
import {DeleteBook} from "../dashboard/Book/DeleteBook.jsx"
import {DeletePages} from "../dashboard/Pages/DeletePages.jsx"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("AddBook");

  useEffect(() => {
    const list = document.querySelectorAll(".navigation li");
    const activeLink = () => {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    };
    list.forEach((item) => item.addEventListener("mouseover", activeLink));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "AddBook":
        return <AddBook />;
      case "DeleteBook":
        return <DeleteBook />;
      case "DeletePages":
        return <DeletePages />;
      default:
        return null;
    }
  };


  return (
   <>
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
              {/* <IonIcon icon={AddIcon} /> */}
              </span>
              <span className="title"></span>
            </a>
          </li>
          <li>
            <a href="#"  onClick={() => setActiveComponent("AddBook")}>
              <span className="icon">
                <AddIcon className="mb-4"/>
              </span>
              <span className="title">Add Book</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveComponent("DeleteBook")}>
              <span className="icon">
                <MenuBookIcon className="mb-4"/>
              </span>
              <span className="title">List Book</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveComponent("DeletePages")}>
              <span className="icon">
                <ListAltIcon className="mb-4"/>
              </span>
              <span className="title">List Page</span>
            </a>
          </li>
          <li className="" onClick={Logout}>
            <a href="#">
              <span className="icon">
                <LogoutIcon className="mb-4"/>
              </span>
              <span className="title">Logout</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="main">
        <div className="topbar">
          <div className="togglee">
            <IconButton onClick={toggleMenu}>
              <MenuIcon style={{ color: '--hijau' }}/>
            </IconButton>
          </div>
        </div>

       
        {renderComponent()}

      </div>
    </>
  );
}

export default App;
