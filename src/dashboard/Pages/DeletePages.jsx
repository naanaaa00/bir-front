import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";

export const DeletePages = () => {
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

  const [pages, setPages] = useState([]);

  useEffect(() => {
    getPages();
  }, []);

  const getPages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/pages");
      const sortedPages = response.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      setPages(sortedPages);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePage = async (pageid) => {
    await axios.delete(`http://localhost:8080/pages/${pageid}`);
    getPages();
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <Navbar />

      <div className="bg-neutral-100 w-4/5 border-2 border-neutral-400 self-center rounded-3xl md:justify-center my-14 shadow-2xl h-full p-8 overflow-auto">
        <table className="">
          <thead>
            <tr className="">
              <th>No</th>
              <th>pageID</th>
              <th>relatedBookId</th>
              <th>storytext</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {pages.map((page, index) => (
              <tr key={page.pageid} className="mb-16">
                <td className="p-3 align-top break-words text-wrap text-justify">{index + 1}</td>
                <td className="p-3 align-top break-words text-wrap text-justify">{page.pageid}</td>
                <td className="p-3 align-top break-words text-wrap text-justify">{page.relatedBookId}</td>
                <td className="break-words text-wrap text-justify p-2 align-top">
                  {page.storytext}
                </td>
                <td className="flex items-start space-x-2 p-2">
                  <Link to={`/editPages/${page.pageid}`} className="font-bold hover hover:border-neutral-600  hover:bg-neutral-600 hover:text-white-A700 rounded-lg p-2">
                    edit
                  </Link>
                  <button onClick={() => deletePage(page.pageid)} className="font-bold hover hover:border-neutral-600 hover:bg-neutral-600 hover:text-white-A700  rounded-lg p-2">
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
