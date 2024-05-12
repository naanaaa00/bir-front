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
  });
  const getPages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/pages");
      setPages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePage = async (pageid) => {
    await axios.delete(`http://localhost:8080/pages/${pageid}`);
    getPages();
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="overflow-x-auto overflow-auto border-2 border-indigo-600 self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl h-full">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>pageID</th>
              <th>relatedBookId</th>
              <th>storytext</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, index) => (
              <tr key={page.pageid}>
                <th>{index + 1}</th>
                <th>{page.pageid}</th>
                <td>{page.relatedBookId}</td>
                <td>{page.storytext}</td>
                <td>
                  <Link to={`/editPages/${page.pageid}`} className="hover hover:bg-indigo-600 rounded-lg border-2 border-indigo-600 p-2">
                    edit
                  </Link>
                  <button onClick={() => deletePage(page.pageid)} className="hover hover:bg-indigo-600 rounded-lg border-2 border-indigo-600 p-2">
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
