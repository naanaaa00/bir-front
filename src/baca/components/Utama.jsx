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
    <div className=" h-full py-20 px-7 flex flex-row bg-hijau">
  <div className="w-full h-full  p-4 bg-hijau ">
  <div className="flex flex-wrap justify-center gap-8">
  {book.map((book) => (
    <div 
      key={book.bookid}  
      className="card w-64 bg-base-100 shadow-xl m-4 cursor-pointer transition duration-300 ease-in-out transform"
      style={{ 
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)', 
        transition: 'box-shadow 0.3s',
      }}
      onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0px 0px 20px 10px rgba(0, 0, 0, 0.3)'; }}
      onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0px 0px 8px rgba(0, 0, 0, 0.3)'; }}
    >
      <figure className="w-full h-64 overflow-hidden">
        <img
          src={`http://localhost:8080/uploads/${book.image}`}
          alt=""
          className="object-cover w-full h-full object-top"
        />
      </figure>
      <div className="card-body h-64"> {/* Adjust the height as needed */}
        <h1 className="text-lg font-bold">{book.title}</h1>
        <div className="overflow-y-auto max-h-28 "> {/* Set a maximum height and make it scrollable */}
          <p className="text-sm break-words text-wrap text-justify">{book.summary}</p>
        </div>
        <div className="card-actions absolute bottom-0 right-0">
  <Link
    to={`/books/${book.bookid}/pages`}
    className="border-2 border-hijauCustom text-hijauCustom mb-6 mr-6  text-center font-bold hover:border-hijauCustom hover:bg-hijauCustom hover:text-white-A700 rounded-lg p-2 text-sm"
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
