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
   
      <div className="bg-custom overflow-x-auto overflow-auto border-2 border-neutral-400 self-center md:justify-center my-14 shadow-2xl h-full mx-20">
        <table className="table border border-neutral-400 border-collapse w-full ">
          <thead className="bg-neutral-400 border-b-2 border-neutral-400">
            <tr className="">
              <th className="border-r border-neutral-400 p-4">No</th>
              <th className="border-r border-neutral-400 p-4">pageID</th>
              <th className="border-r border-neutral-400 p-4">relatedBookId</th>
              <th className="border-r border-neutral-400 p-4">storytext</th>
              <th className=" p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {pages.map((page, index) => (
              <tr key={page.pageid} className="mb-16 border-b border-neutral-400">
                <td className="border-r border-neutral-400 p-4 break-words text-wrap text-justify">{index + 1}</td>
                <td className="border-r border-neutral-400 p-4 break-words text-wrap text-justify">{page.pageid}</td>
                <td className="border-r border-neutral-400 p-4 break-words text-wrap text-justify">{page.relatedBookId}</td>
                <td className="border-r border-neutral-400 p-4 break-words text-wrap text-justify align-top">
                  {page.storytext}
                </td>
                <td className="flex items-start space-x-2 p-4">
                  <Link to={`/editPages/${page.pageid}`} className="border-2 border-neutral-400 text-center h-8 font-bold hover:border-neutral-700 hover:text-white-A700 hover:bg-neutral-700 rounded-lg p-2">
                    edit
                  </Link>
                  <button onClick={() => deletePage(page.pageid)} className="border-2 border-neutral-400 text-center h-8 font-bold hover:border-neutral-700 hover:text-white-A700 hover:bg-neutral-700 rounded-lg p-2">
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
