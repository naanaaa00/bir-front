import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Utama = () => {
  const [pages, setPages] = useState([]);
  const [book, setBook] = useState({});
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
      const sortedPages = response.data.sort((a, b) => new Date(a.created) - new Date(b.created));
      setPages(sortedPages);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  useEffect(() => {
    getBook();
    getPages();
  }, [bookid]);

  return (
    <div className="bg-hijau h-full flex flex-col py-24 px-7">
      <div className="flex justify-between items-center p-4 mb-2">
      <h1 className="text-left text-4xl font-bold text-hijauCustom font-abc" style={{  letterSpacing: '1px' }}>
  {book.title}
</h1>


{book.music && (
  <div className="flex items-center justify-center mt-4 bg-hijauCustom rounded-lg p-4 shadow-hijau">
    <audio controls className="outline-none">
      <source src={`http://localhost:8080/uploads/${book.music}`} type="audio/mpeg" style={{ textShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}/>
    </audio>
  </div>
)}


      </div>

      <div className="w-4/5 md:w-2/5 mx-auto bg-hmuda">
        {msg && <p className="bg-red-900 text-white p-2 ">{msg}</p>}
        {pages.map((page) => (
          <div key={page.pageid} className="bg-white p-8">
            <img
              src={`http://localhost:8080/uploads/${page.image}`}
              className="text-center mb-4 w-full mx-auto object-contain"
            />
            <p className="h-1/2 w-auto break-words text-wrap text-justify font-ubuntu text-lg ">
              {page.storytext}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
