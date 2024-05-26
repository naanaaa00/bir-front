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
    <div className=" h-screen py-20 px-7 bg-white flex flex-row bg-neutral-100">
  <div className="w-full h-full border-2 border-gray-200 rounded-lg overflow-auto p-4 bg-white-A700 ">
    <div className="flex flex-wrap justify-center space-x-4 ">
      {book.map((book) => (
        <div key={book.bookid} className="card w-64 bg-base-100 shadow-xl m-4">
          <figure className="w-full h-64 overflow-hidden">
            <img
              src={`http://localhost:8080/uploads/${book.image}`}
              alt=""
              className="object-cover w-full h-full object-top"
            />
          </figure>
          <div className="card-body h-64"> {/* Adjust the height as needed */}
    <h1 className="text-lg font-bold">{book.title}</h1>
    <div className="overflow-y-auto max-h-32"> {/* Set a maximum height and make it scrollable */}
        <p className="text-sm break-words text-wrap text-justify">{book.summary}</p>
    </div>
    <div className="card-actions justify-end">
        <Link
            to={`/books/${book.bookid}/pages`}
            className="mt-4 text-center font-bold hover:border-neutral-600 hover:bg-neutral-600 hover:text-white-A700 rounded-lg p-2 text-sm"
        >
            Page
        </Link>
    </div>
</div>

        </div>
      ))}
    </div>
  </div>
</div>

  );
};
