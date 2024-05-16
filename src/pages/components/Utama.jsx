import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Utama = () => {
  const [pages, setPages] = useState([]);
  const [book, setBook] = useState([]);
  const [msg, setMsg] = useState("");
  const { bookid } = useParams();

  const getBook = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/books/${bookid}`);
      setBook(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const getPages = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/books/${bookid}/pages`);
      setPages(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  useEffect(() => {
    getPages();
    getBook();
  }, [bookid]);

  return (
    <div className="h-full bg-white flex flex-col py-24 px-7 ">
      <div className="w-full h-90vh border-2 border-indigo-600 rounded-lg overflow-auto p-4 mb-6">
        <p className=" bg-red-900">{msg}</p>
        <h1>{book.title}</h1>
        {book.music && (
          <audio controls preload="none">
            <source src={`http://localhost:8080/uploads/${book.music}`} type="audio/mpeg" />
          </audio>
        )}
        {pages.map((page) => (
          <div key={page.pageid}>
            <img src={`http://localhost:8080/uploads/${page.image}`} alt="" />

            <p>{page.storytext}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-90vh border-2 border-indigo-600 rounded-lg overflow-auto p-4"></div>
    </div>
  );
};
