import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";

export const AddPages = () => {
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
  const [storytext, setStorytext] = useState("");
  const [image, setImage] = useState("");
  // const [relatedBookId, setRelatedBookId] = useState("");
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState("");
  const { bookid } = useParams();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("storytext", storytext);
    formData.append("fileImage", image);
    try {
      await axios.post(`http://localhost:8080/pages/${bookid}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data has been sent successfully.",
      });
      navigate("/deleteBook");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="bg-neutral-100 border-2 border-neutral-400 h-full w-35vw self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl">
        <p className=" bg-red-900">{msg}</p>
        <form onSubmit={handleSubmit}>
          <textarea value={storytext} name="storytext" onChange={(e) => setStorytext(e.target.value)} className="textarea textarea-warning w-full h-60vh mb-6" placeholder="Summary"></textarea>
          <div className="p-2 flex flex-col sm:flex-row sm:justify-around">
            <input type="text" name="relatedBookId" className="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3 mb-6" value={bookid} placeholder="relatedBookId" readOnly />
            <label className="text-lg">Image</label>
            <input type="file" onChange={loadImage} className="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3" />
            {preview && <img src={preview} alt="preview" className="w-20 h-20" />}
          </div>
          <div className="grid justify-items-stretch mt-8">
            <button className="justify-self-center font-bold hover hover:border-neutral-600 hover:text-white-A700 hover:bg-neutral-600 rounded-lg p-2" type="submit">
              Submit!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
