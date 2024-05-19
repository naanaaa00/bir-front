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
  <div className="h-full bg-white flex flex-col py-24 px-7">
    <div className="flex justify-between items-center  p-4">
      
      <h1 className="text-left  text-2xl font-bold">title: {book.title}</h1>
      {book.music && (
  <div className="flex items-center justify-center">
    <audio controls className="outline-none">
      <source src={`http://localhost:8080/uploads/${book.music}`} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
)}

    </div>
    {pages.map((page) => (
    <div key={page.pageid} className="w-full border-2 border-gray-200 rounded-lg overflow-auto p-4 mb-6">
      <p className="bg-red-900">{msg}</p>
      <img src={`http://localhost:8080/uploads/${page.image}`} alt="" className="text-center mb-4 h-1/3 w-auto mx-auto" />
      <p className=" h-2/3">{page.storytext}</p>
    </div>
  ))}
  </div>
  );
};
