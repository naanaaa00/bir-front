// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import Perias from "../assets/Group.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export const Utama = () => {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const response = await axios.get("http://localhost:8080/books");
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBook();
  });
  return (
    <div className="h-screen  py-20 px-7 ">
      <div className=" h-auto border-2 border-indigo-600 rounded-lg overflow-auto grid grid-cols-3 gap-2">
        {book.map((book) => (
          <div key={book.bookid} className="border-2 border-indigo-600 p-5 rounded-lg">
            <h1 className="text-xl font-bold">{book.title}</h1>
            <p>{book.summary}</p>
            <img src={`http://localhost:8080/uploads/${book.image}`} alt="" />
            <Link to={`/page/${book.bookid}`} className=" mt-8 text-center hover hover:bg-indigo-600 rounded-lg border-2 border-indigo-600 p-2">
              Page
            </Link>
          </div>
        ))}
        <img src={Perias} className="w-16 mb-5 place-self-start" />
        <img src={Perias} className="w-16 mb-5 place-self-end " />
      </div>
    </div>
  );
};
