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
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-neutral-100 overflow-x-auto overflow-auto border-2 border-neutral-400 self-center p-6 rounded-3xl md:justify-center my-14 shadow-2xl h-full mx-6">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>bookID</th>
              <th>tittle</th>
              <th>summary</th>
            </tr>
          </thead>
          <tbody>
            {book.map((book, index) => (
              <tr key={book.bookid}>
                <th>{index + 1}</th>
                <th className="break-words text-wrap text-justify"> {book.bookid}</th>
                <td className="break-words text-wrap text-justify">{book.title}</td>
                <td className="break-words text-wrap text-justify">{book.summary}</td>
                <td className="flex space-x-2">
                  <Link to={`/editBook/${book.bookid}`} className="text-center h-8 font-bold hover hover:border-neutral-600 hover:text-white-A700 hover:bg-neutral-600 rounded-lg  p-2">
                    edit
                  </Link>
                  <Link to={`/addPages/${book.bookid}`} className="text-center h-8 w-24 font-bold hover hover:border-neutral-600 rounded-lg hover:text-white-A700 hover:bg-neutral-600  p-2">
                    Add Pages
                  </Link>
                  <button onClick={() => deleteBook(book.bookid)} className=" text-center h-8 font-bold hover hover:border-neutral-600 rounded-lg hover:text-white-A700 hover:bg-neutral-600  p-2">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
