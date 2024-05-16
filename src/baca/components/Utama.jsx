// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

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
  }, []);
  return (
    <div className="h-screen py-20 px-7 bg-white flex flex-row bg-white-A700">
      <div className="w-full h-full border-2 border-indigo-600 rounded-lg overflow-auto p-4">
        <div className="flex flex-wrap justify-center space-x-4">
          {book.map((book) => (
            <div key={book.bookid} className="card w-80 bg-base-100 shadow-xl m-2">
              <div className="flex flex-wrap justify-center space-x-4">
                <div className="card w-80 bg-base-100 shadow-xl m-2">
                  <figure>
                    <img src={`http://localhost:8080/uploads/${book.image}`} alt="" />
                  </figure>
                  <div className="card-body">
                    <h1 className="text-xl font-bold">{book.title}</h1>
                    <p>{book.summary}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/books/${book.bookid}/pages`} className=" mt-8 text-center hover hover:bg-indigo-600 rounded-lg border-2 border-indigo-600 p-2">
                        Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
