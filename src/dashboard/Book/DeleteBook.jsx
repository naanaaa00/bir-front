import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";

export const DeleteBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isError } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);
  const [book, setBook] = useState([]);

  useEffect(() => {
    getBooks();
  });

  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/books");
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (bookid) => {
    await axios.delete(`http://localhost:8080/books/${bookid}`);
    getBooks();
  };
  return (
   
      
    <div className="bg-custom overflow-x-auto overflow-auto border-2 border-neutral-400 self-center md:justify-center my-14 shadow-2xl h-full mx-20">
    <table className="table border border-neutral-400 border-collapse w-full ">
      <thead className="bg-neutral-400 border-b-2 border-neutral-400">
        <tr>
          <th className="border-r border-neutral-400 p-4">No</th>
          <th className="border-r border-neutral-400 p-4">bookID</th>
          <th className="border-r border-neutral-400 p-4">title</th>
          <th className="border-r border-neutral-400 p-4">summary</th>
          <th className="p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {book.map((book, index) => (
          <tr key={book.bookid} className="mb-16 border-b border-neutral-400">
            <td className="border-r border-neutral-400 p-4">{index + 1}</td>
            <td className="border-r border-neutral-400 p-4 break-words text-wrap text-justify">{book.bookid}</td>
            <td className="border-r border-neutral-400 p-4 break-words text-wrap text-justify">{book.title}</td>
            <td className="border-r border-neutral-400 p-4 break-words text-wrap text-justify">{book.summary}</td>
            <td className="flex space-x-2 p-4">
              <Link to={`/editBook/${book.bookid}`} className="border-2 border-neutral-400 text-center h-8 font-bold hover:border-neutral-700 hover:text-white-A700 hover:bg-neutral-700 rounded-lg p-2">
                edit
              </Link>
              <Link to={`/addPages/${book.bookid}`} className="border-2 border-neutral-400 text-center h-8 w-24 font-bold hover:border-neutral-700 rounded-lg hover:text-white-A700 hover:bg-neutral-700 p-2">
                Add Pages
              </Link>
              <button onClick={() => deleteBook(book.bookid)} className="border-2 border-neutral-400 text-center h-8 font-bold hover:border-neutral-700 rounded-lg hover:text-white-A700 hover:bg-neutral-700 p-2">
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  
  );
};
