import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export const EditPages = () => {
  const [storytext, setStorytext] = useState("");
  const [image, setImage] = useState("");
  const [relatedBookId, setRelatedBookId] = useState("");
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPageById = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pages/${id}`);
        setStorytext(response.data.storytext);
        setRelatedBookId(response.data.relatedBookId);
        setImage(response.data.image);
        setPreview(response.data.url);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getPageById();
  }, [id]);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  const updatePage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("storytext", storytext);
    formData.append("fileImage", image);
    try {
      await axios.patch(`http://localhost:8080/pages/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data has been Update successfully.",
      });
      navigate("/deletePages");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="  flex flex-col">
      <Navbar />
      <div className="self-center h-screen">
        <div className="border-2 border-indigo-600 h-55vh w-35vw self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl">
          <p className=" bg-red-900">{msg}</p>
          <form onSubmit={updatePage}>
            <textarea value={storytext} onChange={(e) => setStorytext(e.target.value)} className="textarea textarea-warning w-full mb-6" placeholder="Summary"></textarea>
            <div className="p-2 flex flex-col sm:flex-row sm:justify-around">
              <input type="text" value={relatedBookId} className="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3 mb-6" placeholder="relatedBookId" readOnly />
              <input onChange={loadImage} type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
              {preview && <img src={preview} alt="preview" className="w-20 h-20" />}
            </div>
            <div className="flex justify-center  mt-8">
              <Link to={`/deletePages`} className=" hover hover:bg-indigo-600 justify-self-center border-2 border-indigo-600 rounded-lg p-2 mr-10">
                Back
              </Link>
              <button className="justify-self-center border-2 border-indigo-600 rounded-lg p-2" type="submit">
                Edit!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
